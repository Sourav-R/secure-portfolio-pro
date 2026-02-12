import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-grid relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2 uppercase">
            {">"} sudo contact --init
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Whether you need a security assessment, architecture review, or just want
            to discuss the latest in cybersecurity — I'm always open to new conversations
            and challenges.
          </p>

          <a
            href="mailto:contact@securitypro.dev"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold tracking-wider uppercase rounded-sm hover:shadow-[var(--glow-primary)] transition-shadow mb-10"
          >
            <Mail className="h-4 w-4" />
            Send Message
          </a>

          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Terminal, label: "Blog", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 px-4 py-2 rounded-sm border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="h-4 w-4" />
                <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-border mt-12">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 // All systems secured.
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-2 md:mt-0">
            Built with precision & paranoia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
