import { cn } from "@/lib/utils";
import { ElliotLogo } from "@/components/visuals/elliot-logo";

export function BrandMark({
  className,
  tone,
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  return <ElliotLogo className={cn(className)} tone={tone} />;
}
