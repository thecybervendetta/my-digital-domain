import { BookOpen, Clock, DollarSign, Phone } from "lucide-react";

const features = [
  "Master Python Fundamentals from scratch",
  "Build 5+ Practical Security Tools",
  "Automate Ethical Hacking tasks and scripting",
];

const BootcampSection = () => {
  return (
    <section id="bootcamp" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">Bootcamp</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Python for Cybersecurity</h3>
          <p className="text-muted-foreground mt-3">A 1-Month Practical Bootcamp by <span className="text-primary">TheCyberVendetta</span></p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-10 gradient-border">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-sm">1 Month</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Fee</p>
                  <p className="font-semibold text-sm">₦45,000</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <a href="tel:+2348109773147" className="font-semibold text-sm text-primary hover:underline">+234 810 977 3147</a>
                </div>
              </div>
            </div>

            <div className="section-divider mb-8" />

            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              What You'll Learn
            </h4>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+2348109773147"
                className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all text-center border-glow"
              >
                Reserve Your Spot
              </a>
              <a
                href="https://youtube.com/@thecybervendetta"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg glass font-semibold hover:bg-secondary/80 transition-all text-center"
              >
                YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampSection;
