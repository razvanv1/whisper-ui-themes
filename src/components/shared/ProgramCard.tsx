import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  bestFit: string;
  link: string;
}

const ProgramCard = ({ title, description, bestFit, link }: ProgramCardProps) => {
  return (
    <div className="group flex flex-col h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_hsl(var(--foreground)/0.12)] rounded-xl p-6 border border-transparent hover:border-border/50 hover:bg-card">
      <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-1">{description}</p>
      <p className="text-sm mb-6 text-muted-foreground/70">
        <span className="font-semibold">Best fit:</span> {bestFit}
      </p>
      <Link to={link} className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-400 transition-colors">
        Explore this program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ProgramCard;
