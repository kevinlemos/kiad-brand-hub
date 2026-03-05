import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, BookOpen, Shield } from "lucide-react";

const products = [
  {
    icon: FileText,
    name: "SmartDocs",
    desc: "AI-powered document management for modern teams.",
  },
  {
    icon: BarChart3,
    name: "DataPulse",
    desc: "Real-time analytics dashboard for smarter decisions.",
  },
  {
    icon: BookOpen,
    name: "LearnFlow",
    desc: "Interactive digital learning platform for all ages.",
  },
  {
    icon: Shield,
    name: "SecureVault",
    desc: "Digital security tools to protect your online life.",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Our Products
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Discover our growing collection of smart digital solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-[image:var(--gradient-brand)] transition-all duration-300">
              <p.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
            <Button variant="brand-outline" size="sm">
              View Product
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
