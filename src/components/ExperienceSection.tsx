import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Security Architect",
    company: "CyberDefense Corp",
    period: "2021 – Present",
    description:
      "Leading security architecture design for enterprise clients. Built zero-trust framework adopted across 12 Fortune 500 organizations. Managing a team of 8 security engineers.",
    tags: ["Zero Trust", "Architecture", "Leadership"],
  },
  {
    title: "Lead Penetration Tester",
    company: "RedOps Security",
    period: "2018 – 2021",
    description:
      "Conducted 100+ penetration tests across web, mobile, and infrastructure. Discovered critical vulnerabilities in financial systems, preventing potential losses of $50M+.",
    tags: ["Pentesting", "Red Team", "Web Security"],
  },
  {
    title: "SOC Analyst (Tier 3)",
    company: "SecureWatch Inc",
    period: "2015 – 2018",
    description:
      "Monitored and responded to security incidents for 200+ clients. Developed automated threat detection playbooks reducing MTTR by 60%.",
    tags: ["SIEM", "Incident Response", "Automation"],
  },
  {
    title: "Security Consultant",
    company: "InfoSec Partners",
    period: "2013 – 2015",
    description:
      "Performed security assessments and compliance audits. Helped clients achieve ISO 27001 and SOC 2 certifications.",
    tags: ["Compliance", "Auditing", "Risk"],
  },
];

const certifications = ["OSCP", "CISSP", "CEH", "GPEN", "AWS Security Specialty", "GCIH"];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-grid relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2 uppercase">
            {">"} history --all
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Experience & <span className="text-primary text-glow">Certs</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <div className="p-6 rounded-sm border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-display font-semibold text-lg text-foreground">{exp.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="font-mono text-sm text-primary mb-3 flex items-center gap-2">
                    <Briefcase className="h-3 w-3" />
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="font-mono text-sm text-accent tracking-wider uppercase mb-6">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 rounded-sm border border-accent/30 bg-accent/5 text-accent font-mono text-sm font-medium hover:border-accent/60 hover:bg-accent/10 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
