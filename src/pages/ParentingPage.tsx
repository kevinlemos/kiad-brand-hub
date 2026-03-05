import { Baby } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import Navbar from "@/components/Navbar";

const ParentingPage = () => (
  <>
    <Navbar />
    <CategoryPage
      icon={Baby}
      name="Parenting"
      intro="Modern parenting guides to help families raise confident, healthy and emotionally strong children. Explore practical resources for every stage of your parenting journey."
    />
  </>
);

export default ParentingPage;
