import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-building.jpg";

const Hero = () => {
  const scrollToProperties = () => {
    const element = document.querySelector("#imoveis");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Edifício residencial premium na Zona Norte de São Paulo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block font-sans text-sm md:text-base font-medium text-secondary mb-4 tracking-wide uppercase">
            Especialistas na Zona Norte de SP
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Seu imóvel ideal na{" "}
            <span className="text-secondary">Zona Norte</span>{" "}
            de São Paulo
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Encontre apartamentos, casas e imóveis comerciais com atendimento personalizado 
            e expertise de quem conhece a região há mais de 20 anos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => window.open("https://wa.me/5511999999999?text=" + encodeURIComponent("Olá, gostaria de agendar uma visita para conhecer um imóvel da Imóveis Carreri."), "_blank")}
              className="gap-2 text-base font-semibold"
            >
              <Phone className="w-5 h-5" />
              Agende uma Visita
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToProperties}
              className="gap-2 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Ver Imóveis em Destaque
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
