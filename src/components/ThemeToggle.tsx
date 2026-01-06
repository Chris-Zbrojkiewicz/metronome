import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
  isCollapsed?: boolean;
}

export function ThemeToggle({ isCollapsed }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex self-end">
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`flex items-center gap-3 ml-auto p-2 sm:p-7 ${isCollapsed ? "justify-center" : ""}`}
      >
        {theme === "light" ? (
          <LuMoon aria-label="Switch to dark mode" />
        ) : (
          <LuSun aria-label="Switch to light mode" />
        )}
      </div>
    </div>
  );
}