import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ShoppingCart,
  CheckCircle,
  Star,
  BookOpen,
  Brain,
  AlertTriangle,
  Shield,
  Heart,
  Users,
  Lock,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "https://hotmart.com/checkout-placeholder";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const whatYouLearn = [
  { icon: Brain, text: "What science actually says about video games and the developing brain" },
  { icon: Heart, text: "The real cognitive and emotional benefits games can provide" },
  { icon: AlertTriangle, text: "How to recognize when gaming becomes unhealthy" },
  { icon: Shield, text: "How to set healthy boundaries without constant conflict" },
  { icon: Users, text: "How to turn gaming into a positive tool for learning and family connection" },
];

const whoIsFor = [
  "Parents with children between 6 and 16 years old",
  "Families struggling with screen-time limits",
  "Parents who want less conflict around gaming",
  "Parents who want practical solutions instead of fear or judgment",
];

const testimonials = [
  {
    quote: "This guide helped me stop fighting with my son about video games. Now we actually talk about what he plays and set boundaries that work.",
    name: "Sarah M.",
    location: "Austin, TX",
  },
  {
    quote: "I was scared my daughter was addicted to her tablet. This guide gave me the tools to understand what was really going on and how to respond calmly.",
    name: "James R.",
    location: "Denver, CO",
  },
  {
    quote: "Short, practical, and straight to the point. I read it in one evening and started applying it the next day. Best $5 I've spent as a parent.",
    name: "Monica L.",
    location: "Miami, FL",
  },
];

const faqs = [
  {
    q: "Is this guide based on research?",
    a: "Yes. It is built using current scientific insights about gaming, child development, and digital behavior.",
  },
  {
    q: "What age group is this for?",
    a: "The guide is designed mainly for parents of children between 6 and 16 years old.",
  },
  {
    q: "Is this a physical book?",
    a: "No. This is a digital ebook that you will receive instantly after purchase.",
  },
];

const RaisingHealthyGamerKidsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-24 pb-0">
        {/* Back button */}
        <div className="container mx-auto px-4 max-w-5xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/parenting")}
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Parenting
          </Button>
        </div>

        {/* ── HERO ── */}
        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card-hover)] bg-muted">
                <img
                  src="/assets/covers/raising-healthy-gamer-kids.jpg"
                  alt="Raising Healthy Gamer Kids ebook cover"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5"
            >
              <Badge variant="secondary" className="self-start text-xs">
                Best Seller
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Raising Healthy Gamer Kids
              </h1>
              <p className="font-heading text-lg text-muted-foreground">
                A Practical and Science-Based Guide for Modern Parents
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Help your child build a healthy relationship with video games —
                without constant fights, guilt, or fear. Parents will learn how
                to understand gaming, set healthy boundaries, and turn video
                games into a tool for growth and connection.
              </p>
              <Button
                variant="brand"
                size="lg"
                className="w-full sm:w-auto mt-2"
                onClick={() => window.open(CHECKOUT_URL, "_blank")}
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Buy the Guide
              </Button>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3.5 h-3.5" />
                Secure checkout • Instant access • 30-day guarantee
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 1 — Problem Identification ── */}
        <section className="mt-24 bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...sectionAnim} className="text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Video Games Aren't the Problem. Lack of Guidance Is.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most parents today struggle with the same questions:
              </p>
              <div className="grid gap-3 max-w-md mx-auto text-left mb-8">
                {[
                  "How much gaming is too much?",
                  "Are video games harming my child's brain?",
                  "Why do games seem so important to them?",
                ].map((q, i) => (
                  <p key={i} className="text-foreground text-sm font-medium italic pl-4 border-l-2 border-primary/40">
                    {q}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                The problem usually isn't gaming itself.{" "}
                <span className="text-foreground font-semibold">
                  It's not knowing how to guide it in a healthy way.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2 — What You'll Learn ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2 {...sectionAnim} className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
              What You'll Learn Inside This Guide
            </motion.h2>
            <div className="grid gap-4 max-w-xl mx-auto">
              {whatYouLearn.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-card rounded-lg p-4 shadow-[var(--shadow-card)]"
                >
                  <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3 — Who This Guide Is For ── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2 {...sectionAnim} className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
              This Guide Is Perfect For
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
              {whoIsFor.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 p-3"
                >
                  <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — Trust / Credibility ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div {...sectionAnim}>
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Built on Research, Designed for Real Families
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                This guide combines insights from modern research on child development, psychology, and digital behavior with practical strategies that parents can apply immediately.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mt-4">
                The goal is not to eliminate gaming — but to help families create a healthier and more balanced relationship with it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── PRODUCT PREVIEW ── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              {...sectionAnim}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card)] bg-muted max-w-xs mx-auto md:mx-0">
                <img
                  src="/assets/covers/raising-healthy-gamer-kids.jpg"
                  alt="Ebook preview"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  What's Inside
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This short practical guide helps parents understand the role of
                  gaming in modern childhood and provides tools to guide their
                  children with balance and confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              {...sectionAnim}
              className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-12"
            >
              What Parents Are Saying
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] flex flex-col"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-[hsl(var(--warm-accent))] text-[hsl(var(--warm-accent))]"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </p>
                  <p className="mt-4 font-heading text-sm font-semibold text-foreground">
                    {t.name}{" "}
                    <span className="font-normal text-muted-foreground">
                      – {t.location}
                    </span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — Purchase ── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <motion.div {...sectionAnim} className="flex flex-col items-center gap-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Get the Complete Guide
              </h2>
              <p className="font-heading text-5xl font-bold text-primary">$5</p>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                A simple guide that can transform how your family deals with
                video games.
              </p>
              <Button
                variant="brand"
                size="lg"
                className="px-12"
                onClick={() => window.open(CHECKOUT_URL, "_blank")}
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Buy Now
              </Button>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap className="w-3.5 h-3.5" />
                Instant access after purchase.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 6 — Guarantee ── */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <motion.div {...sectionAnim} className="flex flex-col items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-secondary" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                30-Day Satisfaction Guarantee
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                If this guide doesn't help you better understand and manage gaming in your family, contact us within 30 days and we'll refund your purchase.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 7 — FAQ ── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.h2
              {...sectionAnim}
              className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="font-heading text-sm font-semibold text-foreground text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RaisingHealthyGamerKidsPage;
