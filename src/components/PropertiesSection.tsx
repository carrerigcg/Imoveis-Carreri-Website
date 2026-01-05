import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Apartamento de Alto Padrão com Vista Panorâmica",
    neighborhood: "Santana",
    type: "Apartamento",
    price: "R$ 850.000",
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    image: property2,
    title: "Casa Moderna com Jardim e Churrasqueira",
    neighborhood: "Tucuruvi",
    type: "Casa",
    price: "R$ 1.200.000",
    area: 250,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    image: property3,
    title: "Cobertura Duplex com Terraço Gourmet",
    neighborhood: "Mandaqui",
    type: "Cobertura",
    price: "R$ 1.500.000",
    area: 180,
    bedrooms: 3,
    bathrooms: 3,
  },
];

const PropertiesSection = () => {
  return (
    <section id="imoveis" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium text-secondary uppercase tracking-wide">
            Oportunidades Exclusivas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Imóveis em Destaque
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Confira nossa seleção especial de imóveis na Zona Norte de São Paulo, 
            escolhidos a dedo para atender os mais exigentes padrões.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <button className="font-sans text-primary font-semibold hover:text-secondary transition-colors underline underline-offset-4">
            Ver todos os imóveis →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
