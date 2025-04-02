
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, BrainCircuit, ChevronRight, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { HomeHero } from "@/components/home/HomeHero";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  const navigate = useNavigate();
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HomeHero setIsAIAssistantOpen={setIsAIAssistantOpen} />
        <Features />
        <FeaturedCourses />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />

      {/* AI Assistant Dialog */}
      <Dialog open={isAIAssistantOpen} onOpenChange={setIsAIAssistantOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-indigo-500" /> 
              AI Learning Assistant
            </DialogTitle>
            <DialogDescription>
              Ask me anything about your courses or for learning recommendations.
            </DialogDescription>
          </DialogHeader>
          <AIAssistant />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
