import { cn } from "@/lib/utils";

type MetricTileProps = {
  value: string;
  label: string;
  className?: string;
};

export function MetricTile({ value, label, className }: MetricTileProps) {
  return (
    <div className={cn("premium-panel rounded-lg p-5", className)}>
      <div className="text-3xl font-semibold text-white">{value}</div>
      <p className="mt-2 text-sm leading-5 text-muted-foreground">{label}</p>
    </div>
  );
}
