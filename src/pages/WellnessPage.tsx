import { HeartPulse } from "lucide-react";
import CategoryPage from "@/components/CategoryPage";
import Navbar from "@/components/Navbar";

const WellnessPage = () => (
  <>
    <Navbar />
    <CategoryPage
      icon={HeartPulse}
      name="Personal Wellness"
      intro="Modern wellness guides designed to help people improve posture, relieve everyday discomfort, build healthy habits, and take better care of their body and mind."
      dataFile="/data/ebooks/wellness.json"
    />
  </>
);

export default WellnessPage;
