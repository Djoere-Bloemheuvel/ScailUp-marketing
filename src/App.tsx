
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const AIAutomations = lazy(() => import("./pages/AIAutomations"));
const CustomAISaaS = lazy(() => import("./pages/CustomAISaaS"));
const Consultancy = lazy(() => import("./pages/Consultancy"));
const AutonomousAIAgents = lazy(() => import("./pages/AutonomousAIAgents"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Optimized QueryClient configuration for better performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Prevent unnecessary refetches for better performance
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: 'always',
      retry: (failureCount, error: any) => {
        // Avoid retries for 4xx errors
        if (error?.status >= 400 && error?.status < 500) return false;
        return failureCount < 2;
      },
    },
  },
});

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen bg-premium-black flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-premium-gold"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai-automations" element={<AIAutomations />} />
            <Route path="/custom-ai-saas" element={<CustomAISaaS />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/autonomous-ai-agents" element={<AutonomousAIAgents />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
