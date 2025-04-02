
import { ArrowUpRight, BookOpen, BrainCircuit, FileText, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RecommendationItem {
  id: string;
  type: "course" | "article" | "video" | "quiz";
  title: string;
  description: string;
  link: string;
}

interface RecommendationsProps {
  items: RecommendationItem[];
}

export function Recommendations({ items }: RecommendationsProps) {
  const navigate = useNavigate();
  
  const getIconForType = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case "article":
        return <FileText className="h-5 w-5 text-purple-500" />;
      case "video":
        return <Video className="h-5 w-5 text-red-500" />;
      case "quiz":
        return <BrainCircuit className="h-5 w-5 text-green-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleItemClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-200">Recommended For You</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item.link)}
            className="group flex flex-col rounded-lg border border-slate-200/70 dark:border-slate-700/30 p-4 bg-white/50 dark:bg-slate-800/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-slate-100 dark:bg-slate-700 p-1.5">
                  {getIconForType(item.type)}
                </div>
                <span className="text-xs font-medium uppercase text-slate-500 dark:text-slate-400">
                  {item.type}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
            </div>
            <h3 className="line-clamp-2 font-medium text-slate-800 dark:text-slate-200">{item.title}</h3>
            <p className="line-clamp-2 mt-1 text-sm text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
