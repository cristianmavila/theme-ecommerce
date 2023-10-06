// Import React dependencies
import * as React from "react";

// Import Component dependencies
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

// Import lib dependencies
import { cn } from "@/lib/utils";

// Button style variations
const buttonVariants = cva(
  "font-sans inline-flex items-center justify-center tracking-wider transition-colors uppercase font-bold disabled:bg-backgroundDisabled disabled:text-contentDisabled disabled:hover:no-underline hover:underline",
  {
    variants: {
      variant: {
        default: "bg-backgroundPrimaryReversed text-contentActive ",
        secondary: "bg-backgroundBrandPrimaryReversed text-contentPrimary",
        none: "",
      },
      size: {
        default: "h-10 py-2 px-8 text-sm",
        small: "px-2 py-0.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button Prop type
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
