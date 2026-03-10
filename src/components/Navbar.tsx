import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionLinks = [
  { label: "Why KIAD", href: "#why-kiad" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate("/"); }}
          className="font-heading text-2xl font-bold text-primary tracking-tight"
        >
          KIAD
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {!isHome && (
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate("/"); }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
          )}
          {isHome && (
            <>
              <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</a>
              {sectionLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </>
          )}
        </div>

        {/* Mobile toggle — only show if homepage (multiple links) */}
        {isHome && (
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
        {!isHome && (
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
            className="md:hidden text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
        )}
      </div>

      {/* Mobile menu — homepage only */}
      {isHome && open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          <a href="#home" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</a>
          {sectionLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
