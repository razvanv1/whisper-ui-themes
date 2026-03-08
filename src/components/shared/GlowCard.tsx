import { ReactNode, useRef, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-4px)`,
      boxShadow: "0 12px 32px -8px hsl(var(--foreground) / 0.12)",
      backgroundImage: `radial-gradient(circle at ${x}px ${y}px, rgba(220, 38, 38, 0.08) 0%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)",
      boxShadow: "0 0px 0px 0px transparent",
      backgroundImage: "none",
    });
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default GlowCard;
