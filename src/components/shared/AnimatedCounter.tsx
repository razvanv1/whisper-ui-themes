import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);

  // Check if value is purely numeric
  const numericMatch = value.match(/^(\d+)(\+?)$/);

  useEffect(() => {
    if (!isInView || !numericMatch) return;

    const target = parseInt(numericMatch[1], 10);
    const suffix = numericMatch[2] || "";
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(target / steps);
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplay(`${current}${suffix}`);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  // For non-numeric values, just show with a fade
  if (!numericMatch) {
    return (
      <span
        ref={ref}
        className={`inline-block transition-all duration-700 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"} ${className}`}
      >
        {value}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={`inline-block tabular-nums transition-all duration-500 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"} ${className}`}
    >
      {isInView ? display : "0"}
    </span>
  );
};

export default AnimatedCounter;
