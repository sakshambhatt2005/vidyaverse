
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference or system preference
  useEffect(() => {
    const isDark = localStorage.getItem("vidyaverse-theme") === "dark" ||
      (!localStorage.getItem("vidyaverse-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setIsDarkMode(isDark);
    updateTheme(isDark);
  }, []);

  const updateTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vidyaverse-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vidyaverse-theme", "light");
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    updateTheme(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-all duration-300 hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span 
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ease-in-out ${
            isDarkMode ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Moon size={18} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
        </span>
        <span 
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ease-in-out ${
            isDarkMode ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Sun size={18} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform" />
        </span>
      </span>
      <span className="sr-only">{isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
    </button>
  );
}
