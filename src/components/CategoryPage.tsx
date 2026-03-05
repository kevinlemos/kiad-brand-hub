import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

export interface Ebook {
  cover: string;
  title: string;
  description: string;
  link: string;
}

interface CategoryPageProps {
  icon: LucideIcon;
  name: string;
  intro: string;
  ebooks?: Ebook[];
}

const CategoryPage = ({ icon: Icon, name, intro, ebooks = [] }: CategoryPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="mb-8 text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Icon className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {name}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{intro}</p>
        </motion.div>

        {ebooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group"
              >
                <div className="aspect-[3/4] bg-muted overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{book.description}</p>
                  <Button
                    variant="brand-outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(book.link, "_blank")}
                  >
                    View Guide
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">Products coming soon</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
