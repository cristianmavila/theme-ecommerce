// React dependencies
import { ReactElement, ReactNode } from "react";

// Import lib dependencies
import { cn } from "@/lib/tailwind";
import { VariantProps, cva } from "class-variance-authority";

// Heading style variations
export const HeadingVariants = cva("font-normal tracking-tight font-serif", {
  variants: {
    variant: {
      h1: "text-6xl lg:text-7xl leading-snug",
      h2: "text-5xl lg:text-6xl leading-snug",
      h3: "text-4xl lg:text-5xl leading-snug",
      h4: "text-3xl lg:text-4xl leading-snug",
      h5: "text-2xl lg:text-2xl leading-snug",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

// Types
export interface HeadingProps extends VariantProps<typeof HeadingVariants> {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  styles?: React.CSSProperties;
  className?: string;
}

// Heading
export function Heading({ children, styles, className, variant }: HeadingProps) {
  const CustomTag = `${variant}` as keyof JSX.IntrinsicElements;
  return (
    <CustomTag className={cn(HeadingVariants({ variant, className }))} style={styles}>
      {children}
    </CustomTag>
  );
}
