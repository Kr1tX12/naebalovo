// HeroSectionBgQuote.tsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  quote: string;
}

export const HeroSectionBgQuote: React.FC<Props> = ({ quote }) => {
  // рандомная позиция на экране при маунте
  const { top, left } = useMemo(
    () => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
    }),
    []
  );

  const isFocused = useMemo(() => Math.random() > 0.7, []);

  return (
    <motion.div
      className={cn("absolute text-3xl font-light flex items-start gap-1 text-nowrap -z-50", isFocused ? "text-muted-foreground/50" : 'text-muted-foreground/30')}
      style={{
        top,
        left,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, z: -800, scale: 0.5, filter: "blur(0px)" }}
      animate={{
        opacity: [0, 1, 0],
        z: [-800, 800],
        scale: [0.5, 1.2, 2],
        filter: ["blur(0px)", "blur(1px)", "blur(4px)"],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
      }}
    >
      <QuoteIcon size={16} />
      {quote}
      <QuoteIcon size={16} />
    </motion.div>
  );
};
