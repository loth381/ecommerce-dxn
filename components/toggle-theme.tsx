"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {/* Icono del sol para el modo claro */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
          isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      {/* Icono de la luna para el modo oscuro */}
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform duration-300 ${
          isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ToggleTheme;
