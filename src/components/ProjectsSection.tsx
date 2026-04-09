import { ExternalLink, Github, Shield, Code } from "lucide-react";

const projects = [
  {
    title: "SecureVault",
    desc: "End-to-end encrypted password manager with zero-knowledge architecture. Built with React, Node.js, and AES-256 encryption.",
    tags: ["React", "Node.js", "Encryption", "Security"],
    icon: Shield,
  },
  {
    title: "ThreatMap",
    desc: "Real-time cyber threat visualization dashboard that aggregates data from multiple honeypots and threat intelligence feeds.",
    tags: ["Python", "D3.js", "WebSocket", "SIEM"],
    icon: Shield,
  },
  {
    title: "DevPortal",
    desc: "Full-featured developer portal with API documentation, authentication, and rate limiting. Deployed on AWS with CI/CD.",
    tags: ["TypeScript", "AWS", "Docker", "REST API"],
    icon: Code,
  },
  {
    title: "NetScan Pro",
    desc: "Automated network vulnerability scanner with custom rule engine and detailed PDF reporting capabilities.",
    tags: ["Python", "Nmap", "Security", "Automation"],
    icon: Shield,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-4">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Featured Work</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <p.icon className="w-8 h-8 text-primary" />
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
