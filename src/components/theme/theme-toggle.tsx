"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "light";

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function setTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  localStorage.setItem("elliot-theme-v3", theme);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      title={`Modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      onClick={() => {
        setTheme(nextTheme);
        setThemeState(nextTheme);
      }}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-glow-sm transition-colors hover:border-primary/50 hover:text-primary",
        className,
      )}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
