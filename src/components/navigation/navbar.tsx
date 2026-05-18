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
  const isHome = pathname === "/";

  const solutionItems = solutionNav.map((item) => ({
    ...item,
    detail: solutions.find((solution) => solution.href === item.href),
  }));

  useEffect(() => {
    setSolutionsOpen(false);
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 overflow-hidden border-b backdrop-blur-2xl transition-colors",
        isHome
          ? "on-dark border-white/10 bg-eliot-ink/[0.18] text-white"
          : "border-border bg-background/[0.82] text-foreground",
      )}
    >
      {isHome ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <span className="block h-px w-1/3 animate-line-flow bg-gradient-to-r from-transparent via-eliot-cyan/80 to-transparent" />
        </div>
      ) : null}

      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Elliot Electronics inicio">
          <BrandMark tone={isHome ? "inverse" : "default"} />
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-7 text-sm lg:flex",
            isHome ? "text-white/[0.78]" : "text-muted-foreground",
          )}
        >
          {mainNav.map((item) =>
            item.label === "Soluciones" ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  onClick={() => setSolutionsOpen((value) => !value)}
                  className={cn(
                    "inline-flex items-center gap-1 transition-colors",
                    isHome ? "hover:text-white" : "hover:text-foreground",
                    pathname.startsWith("/soluciones") &&
                      (isHome ? "text-white" : "text-foreground"),
                  )}
                >
                  Soluciones <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {solutionsOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-6">
                    <div className="grid grid-cols-2 gap-2 rounded-lg border border-border bg-background/95 p-3 shadow-panel backdrop-blur-2xl">
                      {solutionItems.map(({ detail, href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setSolutionsOpen(false)}
                          className="group rounded-md border border-transparent p-4 transition-colors hover:border-primary/20 hover:bg-primary/5"
                        >
                          <div className="flex items-start gap-3">
                            {detail && (
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                                <detail.icon className="h-5 w-5" />
                              </div>
                            )}
                            <div>
                              <p className="font-semibold text-foreground">{label}</p>
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
                  "transition-colors",
                  isHome ? "hover:text-white" : "hover:text-foreground",
                  pathname === item.href &&
                    (isHome ? "text-white" : "text-foreground"),
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle
            className={cn(
              isHome && "border-white/20 bg-white/[0.12] text-white hover:text-white",
            )}
          />
          <Button
            asChild
            variant="secondary"
            size="sm"
            className={cn(isHome && "border-white/20 bg-white/[0.14] text-white")}
          >
            <Link href="/contacto">Hablemos de tu proyecto</Link>
          </Button>
        </div>

        <button
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden",
            isHome
              ? "border-white/20 bg-white/10 text-white"
              : "border-border bg-card",
          )}
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir navegacion"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 p-4 backdrop-blur-2xl lg:hidden">
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
