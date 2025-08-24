import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Testlar from "./pages/Testlar";
import TestDetail from "./pages/TestDetail";
import Profil from "./pages/Profil";
import BizHaqimizda from "./pages/BizHaqimizda";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/testlar" element={<Layout><Testlar /></Layout>} />
          <Route path="/test/:category" element={<Layout><TestDetail /></Layout>} />
          <Route path="/profil" element={<Layout><Profil /></Layout>} />
          <Route path="/biz-haqimizda" element={<Layout><BizHaqimizda /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
