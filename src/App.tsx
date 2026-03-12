import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ParentingPage from "./pages/ParentingPage";
import FitnessPage from "./pages/FitnessPage";
import ProductivityPage from "./pages/ProductivityPage";
import AIPage from "./pages/AIPage";
import VideoGamesWithoutGuiltPage from "./pages/VideoGamesWithoutGuiltPage";
import WellnessPage from "./pages/WellnessPage";
import NeckPainResetPage from "./pages/NeckPainResetPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/parenting" element={<ParentingPage />} />
          <Route path="/parenting/video-games-without-guilt" element={<VideoGamesWithoutGuiltPage />} />
          <Route path="/fitness" element={<FitnessPage />} />
          <Route path="/productivity" element={<ProductivityPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/wellness" element={<WellnessPage />} />
          <Route path="/wellness/3-minutes-neck-pain-reset" element={<NeckPainResetPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
