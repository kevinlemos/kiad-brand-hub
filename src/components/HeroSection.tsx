import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6"
      >
        Smart Digital Solutions for Modern Life
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
      >
        We create practical digital products designed to solve real-life challenges in simple and effective ways.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button variant="brand" size="lg" asChild>
          <a href="#products">Explore Products</a>
        </Button>
        <Button variant="brand-outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
          <a href="#about">Learn More</a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
