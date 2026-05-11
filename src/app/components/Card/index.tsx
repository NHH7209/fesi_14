// src/components/Card/index.tsx

import { cva } from "class-variance-authority";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const cardVariants = cva("overflow-hidden transition-all max-w-md", {
  variants: {
    variant: {
      basic: "bg-white border border-gray-200",
      fancy:
        "bg-white border border-gray-500 hover:border-gray-400 transition-colors",
      plain: "bg-white shadow-lg hover:shadow-xl transition-shadow",
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-5",
      lg: "p-8",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    defaultVariants: {
      variant: "basic",
      padding: "md",
      radius: "md",
    },
  },
});

type CardProps = {
  children: React.ReactNode;
  variant?: "basic" | "fancy" | "plain";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
};

const Card = ({
  children,
  variant = "basic",
  padding = "md",
  radius = "md",
  className,
}: CardProps) => {
  const cardClasses = twMerge(
    clsx(cardVariants({ variant, padding, radius, className })),
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
