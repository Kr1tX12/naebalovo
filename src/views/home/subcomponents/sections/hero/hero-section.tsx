"use client";

import { HeroSectionBg } from "./subsubcomponents/bg/hero-section-bg";
import { Search } from "lucide-react";
import { PostsInfinityCards } from "./subsubcomponents/posts/posts-infinity-cards";
import { Container } from "@/shared/components/ui/container";
import { NAVBAR_HEIGHT } from "@/shared/constants/constants";
import Light from "@/shared/components/ui/light";

export const HeroSection = () => {
  return (
    <section
      className="flex flex-col gap-12 justify-evenly items-center relative h-screen"
     style={{paddingTop: NAVBAR_HEIGHT}}
    >
      <Container className="flex flex-col justify-center items-center transform-3d z-50 relative">
        <h6 className="text-xl font-medium bg-gradient-to-t from-foreground to-muted-foreground bg-clip-text text-transparent flex gap-1 items-center">
          Лучший сайт для поиска{" "}
          <Search size={16} className="text-muted-foreground" />
        </h6>
        <h1 className="text-[7rem] -translate-y-2 leading-none font-black font-title">
          ДОСТОВЕРНОЙ
        </h1>
        <h6 className="text-xl font-medium bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
          информации
        </h6>

        <div className="absolute flex items-center gap-16 -z-50">
          <Light size={200} className="bg-primary/50 blur-[128px]" />
          <Light size={250} className="bg-primary/70 blur-[128px]" />
          <Light size={350} className="bg-primary blur-[128px]" />
          <Light size={250} className="bg-primary/70 blur-[128px]" />
          <Light size={200} className="bg-primary/50 blur-[128px]" />
        </div>
      </Container>
      <PostsInfinityCards />
      <HeroSectionBg />
    </section>
  );
};
