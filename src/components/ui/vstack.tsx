import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

export type VStackProps = PropsWithChildren<{
  size?: "default" | "sm" | "md" | "lg";
  className?: string;
}>;

const vstackVariants = cva("flex flex-col", {
  variants: {
    size: {
      default: "space-y-0",
      sm: "space-y-2",
      md: "space-y-4",
      lg: "space-y-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const VStack: React.FC<VStackProps> = ({
  size,
  className,
  children,
}) => <div className={cn(vstackVariants({ size, className }))}>{children}</div>;
