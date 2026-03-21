import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import octopusInk from "@/assets/octopus-ink.png";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/shared/SEO";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Home, Layers, Calendar } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." path="/404" />
      <section className="py-20 md:py-32 bg-secondary relative overflow-x-clip min-h-[80vh] flex items-center">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[hsl(210,60%,50%)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-destructive/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-6xl mx-auto px-6 relative w-full">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div>
              <ScrollReveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(210,60%,50%)]/20 bg-[hsl(210,60%,50%)]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[hsl(210,60%,50%)] mb-6">
                  404
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6 text-foreground">
                  This page is not here anymore
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg leading-relaxed md:text-xl mb-4 text-muted-foreground">
                  The link may be outdated, the page may have moved, or the route may no longer fit the current site.
                </p>
                <p className="text-muted-foreground mb-10">
                  If you were looking for a program, a resource, or a way to get in touch, the fastest move is to start from the main paths below.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link to="/"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-destructive px-8 py-3 font-semibold text-white hover:bg-destructive/90 transition-colors">
                    <Home className="h-4 w-4" /> Go to Home
                  </Link>
                  <Link to="/programs"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                    <Layers className="h-4 w-4" /> Explore programs
                  </Link>
                  <a href="https://meet.brevo.com/razvan-valceanu" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-3 font-semibold hover:bg-card transition-colors">
                    <Calendar className="h-4 w-4" /> Book a call
                  </a>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex flex-col items-center justify-center gap-2">
                <span className="text-8xl md:text-9xl font-black text-foreground/15 leading-none">404</span>
                <img
                  src={octopusInk}
                  alt="INK mascot - octopus"
                  className="w-full max-w-xs h-auto drop-shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
