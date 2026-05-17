import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Badge variant="muted">{eyebrow}</Badge>
      <h2 className="mt-5 text-balance font-display text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-pretty text-base leading-7 text-muted-foreground md:text-lg">
          {body}
        </p>
      )}
    </div>
  );
}
