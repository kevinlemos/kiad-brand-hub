import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ShoppingCart,
  CheckCircle,
  Star,
  BookOpen,
  Monitor,
  Smartphone,
  Activity,
  Timer,
  Zap,
  Lock,
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

const CHECKOUT_URL = "https://pay.hotmart.com/G104872119A";

const sectionAnim = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const whatYouLearn = [
  { icon: Activity, text: "The most common causes of everyday neck tension" },
  { icon: Monitor, text: "How posture and screen habits affect your neck" },
  { icon: Timer, text: "A simple 3-minute routine designed to release tight muscles" },
  { icon: BookOpen, text: "Safe exercises used in basic mobility and physical therapy routines" },
  { icon: Smartphone, text: "Simple habits that help prevent neck stiffness during the day" },
];

const whoIsFor = [
  "People who work long hours on a computer",
  "Anyone who spends significant time using a smartphone",
  "Adults experiencing neck stiffness or tension",
  "Anyone looking for a quick daily mobility routine",
];

const testimonials = [
  {
    quote: "I sit at a computer all day and my neck used to feel tight every evening. This 3-minute routine actually makes a noticeable difference.",
    name: "Michael R.",
    location: "Denver, CO",
  },
  {
    quote: "I was skeptical that such a short routine could help, but after a week I noticed my neck felt looser and I had fewer tension headaches.",
    name: "Laura K.",
    location: "Portland, OR",
  },
  {
    quote: "Super simple and easy to follow. I do the exercises at my desk during breaks and my neck feels so much better by the end of the day.",
    name: "David S.",
    location: "Chicago, IL",
  },
];

const faqs = [
  {
    q: "Is this guide suitable for beginners?",
    a: "Absolutely. The exercises are beginner-friendly and designed for people with no prior experience in mobility or fitness routines.",
  },
  {
    q: "How long does the routine take?",
    a: "The full routine takes approximately 3 minutes. You can do it once or multiple times throughout the day.",
  },
  {
    q: "Is this a physical book?",
    a: "No. This is a digital guide that you will receive instantly after purchase.",
  },
  {
    q: "Do I need any equipment?",
    a: "No equipment is needed. All exercises use only your own body weight and natural movements.",
  },
  {
    q: "Can I do these exercises at work?",
    a: "Yes. The exercises are discreet and can be performed sitting at your desk or standing in a small space.",
  },
];

const NeckPainResetPage = () => {
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
            onClick={() => navigate("/wellness")}
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Personal Wellness
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
                  src="/assets/covers/3-minutes-neck-pain-reset.jpg"
                  alt="3-Minute Neck Pain Reset ebook cover"
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
                3-Minute Neck Pain Reset
              </h1>
              <p className="font-heading text-lg text-muted-foreground">
                Relieve neck tension in just a few minutes a day with 5 simple exercises you can do anywhere — no equipment needed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Neck stiffness and tension are common for people who spend hours on their phones or computers. 3-Minute Neck Pain Reset is a simple, easy-to-follow guide that shows you how to relieve neck tension with five gentle exercises you can do anywhere. In just a few minutes a day, you can help loosen tight muscles, improve neck mobility, and support better posture — all without equipment or complicated routines.
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
                Secure checkout • Instant access • 7-day guarantee
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2 — Problem Identification ── */}
        <section className="mt-24 bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...sectionAnim} className="text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Neck Pain Is Often Caused by Everyday Habits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many people experience daily neck stiffness without realizing what's causing it.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Long hours at a desk, constant phone use, and poor posture can place extra strain on the neck muscles. Common signs include:
              </p>
              <div className="grid gap-3 max-w-md mx-auto text-left mb-8">
                {[
                  "Stiffness and tightness in the neck",
                  "Discomfort after screen time",
                  "Reduced neck mobility",
                  "Tension headaches",
                ].map((q, i) => (
                  <p key={i} className="text-foreground text-sm font-medium pl-4 border-l-2 border-primary/40">
                    {q}
                  </p>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                The good news is that{" "}
                <span className="text-foreground font-semibold">
                  simple mobility exercises can help release tension and restore natural movement.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 3 — What You'll Learn ── */}
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

        {/* ── SECTION 4 — Who This Guide Is For ── */}
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

        {/* ── SECTION 5 — Trust / Credibility ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div {...sectionAnim}>
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Simple Wellness Guidance You Can Apply Immediately
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
                This guide is based on widely recommended neck mobility and posture exercises commonly used in wellness and physical therapy routines.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mt-4">
                The goal is simple: provide clear, practical movements that help reduce muscle tension and support healthier daily posture. No complicated programs — just simple actions you can apply immediately.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              {...sectionAnim}
              className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-12"
            >
              What Readers Are Saying
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

        {/* ── SECTION 7 — Purchase ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <motion.div {...sectionAnim} className="flex flex-col items-center gap-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Get the Complete Guide
              </h2>
              <span className="font-heading text-5xl font-bold text-primary">$3.90</span>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                A quick, practical guide designed to help you relieve everyday neck tension in just a few minutes a day.
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

        {/* ── SECTION 8 — Guarantee ── */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <motion.div {...sectionAnim} className="flex flex-col items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-secondary" />
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                7-Day Satisfaction Guarantee
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                If this guide doesn't help you better understand and manage gaming in your family, contact us within 7 days and we'll refund your purchase.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 9 — FAQ ── */}
        <section className="py-20">
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

export default NeckPainResetPage;
