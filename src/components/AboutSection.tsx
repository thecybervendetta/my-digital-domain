import { Terminal, Shield, Code, Eye } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Code, label: "Full-Stack Development", desc: "React, Node.js, Python — crafting sleek, dynamic user interfaces" },
  { icon: Shield, label: "Offensive Security", desc: "Penetration testing, vulnerability assessment, security auditing" },
  { icon: Terminal, label: "Cybersecurity Tooling", desc: "Automated OSINT and pen-testing tools that uncover what others miss" },
  { icon: Eye, label: "Clean & Secure Code", desc: "Fast, secure, and purpose-driven solutions — never an afterthought" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Developer by Day,<br />
              <span className="gradient-text">Security Analyst</span> by Nature
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Richard Uwumwonse</strong> — a developer and <strong className="text-primary/90">cybersecurity specialist</strong> with a deep fascination for <strong className="text-primary/90">offensive security</strong> and building software that refuses to break.
              </p>
              <p>
                With five years of <strong className="text-foreground">Python</strong> under my belt, I don't just write code — I engineer solutions that are fast, secure, and purpose-driven. My playground spans <strong className="text-foreground">full-stack development</strong> and <strong className="text-foreground">cybersecurity tooling</strong>.
              </p>
              <p>
                Curiosity fuels everything I do. One day I'm diving into the intricacies of a new JavaScript framework, the next I'm dissecting the anatomy of a security vulnerability just to understand how it ticks.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1} direction="scale">
                <div className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group gradient-border h-full">
                  <item.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1.5">{item.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
