import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, CheckCircle2 } from "lucide-react";

const certifications = [
  { name: "Attestazione SOA", category: "Qualificazione", status: "Attiva" },
  { name: "ISO 9001:2015", category: "Qualità", status: "Attiva" },
  { name: "ISO 14001:2015", category: "Ambiente", status: "Attiva" },
  { name: "ISO 45001:2018", category: "Sicurezza", status: "Attiva" },
  { name: "SA 8000", category: "Responsabilità Sociale", status: "Attiva" },
];

const EsgSection = () => (
  <section id="esg" className="py-20 md:py-28 bg-concrete">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
          Compliance
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight max-w-xl">
          ESG & Certificazioni.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
          Trasparenza, conformità normativa e impegno ambientale: i pilastri della nostra governance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border-2 border-foreground/10 shadow-hard bg-card overflow-hidden mb-8"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-bold uppercase text-xs tracking-wider">
                Certificazione
              </TableHead>
              <TableHead className="text-primary-foreground font-bold uppercase text-xs tracking-wider">
                Categoria
              </TableHead>
              <TableHead className="text-primary-foreground font-bold uppercase text-xs tracking-wider text-right">
                Stato
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {certifications.map((c) => (
              <TableRow key={c.name} className="border-b border-border">
                <TableCell className="font-semibold text-foreground">{c.name}</TableCell>
                <TableCell className="text-muted-foreground">{c.category}</TableCell>
                <TableCell className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    {c.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="shadow-hard-sm border-2 border-foreground/10 font-bold">
          <FileText className="mr-2 h-4 w-4" />
          Download Policy ESG
        </Button>
        <Button variant="outline" className="shadow-hard-sm border-2 border-foreground/10 font-bold">
          <Download className="mr-2 h-4 w-4" />
          Codice Etico
        </Button>
      </div>
    </div>
  </section>
);

export default EsgSection;
