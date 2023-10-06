// React dependencies
import * as React from "react";

// Library dependencies
import { cn } from "@/lib/utils";

// Import Component dependencies
import { VariantProps, cva } from "class-variance-authority";

// Input style variations
const InputVariants = cva(
  "flex h-10 w-full bg-transparent py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input border border-black px-2",
        outline: "border-input border-black border-b-2",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

// types
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(InputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, InputVariants };
