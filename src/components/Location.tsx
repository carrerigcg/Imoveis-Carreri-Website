import { MapPin, Phone, Mail, Clock } from "lucide-react";
const Location = () => {
  return <section id="localizacao" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-sans text-sm font-medium text-secondary uppercase tracking-wide">
            Onde Estamos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Nossa Localização
          </h2>
          <p className="font-sans text-muted-foreground max-w-2xl mx-auto">
            Visite nosso escritório no coração de Santana ou entre em contato 
            para agendar uma visita aos imóveis de seu interesse.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Placeholder */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="font-sans text-muted-foreground">
                Mapa interativo será carregado aqui.
              </p>
              <p className="font-sans text-sm text-muted-foreground mt-2">
                Av. Voluntários da Pátria, 1234 - Santana, São Paulo - SP
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Entre em Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="font-sans text-muted-foreground">Av. Jd. Japão, 501 
Jardim Brasil, São Paulo
SP, 02221-000<br />
                    Santana, São Paulo - SP<br />
                    CEP: 02011-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Telefone / WhatsApp</h4>
                  <p className="font-sans text-muted-foreground">
                    (11) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="font-sans text-muted-foreground">
                    contato@imoveiscarreri.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-1">Horário de Funcionamento</h4>
                  <p className="font-sans text-muted-foreground">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 14h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Location;