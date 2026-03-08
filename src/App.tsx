import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Method from "./pages/Method";
import Ink from "./pages/Ink";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SendIssue from "./pages/funnel/SendIssue";
import FundingIntelligence from "./pages/programs/FundingIntelligence";
import AIAdoption from "./pages/programs/AIAdoption";
import ExecutionReadiness from "./pages/programs/ExecutionReadiness";
import ProposalSupport from "./pages/programs/ProposalSupport";
import AcademyDesign from "./pages/programs/AcademyDesign";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/funding-intelligence" element={<FundingIntelligence />} />
            <Route path="/programs/ai-adoption" element={<AIAdoption />} />
            <Route path="/programs/execution-readiness" element={<ExecutionReadiness />} />
            <Route path="/programs/proposal-support" element={<ProposalSupport />} />
            <Route path="/programs/academy-design" element={<AcademyDesign />} />
            <Route path="/method" element={<Method />} />
            <Route path="/ink" element={<Ink />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/send-issue" element={<SendIssue />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
