import { Terminal, Shield, Globe, Zap } from "lucide-react";

const highlights = [
  { icon: Globe, label: "Full-Stack Development", desc: "React, Node.js, TypeScript, and modern cloud architectures" },
  { icon: Shield, label: "Penetration Testing", desc: "OWASP, vulnerability assessment, and security auditing" },
  { icon: Terminal, label: "DevSecOps", desc: "CI/CD pipelines with integrated security scanning" },
  { icon: Zap, label: "Performance", desc: "Optimized applications with sub-second load times" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Developer by Day,<br />
            <span className="text-primary">Security Analyst</span> by Nature
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            With a dual focus on web development and cybersecurity, I bring a unique perspective to every project.
            I don't just build — I build with security as a first-class concern, ensuring robust and resilient digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div key={item.label} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group">
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow transition-all" />
              <h4 className="font-semibold mb-2">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
