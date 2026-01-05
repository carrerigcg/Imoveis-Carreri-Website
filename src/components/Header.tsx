import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#imoveis", label: "Imóveis" },
    { href: "#vantagens", label: "Vantagens" },
    { href: "#localizacao", label: "Localização" },
    { href: "#contato", label: "Contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="flex items-center gap-2"
          >
            <span className="font-serif text-xl md:text-2xl font-bold text-primary">
              Imóveis <span className="text-secondary">Carreri</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-sans text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="default"
              size="default"
              onClick={() => window.open("https://wa.me/5511999999999?text=" + encodeURIComponent("Olá, gostaria de agendar uma visita para conhecer um imóvel da Imóveis Carreri."), "_blank")}
              className="gap-2"
            >
              <Phone className="w-4 h-4" />
              Agende sua Visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-sans text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="default"
              size="default"
              onClick={() => window.open("https://wa.me/5511999999999?text=" + encodeURIComponent("Olá, gostaria de agendar uma visita para conhecer um imóvel da Imóveis Carreri."), "_blank")}
              className="gap-2 mt-2"
            >
              <Phone className="w-4 h-4" />
              Agende sua Visita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
