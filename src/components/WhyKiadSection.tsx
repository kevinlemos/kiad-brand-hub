import { motion } from "framer-motion";
import { Brain, Lightbulb, Cpu, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Digital Solutions",
    desc: "We design products focused on real-world usefulness.",
  },
  {
    icon: Lightbulb,
    title: "Simple & Practical",
    desc: "Our tools are easy to use and built for everyday life.",
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    desc: "We leverage modern technology to create powerful digital solutions.",
  },
  {
    icon: Rocket,
    title: "Constant Innovation",
    desc: "Our portfolio grows with new ideas and practical tools.",
  },
];

const WhyKiadSection = () => (
  <section id="why-kiad" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Why KIAD
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Technology + Creativity = Practical Digital Solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-8 rounded-lg hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-[image:var(--gradient-brand)] flex items-center justify-center">
              <f.icon className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyKiadSection;
