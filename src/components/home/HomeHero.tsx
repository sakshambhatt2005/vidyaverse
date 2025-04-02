
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, BookOpen, ArrowRight } from "lucide-react";

interface HomeHeroProps {
  setIsAIAssistantOpen: (isOpen: boolean) => void;
}

export function HomeHero({ setIsAIAssistantOpen }: HomeHeroProps) {
  const navigate = useNavigate();
  
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900/80"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.05)_0%,rgba(120,119,198,0)_100%)]"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-4 md:gap-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-800/30 dark:bg-indigo-900/30 dark:text-indigo-300">
              <span className="pulse-subtle">VidyaVerse - The Future of Learning</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
              Transform Your Learning Experience
            </h1>
            <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl">
              Interactive courses, personalized learning paths, and AI-powered assistance. 
              Join VidyaVerse and unlock your full potential.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button 
                onClick={() => navigate('/courses')}
                className="group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md"
                size="lg"
              >
                Explore Courses
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                onClick={() => setIsAIAssistantOpen(true)}
                variant="outline" 
                size="lg"
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
              >
                <MessageSquare className="mr-2 h-4 w-4 text-indigo-500" />
                Ask AI Assistant
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-700/30 bg-white/30 dark:bg-slate-800/30 shadow-lg backdrop-blur-sm animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/30 dark:to-purple-950/30"></div>
              <img 
                src="/placeholder.svg" 
                alt="Learning Dashboard" 
                width={600} 
                height={400}
                className="relative z-10 w-full rounded-xl p-2 scale-[1.03] hover:scale-[1.05] transition-transform duration-500 opacity-90 hover:opacity-100"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24 flex flex-col items-center">
          <h2 className="text-xl font-medium text-center mb-8 text-slate-700 dark:text-slate-300">
            Trusted by leading institutions and learners worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-70 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-12 w-24 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
