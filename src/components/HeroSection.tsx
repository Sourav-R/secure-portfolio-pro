import { motion } from "framer-motion";
import TerminalText from "./TerminalText";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-scanline pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-6 uppercase text-glow">
            // Cybersecurity Professional
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight">
            <span className="text-foreground">Defending</span>
            <br />
            <span className="text-primary text-glow">Digital Frontiers</span>
          </h1>

          <div className="h-8 mb-8">
            <TerminalText
              texts={[
                "Penetration Testing",
                "Threat Intelligence",
                "Incident Response",
                "Security Architecture",
                "Vulnerability Assessment",
              ]}
              className="text-lg md:text-xl text-accent text-glow-accent"
            />
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
            10+ years securing enterprise infrastructure, hunting threats, and building
            resilient security architectures for Fortune 500 companies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold tracking-wider uppercase rounded-sm hover:shadow-[var(--glow-primary)] transition-shadow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary text-primary font-mono text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
