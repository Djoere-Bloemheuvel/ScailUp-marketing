
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIAutomations from "./pages/AIAutomations";
import CustomAISaaS from "./pages/CustomAISaaS";
import Consultancy from "./pages/Consultancy";
import AutonomousAIAgents from "./pages/AutonomousAIAgents";
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
          <Route path="/ai-automations" element={<AIAutomations />} />
          <Route path="/custom-ai-saas" element={<CustomAISaaS />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/autonomous-ai-agents" element={<AutonomousAIAgents />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
