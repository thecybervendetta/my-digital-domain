import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-4">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-muted-foreground text-lg mb-10">
            Have a project in mind or need a security audit? I'd love to hear from you.
          </p>

          <div className="flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:border-primary/50 hover:bg-secondary transition-all group"
              >
                <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
