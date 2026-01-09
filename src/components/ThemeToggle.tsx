"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import IconButton from "./IconButton";

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex gap-2 ml-6 items-center">
      <IconButton
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      >
        {currentTheme === "dark" ? <Sun className="h-5 w-5"/> : <Moon className="h-5 w-5" />}
      </IconButton>
    </div>
  );
};

export default ThemeToggle;
