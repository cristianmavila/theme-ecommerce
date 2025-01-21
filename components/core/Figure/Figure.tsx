// Import React.js dependencies
import { ReactNode } from "react";

// Import component dependencies
import RichText from "@/components/core/RichText";
import { cn } from "@/lib/utils";

// Component properties
export type FigureProps = {
  /** Class name */
  className?: string;
  /** Figure caption */
  caption?: string;
  /** Figure children */
  children: ReactNode;
};

/**
 * Figure component
 */
export const Figure: React.FC<FigureProps> = ({
  children,
  className,
  caption,
}) => {
  return (
    <figure className={cn("", className)}>
      {children}
      {caption && (
        <figcaption className="p-4">
          <RichText>{caption}</RichText>
        </figcaption>
      )}
    </figure>
  );
};
