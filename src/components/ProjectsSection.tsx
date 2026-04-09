import { ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Easybank",
    desc: "Simple banking website with a clean, modern landing page design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Richieacey/Easybank-landing-page",
    live: "https://easybank-landing-page-plum-three.vercel.app/",
    image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/easybank.png",
  },
  {
    title: "Room",
    desc: "Furniture company homepage with interactive slider and responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Richieacey/Room-homepage",
    live: "https://room-homepage-tan-psi.vercel.app/",
    image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/Room.png",
  },
  {
    title: "MovieBase",
    desc: "A database of trending movies built with React and the MovieDB API.",
    tags: ["React", "API", "JavaScript"],
    github: "https://github.com/Richieacey/MovieBase",
    live: "https://movie-base-topaz.vercel.app/",
    image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/MovieBase.png",
  },
  {
    title: "Weather Now",
    desc: "Live weather updates and forecasts using Open Meteo and IPInfo APIs.",
    tags: ["React", "Tailwind", "API"],
    github: "https://github.com/Richieacey/weather-now",
    live: "https://weather-now-web-app.vercel.app/",
    image: "https://tctvhz9naf0vr1sb.public.blob.vercel-storage.com/images/weathernow.jpeg",
  },
];

const reports = [
  {
    title: "Sentinel-VT",
    desc: "Cybersecurity report and analysis.",
    link: "https://drive.google.com/file/d/1cFHVtNYC7xwFHItY3PihLRRuOUtY5yP3/view?usp=drive_link",
  },
  {
    title: "Virtualized Lab",
    desc: "Networking and Security testing in a Lab environment.",
    link: "https://drive.google.com/file/d/1rrrKnxlJLYm0pZ1pguw4zXfU7Bl4cBuo/view",
  },
  {
    title: "Network Simulation",
    desc: "Network Simulation of VLANs in Cisco Packet Tracer.",
    link: "https://drive.google.com/file/d/1XIAihTED-ExThxLxlOFM1yaRjOm5v2Y7/view",
  },
  {
    title: "Wazuh Endpoint",
    desc: "Endpoint Security monitoring and threat analysis.",
    link: "https://drive.google.com/file/d/1pr41sUk0fnd1UNhQiP7rznbURLmEHrGa/view?usp=drive_link",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-mono text-xs text-primary tracking-[0.3em] uppercase mb-4">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold">My Projects</h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="glass rounded-xl overflow-hidden group hover:border-primary/30 transition-all duration-300 gradient-border h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold">{p.title}</h4>
                    <div className="flex gap-2">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">Security Reports</h3>
          <p className="text-muted-foreground mt-2">Cybersecurity analysis & documentation</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {reports.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1} direction="scale">
              <a
                href={r.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group gradient-border block h-full"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{r.title}</h4>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
