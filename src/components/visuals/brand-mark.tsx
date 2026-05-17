import { cn } from "@/lib/utils";
import { ElliotLogo } from "@/components/visuals/elliot-logo";

export function BrandMark({ className }: { className?: string }) {
  return <ElliotLogo className={cn(className)} />;
}
