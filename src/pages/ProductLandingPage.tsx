import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

interface ProductLandingPageProps {
  title: string;
  description: string;
  cover: string;
  price: string;
  tag?: string;
  backUrl: string;
  backLabel: string;
}

const ProductLandingPage = ({
  title,
  description,
  cover,
  price,
  tag,
  backUrl,
  backLabel,
}: ProductLandingPageProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(backUrl)}
            className="mb-8 text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> {backLabel}
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card-hover)] bg-muted">
                <img
                  src={cover}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {tag && (
                <span className="inline-block self-start rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1">
                  {tag}
                </span>
              )}

              <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {title}
              </h1>

              <p className="font-heading text-3xl font-bold text-primary">
                {price}
              </p>

              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {description}
              </div>

              <Button
                variant="brand"
                size="lg"
                className="w-full sm:w-auto mt-2"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Buy Now
              </Button>

              {/* ── Future Expansion Sections ── */}

              {/* Hero section — expand here */}
              {/* Problem/solution sections — expand here */}
              {/* Benefits — expand here */}
              {/* Testimonials — expand here */}
              {/* FAQ — expand here */}
              {/* Purchase integration — expand here */}
            </motion.div>
          </div>

          {/* ── Visual Content Placeholder ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-20 border-2 border-dashed border-border rounded-xl p-12 text-center"
          >
            <p className="text-muted-foreground font-heading font-semibold text-lg mb-2">
              Visual Content Placeholder
            </p>
            <p className="text-muted-foreground/70 text-sm max-w-md mx-auto">
              Reserved for product illustrations, screenshots, feature visuals, and supporting graphics.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProductLandingPage;
