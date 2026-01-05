import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: "Home",
    href: "#home"
  }, {
    label: "Sobre",
    href: "#sobre"
  }, {
    label: "Imóveis",
    href: "#imoveis"
  }, {
    label: "Vantagens",
    href: "#vantagens"
  }, {
    label: "Localização",
    href: "#localizacao"
  }, {
    label: "Contato",
    href: "#contato"
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-bold">
              Imóveis <span className="text-secondary">Carreri</span>
            </span>
            <p className="font-sans text-primary-foreground/80 mt-4 leading-relaxed">
              Seu parceiro de confiança na busca pelo imóvel ideal na Zona Norte de São Paulo.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.href}>
                  <a href={link.href} onClick={e => {
                e.preventDefault();
                scrollToSection(link.href);
              }} className="font-sans text-primary-foreground/80 hover:text-secondary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                <span className="font-sans text-primary-foreground/80">Av. Jd. Japão, 501 
Jardim Brasil, São Paulo SP 
02221-000<br />
                  Santana, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-secondary" />
                <span className="font-sans text-primary-foreground/80"> (11) 2201-6171</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-secondary" />
                <span className="font-sans text-primary-foreground/80">
                  contato@imoveiscarreri.com.br
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Agende uma Visita</h4>
            <p className="font-sans text-primary-foreground/80 mb-4">
              Entre em contato pelo WhatsApp e agende uma visita ao imóvel de seu interesse.
            </p>
            <Button variant="secondary" size="lg" onClick={() => window.open("https://wa.me/5511999999999?text=" + encodeURIComponent("Olá, gostaria de agendar uma visita para conhecer um imóvel da Imóveis Carreri."), "_blank")} className="w-full gap-2">
              <Phone className="w-5 h-5" />
              Fale Conosco
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-primary-foreground/60">
              © {currentYear} Imóveis Carreri. Todos os direitos reservados.
            </p>
            <p className="font-sans text-sm text-primary-foreground/60">
              CRECI-SP: 123456-J
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;