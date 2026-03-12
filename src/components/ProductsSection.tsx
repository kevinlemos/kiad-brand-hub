import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Baby, Dumbbell, ListChecks, BrainCircuit, HeartPulse, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect, useCallback } from "react";

const categories = [
  {
    icon: Baby,
    name: "Parenting",
    desc: "Modern parenting guides to help families raise confident, healthy and emotionally strong children.",
    path: "/parenting",
  },
  {
    icon: Dumbbell,
    name: "Fitness",
    desc: "Effective fitness and health guides designed to help you build strength, energy and better habits.",
    path: "/fitness",
  },
  {
    icon: ListChecks,
    name: "Productivity",
    desc: "Proven systems and strategies to focus better, manage time, and achieve more every day.",
    path: "/productivity",
  },
  {
    icon: BrainCircuit,
    name: "AI",
    desc: "Practical guides to understand and use artificial intelligence tools to work faster and smarter.",
    path: "/ai",
  },
  {
    icon: HeartPulse,
    name: "Personal Wellness",
    desc: "Practical guides to help people improve their wellbeing, reduce everyday discomfort, build healthier habits, and take better care of their body and mind.",
    path: "/wellness",
  },
];

const ProductsSection = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 300;
    el.scrollBy({ left: direction === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
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
            Explore Our Digital Guides
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical digital guides designed to help you grow, learn, and improve your daily life.
          </p>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8">
          {categories.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigate(p.path)}
              className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-[image:var(--gradient-brand)] transition-all duration-300">
                <p.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
              <Button variant="brand-outline" size="sm">
                View Guides
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Mobile / tablet horizontal scroll */}
        <div className="lg:hidden relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card/90 backdrop-blur shadow-[var(--shadow-card-hover)] flex items-center justify-center text-foreground hover:bg-card transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-card/90 backdrop-blur shadow-[var(--shadow-card-hover)] flex items-center justify-center text-foreground hover:bg-card transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {categories.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => navigate(p.path)}
                className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer snap-start shrink-0 w-[75vw] sm:w-[45vw]"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-[image:var(--gradient-brand)] transition-all duration-300">
                  <p.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{p.desc}</p>
                <Button variant="brand-outline" size="sm">
                  View Guides
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
