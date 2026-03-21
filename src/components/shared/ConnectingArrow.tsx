import { m } from "framer-motion";

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
          path: "M 60 10 C 120 20, 120 70, 60 70 C 20 70, 20 40, 60 40 C 100 40, 100 100, 60 125",
          head: "M 40 110 L 60 138 L 80 110",
          viewBox: "0 0 120 145"
        };
      case 2:
        // Wide sweeping curve
        return {
          path: "M 10 10 C 150 30, -50 90, 110 125",
          head: "M 90 110 L 110 138 L 125 108",
          viewBox: "0 0 130 145"
        };
      case 3:
        // Reversed double loop
        return {
          path: "M 60 10 C 10 20, 10 70, 60 70 C 100 70, 100 40, 60 40 C 20 40, 20 100, 60 125",
          head: "M 40 110 L 60 138 L 80 110",
          viewBox: "0 0 120 145"
        };
      case 4:
        // Spring-like coil
        return {
          path: "M 60 10 Q 120 30, 60 50 Q 0 70, 60 90 Q 120 110, 60 125",
          head: "M 40 110 L 60 138 L 80 110",
          viewBox: "0 0 120 145"
        };
      default:
        return {
          path: "M 60 10 C 120 20, 120 70, 60 70 C 20 70, 20 40, 60 40 C 100 40, 100 100, 60 125",
          head: "M 40 110 L 60 138 L 80 110",
          viewBox: "0 0 120 145"
        };
    }
  };

  const { path, head, viewBox } = getPath();

  return (
    <div
      className={`absolute bottom-4 w-24 h-28 z-[9999] text-[hsl(210,60%,50%)] pointer-events-none -translate-x-1/2 ${className}`}
    >
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
        <m.path 
          d={path} 
          stroke="currentColor" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeDasharray="none"
          fill="none"
          initial={{ pathLength: 0, opacity: 1 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
        <m.path
          d={head}
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
        />
      </svg>
    </div>
  );
};
