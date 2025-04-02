
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  MessageCircle, 
  Trophy 
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: "course" | "quiz" | "forum" | "achievement";
  title: string;
  timestamp: string;
  description: string;
}

interface RecentActivityProps {
  activities: ActivityItem[];
}

export function RecentActivity({ activities }: RecentActivityProps) {
  const getIconForActivity = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case "quiz":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "forum":
        return <MessageCircle className="h-5 w-5 text-purple-500" />;
      case "achievement":
        return <Trophy className="h-5 w-5 text-amber-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="rounded-xl bg-white dark:bg-slate-800/60 shadow-md border border-slate-200/70 dark:border-slate-700/50 p-6">
      <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-200">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-start space-x-3 rounded-lg border border-slate-200/70 dark:border-slate-700/30 p-3 bg-white/50 dark:bg-slate-800/50 hover:shadow-sm transition-all duration-200"
          >
            <div className="mt-0.5 rounded-full bg-slate-100 dark:bg-slate-700 p-1.5">
              {getIconForActivity(activity.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium text-slate-800 dark:text-slate-200">{activity.title}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{activity.timestamp}</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
