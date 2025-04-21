"use client";

import { NAVBAR_HEIGHT } from "@/shared/constants/constants";
import { motion } from "motion/react";
import { HeroSectionBg } from "./subsubcomponents/hero-section-bg";

export const HeroSection = () => {
  return (
    <section
      className="flex flex-col items-center perspective-dramatic justify-center relative overflow-hidden"
      style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
    >
      <motion.div
        className="flex flex-col items-center transform-3d rotate-x-1 z-50"
        animate={{ rotateX: [1, -1, 0, 1, -1], rotateY: [-1, 1] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <h6 className="text-xl font-medium bg-gradient-to-t from-foreground to-muted-foreground bg-clip-text text-transparent">
          Лучший сайт для поиска
        </h6>
        <h1 className="text-9xl font-black text-primary text-shadow-lg text-shadow-primary/10">
          ДОСТОВЕРНОЙ
        </h1>
        <h6 className="text-xl font-medium bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
          информации
        </h6>
      </motion.div>
      <HeroSectionBg />
    </section>
  );
};
