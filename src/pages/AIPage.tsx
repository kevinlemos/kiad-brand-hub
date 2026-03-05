import { BrainCircuit } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import Navbar from "@/components/Navbar";

const AIPage = () => (
  <>
    <Navbar />
    <CategoryPage
      icon={BrainCircuit}
      name="AI"
      intro="Practical guides to understand and use artificial intelligence tools to work faster and smarter. Stay ahead with the latest AI strategies and techniques."
    />
  </>
);

export default AIPage;
