const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} Richie.U — Built with security in mind
      </p>
      <div className="flex items-center gap-6">
        <a href="https://linkedin.com/in/richard-uwumwonse" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
        <a href="https://github.com/thecybervendetta" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">GitHub</a>
        <a href="https://x.com/RichieAce2" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">X</a>
      </div>
    </div>
  </footer>
);

export default Footer;
