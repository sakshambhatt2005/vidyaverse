
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-900"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(120,119,198,0.1)_0%,rgba(120,119,198,0)_100%)]"></div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-800/30 dark:bg-indigo-900/30 dark:text-indigo-300">
            <span>Start Your Learning Journey Today</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl/tight text-slate-900 dark:text-white">
            Transform your future with <span className="text-indigo-600 dark:text-indigo-400">VidyaVerse</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 md:text-xl/relaxed max-w-[800px]">
            Join thousands of learners already benefiting from our comprehensive courses, 
            supportive community, and cutting-edge learning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              onClick={() => navigate('/courses')}
              className="group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-md"
              size="lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => navigate('/forum')}
              variant="outline" 
              size="lg"
              className="bg-white dark:bg-slate-900"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
