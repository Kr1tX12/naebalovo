import { forwardRef, HTMLProps } from "react";
import { cn } from "../../lib/utils";

export const Container = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={cn("max-w-6xl w-full px-4 mx-auto", className)}
      />
    );
  }
);

Container.displayName = "Container";
