import { m } from "framer-motion";
import { ReactNode, Children } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
}: ScrollRevealProps) => {
  const offset = directionOffsets[direction];

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </m.div>
  );
};

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const StaggerReveal = ({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.5,
}: StaggerRevealProps) => {
  const offset = directionOffsets[direction];

  const itemVariants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollReveal;
