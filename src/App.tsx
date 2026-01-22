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
import TextToSpeechAPIPage from "./pages/TextToSpeechAPI/TextToSpeechAPIPage";
import SpeechToTextPage from "./pages/SpeechToTextPage/SpeechToTextPage";
import VoiceIsolatorPage from "./pages/VoiceIsolatorPage/VoiceIsolatorPage";
import SoundEffectsPage from "./pages/SoundEffectsPage/SoundEffectsPage";
import MusicPage from "./pages/MusicPage/MusicPage";
import ImageVideoPage from "./pages/ImageVideoPage/ImageVideoPage";
import VoiceDesignPage from "./pages/VoiceDesignPage/VoiceDesignPage";
import NotFound from "./pages/NotFound";
import RealtimeSpeechToTextPage from "./pages/RealtimeSpeechToTextPage/RealtimeSpeechToTextPage";
import VoiceChangerPage from "./pages/VoiceChanger/VoiceChangerPage";
import VoiceCloningPage from "./pages/VoiceCloning/VoiceCloningPage";
import DubbingStudioPage from "./pages/DubbingStudio/DubbingStudioPage";
import AgentPage from "./pages/AgentsPage/AgentPage";
import IntegrationsPage from "./pages/IntegrationsPage/IntegrationsPage";
import BlogCategoryPage from "./pages/BlogCategoryPage/BlogCategoryPage";
import AITrustPage from "./pages/AITrustPage/AITrustPage";
import TelecommunicationsPage from "./pages/TelecommunicationsPage/TelecommunicationsPage";
import FinancialServicesPage from "./pages/FinancialServicesPage/FinancialServicesPage";
import HealthcarePage from "./pages/HealthcarePage/HealthcarePage";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage";
import RetailPage from "./pages/RetailPage/RetailPage";
import CustomerSupportPage from "./pages/CustomerSupportPage/CustomerSupportPage";
import LeadQualificationSupportPage from "./pages/LeadQualification/LeadQualificationSupportPage";
import AiReceptionistPage from "./pages/AiReceptionist/AiReceptionistPage";
import OutBondPage from "./pages/OutBonds/OutBondPage";
import AboutPage from "./pages/About/AboutPage";
import SafetyPage from "./pages/Safety/SafetyPage";
import BlogPage from "./pages/Blog/BlogPage";
import CareersPage from "./pages/Careers/CareersPage";
import ImpactProgramPage from "./pages/ImpactProgram/ImpactProgramPage";
import VoiceDataPartnershipsPage from "./pages/VoiceDataPartnerships/VoiceDataPartnershipsPage";
import IconicMarketplacePage from "./pages/IconicMarketplace/IconicMarketplacePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/impact-program" element={<ImpactProgramPage />} />
          <Route
            path="/voice-data-partnerships"
            element={<VoiceDataPartnershipsPage />}
          />
          <Route
            path="/iconic-marketplace"
            element={<IconicMarketplacePage />}
          />
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
          <Route path="/text-to-speech-api" element={<TextToSpeechAPIPage />} />
          <Route path="/speech-to-text" element={<SpeechToTextPage />} />
          <Route path="/voice-isolator" element={<VoiceIsolatorPage />} />
          <Route path="/sound-effects" element={<SoundEffectsPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/image-video" element={<ImageVideoPage />} />
          <Route path="/voice-design" element={<VoiceDesignPage />} />
          <Route path="/voice-design" element={<VoiceDesignPage />} />
          <Route
            path="/realtime-speech-to-text"
            element={<RealtimeSpeechToTextPage />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/voice-changer" element={<VoiceChangerPage />} />
          <Route path="/voice-cloning" element={<VoiceCloningPage />} />
          <Route path="/dubbing-studio" element={<DubbingStudioPage />} />
          <Route path="/agents" element={<AgentPage />} />
          <Route path="/agents/integrations" element={<IntegrationsPage />} />
          <Route
            path="/agents/ai-trust-and-reliability"
            element={<AITrustPage />}
          />
          <Route
            path="/agents/telecommunications"
            element={<TelecommunicationsPage />}
          />
          <Route
            path="/agents/financial-services"
            element={<FinancialServicesPage />}
          />
          <Route path="/agents/healthcare" element={<HealthcarePage />} />
          <Route path="/agents/technology" element={<TechnologyPage />} />
          <Route path="/agents/retail-ecommerce" element={<RetailPage />} />
          <Route
            path="/agents/customer-support"
            element={<CustomerSupportPage />}
          />
          <Route
            path="/lead-qualification"
            element={<LeadQualificationSupportPage />}
          />
          {/* ai-receptionist */}
          <Route path="/ai-receptionist" element={<AiReceptionistPage />} />
          <Route path="/outbonds" element={<OutBondPage />} />
          <Route
            path="/blog/category/agents-platform-stories"
            element={<BlogCategoryPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
