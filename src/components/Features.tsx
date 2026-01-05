import { Users, MapPin, Clock, Star } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Consultores dedicados que entendem suas necessidades e buscam o imóvel perfeito para você.",
  },
  {
    icon: MapPin,
    title: "Especialistas na Zona Norte",
    description: "Conhecemos cada bairro, rua e oportunidade. Expertise local para decisões certeiras.",
  },
  {
    icon: Clock,
    title: "Visitas Rápidas",
    description: "Agendamento flexível e visitas organizadas para você conhecer os imóveis no seu tempo.",
  },
  {
    icon: Star,
    title: "Curadoria de Imóveis",
    description: "Selecionamos apenas os melhores imóveis, com documentação verificada e condições claras.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium text-secondary uppercase tracking-wide">
            Por que escolher a Carreri
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nossos Diferenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-background rounded-lg border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="font-sans text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
