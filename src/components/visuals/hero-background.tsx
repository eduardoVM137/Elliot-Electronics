"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  const nx = useMotionValue(0.5);
  const ny = useMotionValue(0.5);
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const snx = useSpring(nx, { stiffness: 45, damping: 18 });
  const sny = useSpring(ny, { stiffness: 45, damping: 18 });
  const spx = useSpring(px, { stiffness: 110, damping: 22 });
  const spy = useSpring(py, { stiffness: 110, damping: 22 });

  const haloX = useTransform(snx, [0, 1], [-70, 70]);
  const haloY = useTransform(sny, [0, 1], [-35, 35]);
  const dotX  = useTransform(snx, [0, 1], [18, -18]);
  const dotY  = useTransform(sny, [0, 1], [10, -10]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      nx.set(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
      ny.set(Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)));
      px.set(e.clientX - rect.left);
      py.set(e.clientY - rect.top);
    };

    const onLeave = () => { nx.set(0.5); ny.set(0.5); };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [nx, ny, px, py]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 via-sky-50/20 to-white dark:from-eliot-night/90 dark:via-eliot-night/50 dark:to-transparent" />

      <motion.div
        style={{ left: spx, top: spy, translateX: "-50%", translateY: "-50%" }}
        className="absolute h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(33,167,255,0.11),transparent_60%)] dark:bg-[radial-gradient(circle,rgba(33,167,255,0.07),transparent_60%)]"
      />

      <motion.div
        style={{ x: haloX, y: haloY }}
        className="absolute inset-x-0 top-0 flex justify-center overflow-hidden"
      >
        <div className="h-[620px] w-[1000px] bg-[radial-gradient(ellipse_65%_60%_at_50%_0%,rgba(33,167,255,0.14),transparent)] dark:bg-[radial-gradient(ellipse_65%_60%_at_50%_0%,rgba(33,167,255,0.10),transparent)]" />
      </motion.div>

      <motion.div
        style={{ x: dotX, y: dotY }}
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(33,167,255,0.08)_1px,transparent_1px)] [background-size:26px_26px] opacity-40 dark:opacity-20"
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-eliot-cyan/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent dark:via-eliot-line" />
    </div>
  );
}
