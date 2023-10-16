// Navigation Menu types
import { LinkProps } from "@/components/atoms/Link/Link";
import { ReactElement, ReactNode } from "react";

// This interface will adapt the data to render a featured card
export interface FeaturedProps {
  /* id */
  id: number;
  /* title */
  title: string;
  className?: string;
  link?: LinkProps;
  /* Array of children links */
  children?: NavigationMenuProps[];
  /* Array of featured images */
  featured?: NavigationMenuProps[];
  /* That option will show a image next to the link */
  image?: FeaturedImageProps;
}

export interface FeaturedImageProps {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface NavigationMenuProps {
  /* id */
  id: number;
  /* title */
  title: string;
  /* URL */
  href: string;
  /* Array of children links */
  children?: NavigationMenuProps[];
  /* Array of featured images */
  featured?: FeaturedProps[];
  /* That option will show a image next to the link */
  image?: FeaturedImageProps;
  /* That option will show a icon next to the link */
  icon?: ReactNode | ReactElement;
  /* window target props  */
  target?: "_blank" | "_self";
  /* Background color for submenus  */
  backgroundColor?: string;
}
