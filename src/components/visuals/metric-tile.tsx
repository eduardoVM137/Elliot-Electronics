import { cn } from "@/lib/utils";

type MetricTileProps = {
  value: string;
  label: string;
  className?: string;
};

export function MetricTile({ value, label, className }: MetricTileProps) {
  return (
    <div className={cn("premium-panel rounded-lg p-5", className)}>
      <div className="text-xl font-semibold leading-tight text-white md:text-2xl">{value}</div>
      <p className="mt-2 text-sm leading-5 text-muted-foreground">{label}</p>
    </div>
  );
}
