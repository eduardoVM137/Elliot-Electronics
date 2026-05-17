"use client";

import { motion } from "framer-motion";

export function TechnicalLine() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-white/10">
      <motion.div
        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-eliot-cyan to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "260%" }}
        transition={{ duration: 4.6, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
