"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/visuals/brand-mark";
import { mainNav, solutionNav } from "@/data/navigation";
import { solutions } from "@/data/solutions";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const solutionItems = solutionNav.map((item) => ({
    ...item,
    detail: solutions.find((solution) => solution.href === item.href),
  }));

  useEffect(() => {
    setSolutionsOpen(false);
    setOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] overflow-visible border-b backdrop-blur-2xl transition-colors",
        "border-border bg-background/90 text-foreground",
        "dark:on-dark dark:border-white/10 dark:bg-eliot-ink/[0.72] dark:text-white",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <span className="block h-px w-1/3 animate-line-flow bg-gradient-to-r from-transparent via-eliot-cyan/80 to-transparent" />
      </div>

      <div className="container relative flex h-20 items-center justify-between">
        <Link href="/" aria-label="Eliot Electronics inicio">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex dark:text-white/[0.78]">
          {mainNav.map((item) =>
            item.label === "Soluciones" ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  onClick={() => setSolutionsOpen((value) => !value)}
                  aria-expanded={solutionsOpen}
                  className={cn(
                    "inline-flex items-center gap-1 transition-colors hover:text-foreground dark:hover:text-white",
                    pathname.startsWith("/soluciones") &&
                      "text-foreground dark:text-white",
                  )}
                >
                  Soluciones <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {solutionsOpen && (
                  <div className="absolute left-1/2 top-full z-[120] w-[720px] -translate-x-1/2 pt-6">
                    <div className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-background/95 p-3 text-foreground shadow-2xl backdrop-blur-2xl">
                      {solutionItems.map(({ detail, href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setSolutionsOpen(false)}
                          className="group rounded-xl border border-transparent p-4 transition-colors hover:border-primary/20 hover:bg-primary/5"
                        >
                          <div className="flex items-start gap-3">
                            {detail && (
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <detail.icon className="h-5 w-5" />
                              </div>
                            )}

                            <div>
                              <p className="font-semibold text-foreground">
                                {label}
                              </p>
                              <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground">
                                {detail?.summary}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground dark:hover:text-white",
                  pathname === item.href && "text-foreground dark:text-white",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className="dark:border-white/20 dark:bg-white/[0.12] dark:text-white dark:hover:text-white" />

          <Button
            asChild
            variant="secondary"
            size="sm"
            className="dark:border-white/20 dark:bg-white/[0.14] dark:text-white"
          >
            <Link href="/contacto">Hablemos de tu proyecto</Link>
          </Button>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground lg:hidden dark:border-white/20 dark:bg-white/10 dark:text-white"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir navegación"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 p-4 text-foreground backdrop-blur-2xl lg:hidden">
          <div className="mb-3">
            <ThemeToggle />
          </div>

          <div className="grid gap-2">
            {mainNav.map((item) =>
              item.label === "Soluciones" ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileSolutionsOpen((value) => !value)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm text-muted-foreground hover:bg-card hover:text-foreground"
                  >
                    Soluciones <ChevronDown className="h-4 w-4" />
                  </button>

                  {mobileSolutionsOpen && (
                    <div className="ml-3 mt-1 grid gap-1 border-l border-border pl-3">
                      {solutionItems.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm text-muted-foreground hover:bg-card hover:text-foreground"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}