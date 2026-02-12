import { motion } from "framer-motion";
import { ExternalLink, Github, Lock, ShieldAlert, Bug, Server } from "lucide-react";

const projects = [
  {
    icon: ShieldAlert,
    title: "ThreatMap Live",
    description:
      "Real-time global threat visualization dashboard processing 10M+ events/day. Built with custom ML models for anomaly detection.",
    tags: ["Python", "React", "ML", "Elasticsearch"],
    link: "#",
  },
  {
    icon: Lock,
    title: "ZeroTrust Framework",
    description:
      "Open-source zero-trust network architecture toolkit. Adopted by 30+ organizations. Automates policy generation and micro-segmentation.",
    tags: ["Go", "Terraform", "AWS", "Docker"],
    link: "#",
  },
  {
    icon: Bug,
    title: "VulnHunter Scanner",
    description:
      "Automated vulnerability scanning tool that combines SAST, DAST, and SCA. Found 2000+ CVEs across client environments.",
    tags: ["Python", "Nuclei", "CI/CD", "API"],
    link: "#",
  },
  {
    icon: Server,
    title: "SecureOps Platform",
    description:
      "SOAR platform integrating 20+ security tools. Reduced incident response time by 75% through automated playbooks and orchestration.",
    tags: ["TypeScript", "Node.js", "Redis", "Docker"],
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2 uppercase">
            {">"} ls -la /projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-sm border border-border bg-card hover:border-primary/40 hover:shadow-[var(--glow-primary)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className="h-8 w-8 text-primary" />
                <div className="flex gap-2">
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={project.link} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
