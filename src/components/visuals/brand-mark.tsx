import { Hexagon } from "lucide-react";

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/[0.06] shadow-glow-sm">
        <Hexagon className="h-5 w-5 text-eliot-cyan" />
      </div>
      <div className="leading-none">
        <div className="text-sm font-bold tracking-wide text-white">ELIOT</div>
        <div className="text-[10px] font-medium uppercase text-muted-foreground">
          Electronics
        </div>
      </div>
    </div>
  );
}
