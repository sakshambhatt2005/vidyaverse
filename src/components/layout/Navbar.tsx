
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Menu, MessageSquare, Home, BookmarkIcon, BrainCircuit, UserCircle, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Knowledge Hub", href: "/knowledge-hub", icon: BookmarkIcon },
    { name: "Quizzes", href: "/quizzes", icon: BrainCircuit },
    { name: "Forum", href: "/forum", icon: MessageSquare },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 w-full transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 dark:bg-slate-900/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/70 dark:border-slate-700/30" 
        : "bg-transparent"
    }`}>
      <div className="container flex h-16 items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="hidden text-xl font-bold sm:inline-block">VidyaVerse</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:ml-10 md:flex md:flex-1 md:items-center md:justify-between md:space-x-4">
          <div className="flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="outline" size="icon" className="rounded-full">
              <UserCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex flex-1 justify-end md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-4 h-5 w-5" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
            <div className="mt-4 flex items-center px-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <UserCircle className="h-5 w-5" />
              </Button>
              <span className="ml-3 text-sm font-medium">Profile</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
