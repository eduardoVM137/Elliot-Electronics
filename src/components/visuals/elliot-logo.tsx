import { cn } from "@/lib/utils";

type ElliotLogoProps = {
  className?: string;
  markClassName?: string;
  tone?: "default" | "inverse";
  showText?: boolean;
};

export function ElliotLogo({
  className,
  markClassName,
  tone = "default",
  showText = true,
}: ElliotLogoProps) {
  const inverse = tone === "inverse";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/brand/elliot-mark.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className={cn("h-11 w-[68px] shrink-0 object-contain", markClassName)}
      />

      {showText && (
        <div className="leading-none">
          <div
            className={cn(
              "text-sm font-black tracking-wide",
              inverse ? "text-white" : "text-[#05145a] dark:text-foreground",
            )}
          >
            ELLIOT
          </div>
          <div
            className={cn(
              "text-[10px] font-semibold uppercase",
              inverse ? "text-white/[0.72]" : "text-muted-foreground",
            )}
          >
            Electronics
          </div>
        </div>
      )}
    </div>
  );
}
