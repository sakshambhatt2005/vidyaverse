
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
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
