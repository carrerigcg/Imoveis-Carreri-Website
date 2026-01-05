import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, MessageCircle } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  neighborhood: string;
  type: string;
  price: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
}

const PropertyCard = ({
  image,
  title,
  neighborhood,
  type,
  price,
  area,
  bedrooms,
  bathrooms,
}: PropertyCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Olá, sou interessado no imóvel "${title}" em ${neighborhood} — gostaria de agendar uma visita.`
  );

  return (
    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
            {type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="font-sans text-sm">{neighborhood}</span>
        </div>

        <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Features */}
        <div className="flex items-center gap-4 mb-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4" />
            <span className="font-sans text-sm">{area}m²</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="font-sans text-sm">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span className="font-sans text-sm">{bathrooms}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="font-serif text-2xl font-bold text-primary">{price}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            Ver Detalhes
          </Button>
          <Button
            variant="default"
            size="icon"
            onClick={() => window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, "_blank")}
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
