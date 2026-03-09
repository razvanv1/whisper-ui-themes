import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";

// Lazy load non-critical routes to reduce initial JS bundle
const Programs = lazy(() => import("./pages/Programs"));
const Method = lazy(() => import("./pages/Method"));
const Ink = lazy(() => import("./pages/Ink"));
const Resources = lazy(() => import("./pages/Resources"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SendIssue = lazy(() => import("./pages/funnel/SendIssue"));
const FundingIntelligence = lazy(() => import("./pages/programs/FundingIntelligence"));
const AIAdoption = lazy(() => import("./pages/programs/AIAdoption"));
const ExecutionReadiness = lazy(() => import("./pages/programs/ExecutionReadiness"));
const ProposalSupport = lazy(() => import("./pages/programs/ProposalSupport"));
const AcademyDesign = lazy(() => import("./pages/programs/AcademyDesign"));
const PrivacyPolicy = lazy(() => import("./pages/legal/PrivacyPolicy"));
const CookiePolicy = lazy(() => import("./pages/legal/CookiePolicy"));
const TermsAndConditions = lazy(() => import("./pages/legal/TermsAndConditions"));

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <CookieConsent />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
