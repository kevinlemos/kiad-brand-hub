import { motion } from "framer-motion";
import { Mail, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            If you have questions, suggestions, or need support, feel free to contact us directly through email or our social media.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          <a
            href="mailto:kiad.digital@gmail.com"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-sm">kiad.digital@gmail.com</span>
          </a>

          <a
            href="https://instagram.com/kiad.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-6 h-6 text-primary" />
            <span className="text-sm">@kiad.co</span>
          </a>

          <a
            href="https://facebook.com/Kiad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="w-6 h-6 text-primary" />
            <span className="text-sm">Kiad</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
