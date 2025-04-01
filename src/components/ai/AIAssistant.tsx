
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    role: "assistant",
    content: "Hi there! I'm your AI learning assistant. How can I help with your studies today?",
  },
];

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: "user",
      content: input,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      // Mock AI responses based on specific keywords
      let aiResponse = "I'm sorry, I don't have specific information about that. Would you like me to help you find learning resources on this topic?";
      
      const lowercaseInput = input.toLowerCase();
      
      if (lowercaseInput.includes("computer science") || lowercaseInput.includes("programming")) {
        aiResponse = "For Computer Science, I recommend starting with data structures and algorithms. Would you like resources for beginners or more advanced topics?";
      } else if (lowercaseInput.includes("math") || lowercaseInput.includes("calculus")) {
        aiResponse = "Mathematics is fundamental to many disciplines. For calculus specifically, I recommend the 'Calculus for Engineers' course that covers derivatives, integrals, and their applications.";
      } else if (lowercaseInput.includes("quiz") || lowercaseInput.includes("test")) {
        aiResponse = "You can find quizzes in the Quizzes section. Based on your recent activity, I recommend taking the Data Structures quiz to reinforce your knowledge.";
      } else if (lowercaseInput.includes("help") || lowercaseInput.includes("stuck")) {
        aiResponse = "I'm here to help! To better assist you, could you provide more details about what concept you're struggling with?";
      }
      
      const assistantMessage: Message = {
        role: "assistant",
        content: aiResponse,
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
      
      toast({
        title: "AI Assistant Response",
        description: "New message from your learning assistant",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[400px] max-h-[60vh]">
      <div className="flex-1 overflow-y-auto px-2 py-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 max-w-[80%] ${
                message.role === "user"
                  ? "bg-indigo-100 dark:bg-indigo-900/40 text-slate-800 dark:text-slate-200"
                  : "bg-slate-100 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200"
              } p-3 rounded-lg`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {message.role === "user" ? (
                  <div className="bg-indigo-500 p-1 rounded-full">
                    <User className="h-3 w-3 text-white" />
                  </div>
                ) : (
                  <div className="bg-green-500 dark:bg-green-600 p-1 rounded-full">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              <div className="text-sm">{message.content}</div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-800/60 p-3 rounded-lg text-slate-800 dark:text-slate-200">
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 dark:bg-green-600 p-1 rounded-full">
                  <Bot className="h-3 w-3 text-white" />
                </div>
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse" />
                  <div className="h-2 w-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse delay-150" />
                  <div className="h-2 w-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-pulse delay-300" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSendMessage} className="border-t border-slate-200 dark:border-slate-700 p-4">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your courses..."
            className="flex-1 bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={isLoading || !input.trim()}
            className="bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
