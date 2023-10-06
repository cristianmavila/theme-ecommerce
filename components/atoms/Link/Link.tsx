// Import React.js dependencies
import React, { ReactNode, ReactElement } from "react";

// Import Next.js dependencies
import { default as NextLink } from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

// Import library dependencies
import { cn } from "@/lib/tailwind";
import { isRelativeUrl } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

// Link style variations
export const LinkVariants = cva(
  "inline-flex items-center border-b text-base leading-6 no-underline lg:border-b-2 lg:text-lg lg:leading-7",
  {
    variants: {
      variant: {
        default:
          "border-borderPrimary text-contentAction hover:text-borderPrimary",
        white:
          "group border-borderTertiary text-contentSecondary hover:border-contentAction",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

/**
 * Render a link component.
 */
export default function Link({
  children,
  href,
  className,
  variant,
  target,
  ...props
}: LinkProps) {
  if (!href) {
    return null;
  }
  // Use Next Link for internal links, and <a> for others.
  if (isRelativeUrl(href) && target !== "_blank") {
    const { onClick, ...attributes } = props;

    return (
      <NextLink
        href={href}
        className={cn(LinkVariants({ variant, className }))}
        {...attributes}
        onClick={onClick}
      >
        {children}
      </NextLink>
    );
  }

  return React.createElement(
    "a",
    {
      href: href,
      className: cn(LinkVariants({ variant, className })),
      target: target,
      ...props,
    },
    children
  );
}

export interface LinkProps
  extends NextLinkProps,
    VariantProps<typeof LinkVariants> {
  /** Child component(s) to render. */
  children: ReactElement | ReactNode;
  /** Anchor href. */
  href: string;
  /** Target */
  target?: string;
  /** Optional CSS property names and values */
  style?: React.CSSProperties;
  /** Optional classNames. */
  className?: string;
}
