import { SectionColumn } from "@/types";
import { cn } from "@/lib/tailwind";
import { ReactNode } from "react";

export interface SectionColumnsProps {
  section: SectionColumn;
  children?: ReactNode;
  className?: string;
}

// @TODO: Container class needs to be applied based on backend config
export function SectionColumns({
  section,
  children,
  className,
}: SectionColumnsProps) {

  return (
    <section
      className={cn(
        "grid items-start gap-8",
        {
          "md:grid-cols-2": section?.layout === "layout_twocol_section",
          "md:grid-cols-[1fr_1fr_1fr]":
            section?.layout === "layout_threecol_section",
        },
        section.backgroundColor && `bg-${section.backgroundColor}`,
        className
      )}
    >
      {children}
    </section>
  );
}
