import { Container } from "@/shared/components/container";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-muted/50 shadow-xl rounded-lg">
      <Container className="flex justify-between items-center h-full">
        <div className="text-4xl font-black font-title flex bg-gradient-to-t from-foreground to-foreground/70 bg-clip-text text-transparent">
          <h1 className="">
            НАЕБАЛОВО
          </h1>
          <div className="animate-float-up-down scale-90 bg-gradient-to-t from-inherit to-inherit bg-clip-text">)</div>
          <div className="animate-float-up-down scale-95 delay-[0.3s] bg-gradient-to-t from-inherit to-inherit bg-clip-text">)</div>
          <div className="animate-float-up-down delay-[0.6s] bg-gradient-to-t from-inherit to-inherit bg-clip-text">)</div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
