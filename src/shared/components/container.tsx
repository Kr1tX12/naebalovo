import { forwardRef, HTMLProps } from "react";
import { cn } from "../lib/utils";

export const Container = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
    return <div {...props} className={cn("max-w-[90rem] w-full px-4 mx-auto", className)} />;
  }
);

Container.displayName = "Container";
