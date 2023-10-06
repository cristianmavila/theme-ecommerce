import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "class-variance-authority/dist/types";

/**
 * Merge CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Determines if a URL is relative.
 */
export function isRelativeUrl(url: string) {
  return !new RegExp("^(?:[a-z]+:)?//", "i").test(url);
}

/**
 * Returns absolute url based on input
 */
export function absoluteUrl(input: string) {
  return `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${input}`;
}

/**
 * Converts any string to camelized output
 */
export function camelizeString(str: string) {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, function (_, character) {
      return character.toUpperCase();
    })
    .replace(/[^a-zA-Z0-9]+/g, "");
}
