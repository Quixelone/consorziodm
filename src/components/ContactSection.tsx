import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const ContactSection = () => (
  <section id="contatti" className="section-padding bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="gold-line" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Contatti
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground leading-[1.05]">
          Parliamo del vostro
          <span className="text-accent italic"> progetto.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Form - 3 cols */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3 bg-card border border-border p-8 md:p-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-bold text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Nome e Cognome *
              </Label>
              <Input
                id="name"
                placeholder="Mario Rossi"
                required
                className="border-border rounded-sm h-12 focus-visible:ring-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="font-bold text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Azienda / Ente
              </Label>
              <Input
                id="company"
                placeholder="Comune di Roma"
                className="border-border rounded-sm h-12 focus-visible:ring-accent"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="pec" className="font-bold text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              PEC *
            </Label>
            <Input
              id="pec"
              type="email"
              placeholder="nome@pec.it"
              required
              className="border-border rounded-sm h-12 focus-visible:ring-accent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-bold text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Messaggio
            </Label>
            <Textarea
              id="message"
              placeholder="Descrivete brevemente la vostra necessità..."
              rows={5}
              className="border-border rounded-sm focus-visible:ring-accent resize-none"
            />
          </div>
          <Button type="submit" className="bg-accent text-accent-foreground hover:bg-gold-light font-bold uppercase text-xs tracking-wider px-8 h-12">
            <Send className="mr-2 h-4 w-4" />
            Invia Richiesta
          </Button>
        </motion.form>

        {/* Info - 2 cols */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 bg-primary p-8 md:p-12 flex flex-col"
        >
          <h3 className="font-serif text-2xl font-black text-primary-foreground mb-8">
            Sede Centrale
          </h3>

          <div className="space-y-6 flex-1">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center shrink-0">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm">Via del Porto, 42</p>
                <p className="text-primary-foreground/50 text-sm">80133 Napoli (NA), Italia</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center shrink-0">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm">PEC</p>
                <p className="text-primary-foreground/50 text-sm">consorzio@pec.mediterraneo.it</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-primary-foreground text-sm">Telefono</p>
                <p className="text-primary-foreground/50 text-sm">+39 081 000 0000</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-primary-foreground/10">
            <p className="text-[11px] text-primary-foreground/40 uppercase tracking-wider">
              P.IVA 01234567890
            </p>
            <p className="text-[11px] text-primary-foreground/40 uppercase tracking-wider mt-1">
              C.F. 01234567890
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
