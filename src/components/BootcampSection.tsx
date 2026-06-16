import { BookOpen, Clock, CreditCard, DollarSign, Phone, UserPlus } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const features = [
  "Master Python Fundamentals from scratch",
  "Build 5+ Practical Security Tools",
  "Automate Ethical Hacking tasks and scripting",
];

const PAYSTACK_PAYMENT_URL = "https://paystack.shop/pay/wr66sikoqd";
const BOOTCAMP_FEE = 45000; // in Naira

const BootcampSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [reg, setReg] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reg.name.trim() || !reg.email.trim() || !reg.phone.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    const message = encodeURIComponent(
      `Hello! I'd like to register for the Python for Cybersecurity Bootcamp.\n\nName: ${reg.name}\nEmail: ${reg.email}\nPhone: ${reg.phone}`
    );
    window.open(`https://wa.me/2348109773147?text=${message}`, "_blank");
    toast({ title: "Redirecting to WhatsApp!", description: "Complete your registration via WhatsApp." });
    setReg({ name: "", email: "", phone: "" });
    setShowForm(false);
  };

  const handlePaystackSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!reg.name.trim() || !reg.email.trim() || !reg.phone.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }

    const paystackUrl = `${PAYSTACK_PAYMENT_URL}?email=${encodeURIComponent(reg.email)}&name=${encodeURIComponent(reg.name)}&phone=${encodeURIComponent(reg.phone)}`;
    window.open(paystackUrl, "_blank");
    toast({ title: "Redirecting to Paystack!", description: "Complete your secure payment online." });
    setReg({ name: "", email: "", phone: "" });
    setShowForm(false);
  };

  return (
    <section id="bootcamp" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">Bootcamp</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Python for Cybersecurity</h3>
          <p className="text-muted-foreground mt-3">A 1-Month Practical Bootcamp by <span className="text-primary">TheCyberVendetta</span></p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto" delay={0.15}>
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

            {/* Registration form */}
            {showForm ? (
              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 mb-6 p-6 rounded-xl bg-secondary/30 border border-border/30">
                <h4 className="font-semibold flex items-center gap-2 text-sm">
                  <UserPlus className="w-4 h-4 text-primary" />
                  Register for Bootcamp
                </h4>
                <p className="text-xs text-muted-foreground">
                  Please provide your contact information to register. You can choose to pay securely online via Paystack, or finalize registration manually via WhatsApp.
                </p>
                <Input
                  placeholder="Full Name"
                  value={reg.name}
                  onChange={(e) => setReg({ ...reg, name: e.target.value })}
                  maxLength={100}
                  className="bg-secondary/50 border-border/50"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={reg.email}
                  onChange={(e) => setReg({ ...reg, email: e.target.value })}
                  maxLength={255}
                  className="bg-secondary/50 border-border/50"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={reg.phone}
                  onChange={(e) => setReg({ ...reg, phone: e.target.value })}
                  maxLength={20}
                  className="bg-secondary/50 border-border/50"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handlePaystackSubmit}
                    disabled={loading}
                    className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all border-glow flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <CreditCard className="w-4 h-4" />
                    Pay via Paystack
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-3 rounded-lg glass border border-border/50 font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Phone className="w-4 h-4 text-emerald-500" />
                    Via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 rounded-lg glass font-semibold hover:bg-secondary/80 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PAYSTACK_PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all text-center border-glow flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Pay via Paystack
                </a>
                <button
                  onClick={() => setShowForm(true)}
                  className="px-8 py-3 rounded-lg glass border border-border/50 font-semibold hover:bg-secondary/80 transition-all text-center flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Register / WhatsApp
                </button>
                <a
                  href="https://youtube.com/@thecybervendetta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg glass font-semibold hover:bg-secondary/80 transition-all text-center flex items-center justify-center gap-2"
                >
                  YouTube Channel
                </a>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BootcampSection;
