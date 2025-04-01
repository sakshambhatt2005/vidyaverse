
import { ArrowUpRight, BookOpen, BrainCircuit, FileText, Video } from "lucide-react";

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

  return (
    <div className="dashboard-card">
      <h2 className="mb-4 text-xl font-semibold">Recommended For You</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group flex flex-col rounded-lg border p-4 transition-colors hover:bg-muted/50"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-muted p-1.5">
                  {getIconForType(item.type)}
                </div>
                <span className="text-xs font-medium uppercase text-muted-foreground">
                  {item.type}
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <h3 className="line-clamp-2 font-medium">{item.title}</h3>
            <p className="line-clamp-2 mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
