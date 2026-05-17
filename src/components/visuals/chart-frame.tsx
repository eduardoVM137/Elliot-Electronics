"use client";

import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ChartFrameProps = PropsWithChildren<{
  className?: string;
}>;

export function ChartFrame({ children, className }: ChartFrameProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn(className)}>
      {mounted ? (
        children
      ) : (
        <div className="h-full min-h-40 w-full rounded-md border border-white/10 bg-white/[0.03] technical-surface opacity-70" />
      )}
    </div>
  );
}
