// React dependencies
import { ReactElement, ReactNode } from "react";

// Import lib dependencies
import { cn } from "@/lib/tailwind";
import { VariantProps, cva } from "class-variance-authority";
import { options } from "../../RichText/RichText";
// Import functions
import parse from "html-react-parser";

// Heading style variations
export const textVariants = cva("font-sans font-normal tracking-tight", {
  variants: {
    variant: {
      default: "",
      secondary: "text-contentSecondary",
      success: "text-contentPositive",
      warning: "text-contentWarning",
      danger: "text-contentNegative",
      mark: "bg-[--backgroundHighlight] py-2",
    },
    decoration: {
      default: "",
      underline: "underline",
      italic: "italic",
      lineThrough: "line-through",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    decoration: "default",
  },
});

// Types
interface TextProps extends VariantProps<typeof textVariants> {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  styles?: React.CSSProperties;
  className?: string;
  /** The type of element to render. */
  tag?: keyof JSX.IntrinsicElements | false;
}

export default function Text({
  children,
  styles,
  className,
  variant,
  tag = "p",
  decoration,
}: TextProps) {
  const Tag = tag;
  const html = parse(String(children), options);
  return (
    <>
      {Tag ? (
        <Tag
          className={cn(textVariants({ variant, decoration }), className)}
          style={styles}
        >
          {html}
        </Tag>
      ) : (
        html
      )}
    </>
  );
}
