const devSkills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 82 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS / Cloud", level: 80 },
];

const secSkills = [
  { name: "Penetration Testing", level: 90 },
  { name: "Network Security", level: 88 },
  { name: "SIEM / Log Analysis", level: 85 },
  { name: "Incident Response", level: 82 },
  { name: "Vulnerability Assessment", level: 92 },
  { name: "Security Auditing", level: 87 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="font-medium">{name}</span>
      <span className="font-mono text-primary">{level}%</span>
    </div>
    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
      <div
        className="h-full rounded-full bg-primary transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-4">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="glass rounded-xl p-8">
            <h4 className="font-semibold text-lg mb-6 text-primary">Development</h4>
            <div className="space-y-5">
              {devSkills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
          <div className="glass rounded-xl p-8">
            <h4 className="font-semibold text-lg mb-6 text-primary">Cybersecurity</h4>
            <div className="space-y-5">
              {secSkills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
