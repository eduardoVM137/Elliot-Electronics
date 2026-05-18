"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const STORAGE_KEY = "elliot-theme-v3";

function getCurrentTheme(): Theme {
  if (typeof document === "undefined") return "dark";

  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;

  localStorage.setItem(STORAGE_KEY, theme);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    setThemeState(getCurrentTheme());
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  function handleToggle() {
    applyTheme(nextTheme);
    setThemeState(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label={`Cambiar a modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      title={`Cambiar a modo ${nextTheme === "dark" ? "oscuro" : "claro"}`}
      onClick={handleToggle}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-glow-sm transition-colors hover:border-primary/50 hover:text-primary",
        className,
      )}
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}