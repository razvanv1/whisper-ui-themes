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
    const rotateX = ((y - rect.height / 2) / rect.height) * -4;
    const rotateY = ((x - rect.width / 2) / rect.width) * 4;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015) translateY(-3px)`,
      boxShadow: "0 16px 40px -12px rgba(0,0,0,0.1), 0 4px 12px -4px rgba(0,0,0,0.06)",
      backgroundImage: `radial-gradient(circle at ${x}px ${y}px, var(--glow-primary) 0%, transparent 50%)`,
      borderColor: "var(--destructive)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)",
      boxShadow: "0 0px 0px 0px transparent",
      backgroundImage: "none",
      borderColor: "",
    });
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-out ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default GlowCard;
