import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

interface PartnerItem {
  name: string;
  subtitle?: string;
  url?: string;
}

interface AuthorityBandProps {
  title: string;
  copy: string;
  items: PartnerItem[];
  note: string;
}

const AuthorityBand = ({ title, copy, items, note }: AuthorityBandProps) => {
  return (
    <section className="py-12 md:py-16 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-10 max-w-3xl">{copy}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.url || "#"}
                target={item.url ? "_blank" : undefined}
                rel={item.url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="group relative flex items-center gap-4 rounded-xl bg-card border border-border/50 border-l-4 border-l-red-600 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-border"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold leading-tight mb-1">{item.name}</p>
                  {item.subtitle && (
                    <p className="text-xs text-muted-foreground leading-tight">{item.subtitle}</p>
                  )}
                </div>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-colors group-hover:text-red-500" />
              </motion.a>
            ))}
          </div>
          <p className="text-sm mt-6 text-muted-foreground italic text-center">{note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AuthorityBand;
