// Import lib dependencies
import { cn } from "@/lib/utils";
import { ChevronDown, ArrowRight } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";

// Library dependencies
import Link from "@/components/core/Link";
import { LinkProps } from "@/components/core/Link/Link";
import Media, { MediaProps } from "@/components/core/Media";
import { useTabletOrMobile } from "@/hooks/useTabletOrMobile";
import RichText from "@/components/core/RichText";
import { useState, useEffect } from "react";

// Card Variations
const heroVariants = cva("relative z-10 flex text-contentPrimaryReversed", {
  variants: {
    variant: {
      image: "",
    },
    textPosition: {
      default: "",
      centerMiddle: "items-center justify-center",
      leftMiddle: "items-center justify-start",
      rightMiddle: "items-center justify-end",
      leftTop: "justify-start",
      centerTop: "justify-center",
      rightTop: "justify-end",
      centerBottom: "items-end justify-center",
      rightBottom: "items-end justify-end",
      leftBottom: "items-end",
    },
  },
  defaultVariants: {
    variant: "image",
    textPosition: "leftTop",
  },
});

// Types
export interface HeroProps extends VariantProps<typeof heroVariants> {
  content?: string;
  /* Container className */
  className?: string;
  /* Color of the text */
  textClassName?: string;
  /* Background images */
  desktopImages?: MediaProps[];
  /* Background mobile */
  mobileImage?: MediaProps;
}

// types for the CTA button
interface HeroLinkProps extends LinkProps {
  /* arrow icon */
  arrow?: boolean;
}

// CTA component
const HeroLink = ({ href, children, arrow, className }: HeroLinkProps) => {
  return (
    <Link href={href} className={cn("font-sans text-sm", className)}>
      {children}
      {arrow && (
        <div className="ml-3">
          <ArrowRight />
        </div>
      )}
    </Link>
  );
};

const HeroImage = ({ media }: MediaProps) => {
  return (
    <div className="absolute left-0 top-0 z-10 h-full">
      <Media media={media} />
    </div>
  );
};

// Component output
const Hero = ({
  content,
  variant,
  className,
  textClassName = "text-contentPrimaryReversed",
  textPosition,
  desktopImages,
  mobileImage,
}: HeroProps) => {
  const [mounted, setMounted] = useState(false);
  const isTabletOrMobile = useTabletOrMobile();

  // Doing this to avoid hydration warnings.
  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  return (
    <div
      className={cn(
        "relative flex w-full bg-slate-100",
        heroVariants({ variant }),
        className
      )}
    >
      {/* Title and Text */}
      <div
        className={cn(
          heroVariants({ textPosition }),
          "absolute bottom-0 left-0 right-0 top-0"
        )}
      >
        <div className="mx-8 my-14 text-center md:mx-20 md:my-28 lg:mx-28">
          <RichText className="flex flex-col lg:gap-2" tag="div">
            {content}
          </RichText>
        </div>
        <div className="absolute bottom-3 left-0 flex w-full justify-center">
          <ChevronDown size={42} className={cn(textClassName)} />
        </div>
      </div>
      {/* Mobile and desktop images */}
      {isTabletOrMobile
        ? mobileImage && (
            <div className="relative block h-screen flex-1">
              <Media media={mobileImage.media} />
            </div>
          )
        : desktopImages &&
          desktopImages.map((item, index) => {
            const { media } = item;
            let imageClasses = "";
            if (index === 0) imageClasses = "md:block";
            return (
              <div
                key={item.id}
                className={cn(
                  "relative block flex-1 overflow-hidden",
                  imageClasses ? imageClasses : "md:hidden lg:block"
                )}
              >
                <Media
                  {...{ media: { ...media, fill: false } }}
                  className="w-full"
                />
              </div>
            );
          })}
    </div>
  );
};

/// Making all components composable
Hero.HeroLink = HeroLink;

export { HeroLink, HeroImage };
export type { HeroLinkProps };
export default Hero;
