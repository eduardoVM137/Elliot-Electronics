import { cn } from "@/lib/utils";

type ImagePanelProps = {
  image: string;
  title?: string;
  kicker?: string;
  className?: string;
  aspect?: "wide" | "square" | "tall";
};

const aspectClass = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

export function ImagePanel({
  image,
  title,
  kicker,
  className,
  aspect = "wide",
}: ImagePanelProps) {
  return (
    <div
      className={cn(
        "image-surface group relative overflow-hidden rounded-lg border border-white/10 bg-eliot-night shadow-panel",
        aspectClass[aspect],
        className,
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5,10,17,0.08), rgba(5,10,17,0.88)), url(${image})`,
        }}
      />
      <div className="absolute inset-0 technical-surface opacity-20" />
      {(title || kicker) && (
        <div className="absolute inset-x-0 bottom-0 p-5">
          {kicker && (
            <p className="text-xs font-medium uppercase text-eliot-cyan">{kicker}</p>
          )}
          {title && <p className="mt-1 text-base font-semibold text-white">{title}</p>}
        </div>
      )}
    </div>
  );
}
