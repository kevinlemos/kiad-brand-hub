import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export interface EbookData {
  title: string;
  description: string;
  cover: string;
  tag?: string;
  price: string;
  landing: string;
}

interface EbookCardProps {
  ebook: EbookData;
  index: number;
}

const EbookCard = ({ ebook, index }: EbookCardProps) => {
  const navigate = useNavigate();

  const goToLanding = () => navigate(ebook.landing);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group flex flex-col"
    >
      <div
        className="aspect-[3/4] bg-muted overflow-hidden cursor-pointer"
        onClick={goToLanding}
      >
        <img
          src={ebook.cover}
          alt={ebook.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-heading text-lg font-semibold text-foreground mb-2 cursor-pointer hover:text-primary transition-colors"
          onClick={goToLanding}
        >
          {ebook.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {ebook.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          {ebook.tag && (
            <Badge variant="secondary" className="text-xs">
              {ebook.tag}
            </Badge>
          )}
          <span className="font-heading font-bold text-primary text-lg ml-auto">
            {ebook.price}
          </span>
        </div>
        <Button
          variant="brand-outline"
          size="sm"
          className="w-full"
          onClick={goToLanding}
        >
          View Guide
        </Button>
      </div>
    </motion.div>
  );
};

export default EbookCard;
