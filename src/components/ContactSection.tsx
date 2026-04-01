import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contatti" className="section-spacing bg-surface">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="heading-section mb-4">Contatti</p>
        <h2 className="heading-lg max-w-md mx-auto">
          Parliamo del vostro progetto.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 card-premium p-8 lg:p-10 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Nome e Cognome *
              </Label>
              <Input id="name" placeholder="Mario Rossi" required className="rounded-xl h-11 border-border/80" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Azienda / Ente
              </Label>
              <Input id="company" placeholder="Comune di Roma" className="rounded-xl h-11 border-border/80" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="entity-type" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Tipologia Ente
            </Label>
            <select
              id="entity-type"
              className="flex h-11 w-full rounded-xl border border-border/80 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Seleziona tipologia...</option>
              <option value="pa">Pubblica Amministrazione</option>
              <option value="impresa">Grande Impresa</option>
              <option value="pmi">PMI / Impresa Privata</option>
              <option value="professionista">Professionista / Studio</option>
              <option value="altro">Altro</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Email / PEC *
            </Label>
            <Input id="email" type="email" placeholder="nome@pec.it" required className="rounded-xl h-11 border-border/80" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Messaggio
            </Label>
            <Textarea id="message" placeholder="Descrivete la vostra necessità..." rows={4} className="rounded-xl border-border/80 resize-none" />
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
            <Send className="h-4 w-4" />
            Invia Richiesta
          </button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="card-premium p-6">
            <h3 className="font-bold text-foreground mb-5 text-[15px]">Sede Legale</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Via Dei Mille, 174</p>
                  <p className="text-sm text-muted-foreground">80121 Napoli (NA)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">+39 081 410160</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">info@consorziodelmediterraneo.it</p>
                  <p className="text-xs text-muted-foreground mt-0.5">PEC: consorziodelmediterraneo@pec.it</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-premium p-6">
            <h3 className="font-bold text-foreground mb-3 text-[15px]">Dati Fiscali</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>P.IVA e C.F.: 07445901213</p>
              <p>REA: NA-884629</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
