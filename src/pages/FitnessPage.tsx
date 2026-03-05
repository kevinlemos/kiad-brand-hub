import { Dumbbell } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import Navbar from "@/components/Navbar";

const FitnessPage = () => (
  <>
    <Navbar />
    <CategoryPage
      icon={Dumbbell}
      name="Fitness"
      intro="Effective fitness and health guides designed to help you build strength, energy and better habits. Start transforming your body and mind today."
      dataFile="/data/ebooks/fitness.json"
    />
  </>
);

export default FitnessPage;
