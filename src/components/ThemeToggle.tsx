import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`h-9 w-9 cursor-pointer transition ${
        theme === "dark"
          ? "bg-white/20 hover:bg-white/30"
          : "bg-black/20 hover:bg-black/30"
      }`}
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90" />
      ) : (
        <Moon className="absolute h-4 w-4 rotate-90 transition-all dark:rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
