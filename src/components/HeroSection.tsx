import { Shield, Code, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
          <Code className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Web Developer</span>
          <span className="text-muted-foreground">•</span>
          <Shield className="w-5 h-5 text-primary" />
          <span className="font-mono text-sm text-primary tracking-widest uppercase">Security Analyst</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 animate-fade-in-up-delay-1">
          <span className="text-foreground">Building </span>
          <span className="text-primary text-glow">Secure</span>
          <br />
          <span className="text-foreground">Digital Experiences</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-2">
          I craft performant web applications with security baked in from day one.
          From pixel-perfect frontends to bulletproof infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-3">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity border-glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass text-foreground font-semibold hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default HeroSection;
