"use client";

// React dependencies
import { useEffect, useState } from "react";

// Hook return
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset; /// it will be used in the future
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setScrollDirection(scrollY > 88 ? true : false);
    };
    updateScrollDirection();
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
