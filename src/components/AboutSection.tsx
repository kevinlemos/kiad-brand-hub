import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-24 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-8">
          About KIAD
        </h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            KIAD is a digital brand focused on building practical solutions for everyday challenges.
          </p>
          <p>
            Our mission is to transform knowledge, technology, and creativity into digital products that help people improve their daily lives.
          </p>
          <p>
            We believe digital tools should be simple, useful, and accessible to everyone.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 mx-auto w-24 h-1 rounded-full bg-[image:var(--gradient-brand)]" />
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
