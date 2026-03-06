import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, CheckCircle, Star } from "lucide-react";
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

const benefits = [
  "Understand what science really says about video games",
  "Learn how gaming affects the developing brain",
  "Recognize early warning signs of unhealthy gaming habits",
  "Set clear boundaries without constant conflict",
  "Turn gaming into a positive family experience",
];

const testimonials = [
  {
    quote:
      "This guide helped me stop fighting with my son about video games. Now we actually talk about what he plays and set boundaries that work.",
    name: "Sarah M.",
    location: "Austin, TX",
  },
  {
    quote:
      "I was scared my daughter was addicted to her tablet. This guide gave me the tools to understand what was really going on and how to respond calmly.",
    name: "James R.",
    location: "Denver, CO",
  },
  {
    quote:
      "Short, practical, and straight to the point. I read it in one evening and started applying it the next day. Best $5 I've spent as a parent.",
    name: "Monica L.",
    location: "Miami, FL",
  },
];

const faqs = [
  {
    q: "Is this guide only for parents of teenagers?",
    a: "No. The guide covers strategies for children of all ages, from early childhood through adolescence. The earlier you start, the easier it is to build healthy habits.",
  },
  {
    q: "Will this help if my child already plays too much?",
    a: "Yes. The guide includes specific steps to recognize problematic patterns and gradually introduce healthier boundaries without triggering major conflicts.",
  },
  {
    q: "Does the book recommend banning video games?",
    a: "Not at all. The approach is about balance and guidance, not elimination. Video games can be beneficial when managed properly.",
  },
  {
    q: "How long is the ebook?",
    a: "It's a concise, practical guide designed to be read in a single sitting — around 40–50 pages focused entirely on actionable advice.",
  },
  {
    q: "Can both parents use the guide?",
    a: "Absolutely. The guide is meant to be shared between parents or caregivers so everyone is aligned on the same approach.",
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
            </motion.div>
          </div>
        </section>

        {/* ── PROBLEM & BENEFITS ── */}
        <section className="mt-24 bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Why modern parents struggle with gaming
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Many parents feel overwhelmed by how much time their children
                spend on screens and video games. The goal is not to eliminate
                gaming, but to guide it in a healthy direction.
              </p>
            </motion.div>

            <div className="grid gap-4 max-w-xl mx-auto">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-[var(--shadow-card)]"
                >
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT PREVIEW ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                  What's inside
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
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-12"
            >
              What parents are saying
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

        {/* ── PRICE ── */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-lg text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Get the Guide
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
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
