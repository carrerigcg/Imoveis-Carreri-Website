import { CheckCircle } from "lucide-react";
const highlights = ["Mais de 56 anos de experiência no mercado imobiliário", "Mais de 1.000 famílias realizaram o sonho do imóvel próprio", "Equipe de corretores especializados e certificados", "Parceria com os principais bancos para financiamento"];
const About = () => {
  return <section id="sobre" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="font-sans text-sm font-medium text-secondary uppercase tracking-wide">
              Quem Somos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              A Imóveis Carreri
            </h2>
            
            <p className="font-sans text-muted-foreground leading-relaxed mb-6">Desde 1969, a Imóveis Carreri atua exclusivamente na Zona Norte de São Paulo, construindo uma reputação sólida baseada em transparência, ética e resultados. Nossa missão é transformar a busca pelo imóvel ideal em uma experiência tranquila e segura.</p>
            
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Conhecemos cada bairro, cada rua e cada oportunidade da região. Essa expertise 
              nos permite oferecer consultoria personalizada, identificando as melhores opções 
              de acordo com o perfil e orçamento de cada cliente.
            </p>

            <ul className="space-y-4">
              {highlights.map((item, index) => <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-foreground">{item}</span>
                </li>)}
            </ul>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-background p-6 md:p-8 rounded-lg border border-border text-center">
              <span className="font-serif text-4xl md:text-5xl font-bold text-primary">56+</span>
              <p className="font-sans text-muted-foreground mt-2">Anos de Experiência</p>
            </div>
            <div className="bg-background p-6 md:p-8 rounded-lg border border-border text-center">
              <span className="font-serif text-4xl md:text-5xl font-bold text-secondary">1000+</span>
              <p className="font-sans text-muted-foreground mt-2">Clientes Satisfeitos</p>
            </div>
            <div className="bg-background p-6 md:p-8 rounded-lg border border-border text-center">
              <span className="font-serif text-4xl md:text-5xl font-bold text-primary">500+</span>
              <p className="font-sans text-muted-foreground mt-2">Imóveis Vendidos</p>
            </div>
            <div className="bg-background p-6 md:p-8 rounded-lg border border-border text-center">
              <span className="font-serif text-4xl md:text-5xl font-bold text-secondary">15</span>
              <p className="font-sans text-muted-foreground mt-2">Bairros Atendidos</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;