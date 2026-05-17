import { cn } from "@/lib/utils";

type ElliotLogoProps = {
  className?: string;
  markClassName?: string;
  showText?: boolean;
};

export function ElliotLogo({
  className,
  markClassName,
  showText = true,
}: ElliotLogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/brand/elliot-icon.png"
        alt=""
        aria-hidden="true"
        className={cn("h-10 w-14 shrink-0 object-contain", markClassName)}
      />

      {showText && (
        <div className="leading-none">
          <div className="text-sm font-black tracking-wide text-[#05145a] dark:text-foreground">
            ELLIOT
          </div>
          <div className="text-[10px] font-semibold uppercase text-muted-foreground">
            Electronics
          </div>
        </div>
      )}
    </div>
  );
}
