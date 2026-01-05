import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Fernanda S.",
    location: "Santana",
    text: "Atendimento excepcional! A equipe da Carreri entendeu exatamente o que eu procurava e encontrou o apartamento perfeito para minha família. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    name: "Roberto M.",
    location: "Tucuruvi",
    text: "Comprei minha primeira casa com a Carreri. Processo transparente, documentação impecável e suporte em todas as etapas. Profissionais de verdade.",
    rating: 5,
  },
  {
    name: "Ana Paula L.",
    location: "Mandaqui",
    text: "Depois de meses procurando, a Carreri me apresentou opções que realmente faziam sentido. Fechei negócio em semanas. Agradeço toda a paciência e dedicação.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium text-secondary uppercase tracking-wide">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            A satisfação de nossos clientes é a nossa maior recompensa. 
            Confira alguns depoimentos de quem já realizou o sonho do imóvel próprio conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-xl border border-border relative"
            >
              <Quote className="w-10 h-10 text-secondary/30 absolute top-6 right-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="font-sans text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
