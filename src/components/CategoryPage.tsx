import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import EbookCard, { type EbookData } from "@/components/EbookCard";

interface CategoryPageProps {
  icon: LucideIcon;
  name: string;
  intro: string;
  dataFile: string;
}

const CategoryPage = ({ icon: Icon, name, intro, dataFile }: CategoryPageProps) => {
  const navigate = useNavigate();
  const [ebooks, setEbooks] = useState<EbookData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(dataFile)
      .then((res) => res.json())
      .then((data) => setEbooks(data))
      .catch(() => setEbooks([]))
      .finally(() => setLoading(false));
  }, [dataFile]);

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

        {loading ? null : ebooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ebooks.map((book, i) => (
              <EbookCard key={book.title} ebook={book} index={i} />
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
            <p className="text-muted-foreground/70 text-sm mt-2">
              We are preparing new digital guides for this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
