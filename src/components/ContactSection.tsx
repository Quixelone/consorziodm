import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contatti" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3 block">
          Contatti
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-tight max-w-xl">
          Parliamo del vostro progetto.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-2 border-foreground/10 shadow-hard bg-card p-8 space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-xs uppercase tracking-wider">
                Nome e Cognome *
              </Label>
              <Input
                id="name"
                placeholder="Mario Rossi"
                required
                className="border-2 border-foreground/10 rounded-sm focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="font-bold text-xs uppercase tracking-wider">
                Azienda / Ente
              </Label>
              <Input
                id="company"
                placeholder="Comune di Roma"
                className="border-2 border-foreground/10 rounded-sm focus-visible:ring-accent"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pec" className="font-bold text-xs uppercase tracking-wider">
              PEC *
            </Label>
            <Input
              id="pec"
              type="email"
              placeholder="nome@pec.it"
              required
              className="border-2 border-foreground/10 rounded-sm focus-visible:ring-accent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-bold text-xs uppercase tracking-wider">
              Messaggio
            </Label>
            <Textarea
              id="message"
              placeholder="Descrivete brevemente la vostra necessità..."
              rows={5}
              className="border-2 border-foreground/10 rounded-sm focus-visible:ring-accent resize-none"
            />
          </div>
          <Button type="submit" className="w-full shadow-hard font-bold uppercase tracking-wider">
            Invia Richiesta
          </Button>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-2 border-foreground/10 shadow-hard bg-card p-8 flex flex-col gap-6"
        >
          <h3 className="text-xl font-extrabold text-foreground">Sede Centrale</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Via del Porto, 42</p>
                <p className="text-muted-foreground text-sm">80133 Napoli (NA), Italia</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">PEC</p>
                <p className="text-muted-foreground text-sm">consorzio@pec.mediterraneo.it</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground">Telefono</p>
                <p className="text-muted-foreground text-sm">+39 081 000 0000</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground">
              <strong>P.IVA:</strong> 01234567890
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              <strong>Codice Fiscale:</strong> 01234567890
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
