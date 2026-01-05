import { Train, ShoppingBag, GraduationCap, TreeDeciduous, Hospital, Building } from "lucide-react";

const advantages = [
  {
    icon: Train,
    title: "Excelente Transporte",
    description: "Acesso fácil ao Metrô, CPTM e principais avenidas da cidade.",
  },
  {
    icon: ShoppingBag,
    title: "Comércio Completo",
    description: "Shoppings, supermercados, restaurantes e serviços a poucos minutos.",
  },
  {
    icon: GraduationCap,
    title: "Educação de Qualidade",
    description: "Escolas particulares e públicas renomadas, além de universidades.",
  },
  {
    icon: TreeDeciduous,
    title: "Áreas Verdes",
    description: "Parques e praças para lazer e qualidade de vida em família.",
  },
  {
    icon: Hospital,
    title: "Saúde Acessível",
    description: "Hospitais e clínicas de referência próximos aos bairros residenciais.",
  },
  {
    icon: Building,
    title: "Valorização Imobiliária",
    description: "Região em constante desenvolvimento, com alto potencial de valorização.",
  },
];

const neighborhoods = [
  "Santana",
  "Tucuruvi",
  "Mandaqui",
  "Tremembé",
  "Jaçanã",
  "Vila Guilherme",
  "Vila Maria",
  "Casa Verde",
  "Limão",
  "Freguesia do Ó",
  "Cachoeirinha",
  "Horto Florestal",
];

const Advantages = () => {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium text-secondary uppercase tracking-wide">
            Viva na Zona Norte
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Vantagens da Região
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A Zona Norte de São Paulo oferece qualidade de vida, infraestrutura completa 
            e a tranquilidade que você e sua família merecem.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 bg-card rounded-lg border border-border hover:border-secondary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {advantage.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Neighborhoods */}
        <div className="bg-primary rounded-xl p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-8">
            Bairros que Atendemos
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {neighborhoods.map((neighborhood, index) => (
              <span
                key={index}
                className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground rounded-full font-sans text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors duration-200 cursor-default"
              >
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
