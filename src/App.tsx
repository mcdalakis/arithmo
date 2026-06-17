import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Books from "./pages/Books";
import Exams from "./pages/Exams";
import EducationalLinks from "./pages/EducationalLinks";
import UsefulLinks from "./pages/UsefulLinks";
import MoiraCalculator from "./pages/MoiraCalculator";
import NationalExams2025 from "./pages/NationalExams2025";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/arithmo">
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/books" element={<Books />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/educational-links" element={<EducationalLinks />} />
              <Route path="/useful-links" element={<UsefulLinks />} />
              <Route path="/moira-calculator" element={<MoiraCalculator />} />
              <Route path="/national-exams-2025" element={<NationalExams2025 />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
