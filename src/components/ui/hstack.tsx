import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

export type HStackProps = PropsWithChildren<{
  size?: "default" | "sm" | "md" | "lg";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  className?: string;
}>;

const hstackVariants = cva("flex flex-row", {
  variants: {
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    size: {
      default: "space-x-0",
      sm: "space-x-2",
      md: "space-x-4",
      lg: "space-x-6",
    },
  },
  defaultVariants: {
    justify: "start",
    size: "default",
  },
});

export const HStack: React.FC<HStackProps> = ({
  size,
  justify,
  className,
  children,
}) => (
  <div className={cn(hstackVariants({ size, justify, className }))}>
    {children}
  </div>
);
