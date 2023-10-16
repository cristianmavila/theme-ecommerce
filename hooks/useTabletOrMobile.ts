"use client";

// MediaQuery dependencies
import { useMediaQuery } from "react-responsive";

// Hook return
export function useTabletOrMobile() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  return isTabletOrMobile;
}
