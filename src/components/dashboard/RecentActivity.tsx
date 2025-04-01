
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
    <div className="dashboard-card">
      <h2 className="mb-4 text-xl font-semibold">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 rounded-lg border p-3">
            <div className="mt-0.5 rounded-full bg-muted p-1.5">
              {getIconForActivity(activity.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{activity.title}</h3>
                <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
