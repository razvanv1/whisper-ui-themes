import { motion } from "framer-motion";

interface ConnectingArrowProps {
  className?: string;
  variant?: 1 | 2 | 3 | 4;
}

export const ConnectingArrow = ({ className = "", variant = 1 }: ConnectingArrowProps) => {
  const getPath = () => {
    switch (variant) {
      case 1:
        // Double loop down
        return {
          path: "M 60 10 C 120 20, 120 70, 60 70 C 20 70, 20 40, 60 40 C 100 40, 100 100, 60 130",
          head: "M 45 115 L 60 130 L 75 115",
          viewBox: "0 0 120 140"
        };
      case 2:
        // Wide sweeping curve
        return {
          path: "M 10 10 C 150 30, -50 90, 110 130",
          head: "M 95 115 L 110 130 L 120 115",
          viewBox: "0 0 120 140"
        };
      case 3:
        // Reversed double loop
        return {
          path: "M 60 10 C 10 20, 10 70, 60 70 C 100 70, 100 40, 60 40 C 20 40, 20 100, 60 130",
          head: "M 45 115 L 60 130 L 75 115",
          viewBox: "0 0 120 140"
        };
      case 4:
        // Spring-like coil
        return {
          path: "M 60 10 Q 120 30, 60 50 Q 0 70, 60 90 Q 120 110, 60 130",
          head: "M 45 115 L 60 130 L 75 115",
          viewBox: "0 0 120 140"
        };
      default:
        return {
          path: "M 60 10 C 120 20, 120 70, 60 70 C 20 70, 20 40, 60 40 C 100 40, 100 100, 60 130",
          head: "M 45 115 L 60 130 L 75 115",
          viewBox: "0 0 120 140"
        };
    }
  };

  const { path, head, viewBox } = getPath();

  return (
    <div className={`absolute -bottom-16 w-24 h-28 z-20 text-red-500/40 pointer-events-none -translate-x-1/2 ${className}`}>
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        <motion.path 
          d={path} 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeDasharray="6 6"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d={head}
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 1.5, duration: 0.3 }}
        />
      </svg>
    </div>
  );
};
