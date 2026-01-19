import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home2 from "./pages/Home2";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProductPage from "./pages/ProductsPage/ProductPage";
import StudioPage from "./pages/StudioPage/StudioPage";
import VoiceLibraryPage from "./pages/VoiceLibraryPage/VoiceLibraryPage";
import ProductionPage from "./pages/ProductionPage/ProductionPage";
import MobilePage from "./pages/MobilePage/MobilePage";
import TextToSpeechPage from "./pages/TextToSpeechPage/TextToSpeechPage";
import SpeechToTextPage from "./pages/SpeechToTextPage/SpeechToTextPage";
import VoiceIsolatorPage from "./pages/VoiceIsolatorPage/VoiceIsolatorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/voice-library" element={<VoiceLibraryPage />} />
          <Route path="/production" element={<ProductionPage />} />
          <Route path="/mobile" element={<MobilePage />} />
          <Route path="/text-to-speech" element={<TextToSpeechPage />} />
          <Route path="/speech-to-text" element={<SpeechToTextPage />} />
          <Route path="/voice-isolator" element={<VoiceIsolatorPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
