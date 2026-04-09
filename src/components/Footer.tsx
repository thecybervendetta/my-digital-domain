const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <p className="text-sm text-muted-foreground font-mono">
        © {new Date().getFullYear()} — Crafted with security in mind
      </p>
    </div>
  </footer>
);

export default Footer;
