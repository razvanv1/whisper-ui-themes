import { ReactNode } from "react";
import { m } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollProgress from "../shared/ScrollProgress";
import { Footer } from "../Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Navbar />
      <m.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="flex-1 pt-16 md:pt-20"
      >
        {children}
      </m.main>
      <Footer />
    </div>
  );
};

export default PageLayout;
