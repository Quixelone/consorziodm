import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const srcAssets = path.join(root, "src", "assets");
const publicDir = path.join(root, "public");

const excludedAssetNames = new Set([
  "new-logo.png",
  "logo-cdm-symbol.jpeg",
  "logo-cdm-symbol-clean.png",
  "logo-cdm-icon.png",
]);

const imageExtensions = new Set([".jpg", ".jpeg", ".png"]);

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    }),
  );

  return files.flat();
}

async function referencedPublicImages() {
  const projectsFile = path.join(root, "src", "data", "projects.ts");
  const content = await fs.readFile(projectsFile, "utf8");
  const matches = [...content.matchAll(/"\/([^"\r\n]+\.(?:jpe?g|png))"/gi)];
  return [...new Set(matches.map((match) => path.join(publicDir, match[1])))];
}

async function referencedAssetImages() {
  const sourceFiles = (await walk(path.join(root, "src"))).filter((file) => /\.(tsx?|jsx?)$/i.test(file));
  const assetNames = new Set();

  for (const file of sourceFiles) {
    const content = await fs.readFile(file, "utf8");
    for (const match of content.matchAll(/@\/assets\/([^"\r\n]+\.(?:jpe?g|png))/gi)) {
      assetNames.add(match[1]);
    }
  }

  return [...assetNames]
    .filter((name) => !excludedAssetNames.has(name))
    .map((name) => path.join(srcAssets, name));
}

async function convert(filePath) {
  if (!(await exists(filePath))) {
    throw new Error(`Missing referenced image: ${filePath}`);
  }

  const parsed = path.parse(filePath);
  if (!imageExtensions.has(parsed.ext.toLowerCase())) return null;

  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);
  const isCertification = parsed.name.startsWith("cert-");
  const pipeline = sharp(filePath, { failOn: "none" }).rotate().resize({
    width: isCertification ? 1800 : 1800,
    height: isCertification ? 1800 : 1800,
    fit: "inside",
    withoutEnlargement: true,
  });

  await pipeline
    .webp({
      quality: isCertification ? 88 : 82,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath);

  const original = (await fs.stat(filePath)).size;
  const converted = (await fs.stat(outputPath)).size;

  return {
    input: path.relative(root, filePath),
    output: path.relative(root, outputPath),
    original,
    converted,
    saved: original - converted,
  };
}

const targets = [...new Set([...(await referencedAssetImages()), ...(await referencedPublicImages())])];
const results = [];

for (const target of targets) {
  const result = await convert(target);
  if (result) results.push(result);
}

const originalTotal = results.reduce((sum, item) => sum + item.original, 0);
const convertedTotal = results.reduce((sum, item) => sum + item.converted, 0);

console.table(
  results
    .sort((a, b) => b.saved - a.saved)
    .map((item) => ({
      output: item.output,
      originalKB: Math.round(item.original / 1024),
      webpKB: Math.round(item.converted / 1024),
      savedKB: Math.round(item.saved / 1024),
    })),
);

console.log(
  `Converted ${results.length} images. Saved ${Math.round((originalTotal - convertedTotal) / 1024)} KB (${Math.round(
    (1 - convertedTotal / originalTotal) * 100,
  )}%).`,
);
