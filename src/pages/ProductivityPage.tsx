import { ListChecks } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import Navbar from "@/components/Navbar";

const ProductivityPage = () => (
  <>
    <Navbar />
    <CategoryPage
      icon={ListChecks}
      name="Productivity"
      intro="Proven systems and strategies to focus better, manage time, and achieve more every day. Unlock your full potential with actionable digital guides."
      dataFile="/data/ebooks/productivity.json"
    />
  </>
);

export default ProductivityPage;
