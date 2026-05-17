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
      <svg
        viewBox="0 0 122 82"
        aria-hidden="true"
        className={cn("h-10 w-14 shrink-0", markClassName)}
      >
        <defs>
          <linearGradient id="elliot-frame" x1="15" x2="112" y1="78" y2="7">
            <stop offset="0" stopColor="#2113a8" />
            <stop offset="0.5" stopColor="#36aee3" />
            <stop offset="1" stopColor="#2016a2" />
          </linearGradient>
          <linearGradient id="elliot-fill" x1="34" x2="88" y1="68" y2="18">
            <stop offset="0" stopColor="#23368f" />
            <stop offset="0.52" stopColor="#38afe6" />
            <stop offset="1" stopColor="#262392" />
          </linearGradient>
        </defs>
        <path
          d="M30.5 6.5h69.7c12.2 0 19.4 9.9 15.4 21.4L102.3 66C99.8 73.1 92.9 78 85.4 78H17.1C4.8 78-2.3 68.1 1.7 56.6L15 18.5C17.5 11.4 23.1 6.5 30.5 6.5Z"
          fill="none"
          stroke="url(#elliot-frame)"
          strokeWidth="7"
          strokeLinejoin="round"
        />
        <path
          d="M37.4 23h28.7c4.7 0 7.4 3.8 5.9 8.2-1.1 3.1-4.2 5.4-7.5 5.4H48.8l-3.4 9.8h15.1c3.1 0 4.9 2.6 3.9 5.6-.8 2.2-3 3.8-5.3 3.8H42.2l-3 8.7h24.1c3.1 0 5 2.6 3.9 5.6-.8 2.2-3 3.8-5.3 3.8H28.8c-5 0-8-4.1-6.3-8.8l12.1-34.7c1.5-4.3 5.6-7.4 9.9-7.4h-7.1Z"
          fill="url(#elliot-fill)"
        />
        <path
          d="M75 23h27.7c4.7 0 7.4 3.8 5.9 8.2-1.1 3.1-4.2 5.4-7.5 5.4H86.4L83 46.4h14.1c3.1 0 5 2.6 3.9 5.6-.8 2.2-3 3.8-5.3 3.8H79.8l-3 8.7h23.1c3.1 0 5 2.6 3.9 5.6-.8 2.2-3 3.8-5.3 3.8H66.4c-5 0-8-4.1-6.3-8.8l12.1-34.7c1.5-4.3 5.6-7.4 9.9-7.4H75Z"
          fill="url(#elliot-fill)"
        />
      </svg>

      {showText && (
        <div className="leading-none">
          <div className="text-sm font-black tracking-wide text-foreground">
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
