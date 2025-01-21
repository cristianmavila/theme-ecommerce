import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimateSectionProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const AnimateSection = ({ children, width }: AnimateSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Fire the animation
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
      <motion.div>{children}</motion.div>
    </div>
  );
};

export default AnimateSection;
