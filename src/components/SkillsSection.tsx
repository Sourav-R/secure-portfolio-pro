import { motion } from "framer-motion";

const skills = [
  {
    category: "Offensive Security",
    items: [
      { name: "Penetration Testing", level: 95 },
      { name: "Red Teaming", level: 90 },
      { name: "Social Engineering", level: 85 },
      { name: "Exploit Development", level: 80 },
    ],
  },
  {
    category: "Defensive Security",
    items: [
      { name: "Incident Response", level: 95 },
      { name: "Threat Hunting", level: 90 },
      { name: "SIEM Management", level: 85 },
      { name: "Forensics", level: 88 },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Burp Suite / Metasploit", level: 95 },
      { name: "Wireshark / Nmap", level: 92 },
      { name: "Splunk / ELK Stack", level: 88 },
      { name: "AWS / Azure Security", level: 85 },
    ],
  },
  {
    category: "Governance & Compliance",
    items: [
      { name: "ISO 27001 / SOC 2", level: 90 },
      { name: "NIST Framework", level: 92 },
      { name: "GDPR / HIPAA", level: 85 },
      { name: "Risk Assessment", level: 88 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs tracking-[0.3em] mb-2 uppercase" style={{ color: "hsl(180 70% 50%)" }}>
            {">"} cat skills.txt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12">
            Technical <span style={{ color: "hsl(180 70% 50%)", textShadow: "0 0 10px hsl(180 70% 50% / 0.5), 0 0 40px hsl(180 70% 50% / 0.2)" }}>Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="p-6 rounded-sm bg-card"
              style={{ border: "1px solid hsl(180 70% 50% / 0.15)" }}
            >
              <h3 className="font-mono text-sm font-semibold tracking-wider uppercase mb-6" style={{ color: "hsl(180 70% 50%)" }}>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-secondary-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, hsl(180 70% 45%), hsl(190 80% 55%))",
                          boxShadow: "0 0 8px hsl(180 70% 50% / 0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
