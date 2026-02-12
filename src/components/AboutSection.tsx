import { motion } from "framer-motion";
import { Shield, Award, Target } from "lucide-react";

const stats = [
  { value: "150+", label: "Security Audits" },
  { value: "500+", label: "Vulnerabilities Found" },
  { value: "99.9%", label: "Uptime Maintained" },
  { value: "50+", label: "Clients Protected" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-grid relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2 uppercase">
            {">"} whoami
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            About <span className="text-primary text-glow">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-secondary-foreground leading-relaxed mb-6">
              I'm a senior cybersecurity professional specializing in offensive security,
              threat hunting, and security architecture design. With over a decade of experience,
              I've protected critical infrastructure across finance, healthcare, and technology sectors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My approach combines deep technical expertise with strategic thinking — I don't
              just find vulnerabilities, I build comprehensive security programs that scale
              with your organization. Certified in OSCP, CISSP, and CEH, I bring
              both red team and blue team perspectives to every engagement.
            </p>

            <div className="flex gap-6">
              {[
                { icon: Shield, label: "Defense" },
                { icon: Target, label: "Offense" },
                { icon: Award, label: "Compliance" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-wider">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-6 rounded-sm border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <p className="text-3xl font-bold text-primary text-glow font-display">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
