
import { BookOpen, BrainCircuit, MessageSquare, Sparkles, Layers, Target } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-500" />,
      title: "Comprehensive Courses",
      description: "Access a vast library of courses in various subjects, from computer science to humanities."
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-indigo-500" />,
      title: "Interactive Learning",
      description: "Engage with quizzes, challenges, and projects that reinforce your understanding."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-indigo-500" />,
      title: "Community Support",
      description: "Connect with peers and instructors in our forum to get help and share knowledge."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-indigo-500" />,
      title: "AI-Powered Assistance",
      description: "Get instant answers and recommendations from our advanced AI learning assistant."
    },
    {
      icon: <Layers className="h-6 w-6 text-indigo-500" />,
      title: "Knowledge Hub",
      description: "Access a wide range of resources, articles, and reference materials to supplement your learning."
    },
    {
      icon: <Target className="h-6 w-6 text-indigo-500" />,
      title: "Personalized Learning",
      description: "Receive custom recommendations based on your progress, goals, and learning style."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm dark:bg-indigo-900/30">
              Our Platform Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-slate-900 dark:text-white">
              Everything you need to excel in your learning journey
            </h2>
            <p className="mx-auto max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed">
              VidyaVerse combines modern technology with proven learning methods to create an effective and engaging educational experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/20">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
