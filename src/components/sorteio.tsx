import { Button } from "@/components/ui/button";
import { Gift, Instagram, Share, Users, Globe, Target } from "lucide-react";

const Giveaway = () => {
  const prizes = [
    {
      icon: Globe,
      title: "Site Institucional Completo",
      description: "Design responsivo e profissional com todas as páginas essenciais"
    },
    {
      icon: Gift,
      title: "Domínio + Hospedagem",
      description: "Registro de domínio e hospedagem profissional por 1 ano"
    },
    {
      icon: Users,
      title: "Suporte Total",
      description: "Você só envia o conteúdo, nós fazemos todo o resto"
    }
  ];

  const steps = [
    {
      icon: Instagram,
      title: "Seguir no Instagram",
      description: "@nextDev.io"
    },
    {
      icon: "❤️",
      title: "Curtir o post",
      description: "Post oficial do sorteio"
    },
    {
      icon: Users,
      title: "Marcar 2 amigos",
      description: "Nos comentários do post"
    },
    {
      icon: Share,
      title: "Compartilhar nos stories",
      description: "Marcando @nextdev.io"
    }
  ];

<div className="py-20 relative overflow-hidden bg-[#050505]" />

  return (
<section 
  id="sorteio" 
  className="py-20 relative overflow-hidden bg-[#0f0f0f]"
>



      {/* Background Effects */}
      <div className="absolute inset-0 particles opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
            Sorteio Gratuito
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Estamos sorteando um site institucional completo para impulsionar seu negócio. 
            Domínio, hospedagem e desenvolvimento - tudo por nossa conta! Participe e transforme sua presença digital.
          </p>
        </div>

        {/* Prêmios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div 
              key={prize.title}
              className="glass-card p-8 rounded-xl gold-glow group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <prize.icon 
                  className="h-12 w-12 text-primary group-hover:text-primary-glow transition-colors duration-300"
                  style={{
                    animation: "float 6s ease-in-out infinite"
                  }}
                />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                {prize.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {prize.description}
              </p>
            </div>
          ))}
        </div>

        {/* Como Participar */}
        <div className="glass-card p-12 rounded-2xl text-center mb-16">
          <h3 className="text-3xl font-display font-bold gradient-text mb-8">
            Como Participar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="group text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {typeof step.icon === 'string' ? (
                      <span>{step.icon}</span>
                    ) : (
                      <step.icon className="h-12 w-12 text-primary" />
                    )}
                  </div>
                </div>
                <div className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300 mb-2">
                  {index + 1}
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diferencial */}
        <div className="glass-card p-8 rounded-2xl text-center mb-8">
          <h3 className="text-2xl font-display font-bold gradient-text mb-4">
            ⭐ Diferencial Exclusivo
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Você só precisa se preocupar em enviar o conteúdo. Todo o desenvolvimento, 
            configuração e deploy são feitos por nossa equipe!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="hero" size="xl" className="group">
            <a 
              href="https://instagram.com/NextDev" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Participar do Sorteio
              <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Sorteio válido por tempo limitado. Consulte o regulamento completo no Instagram.
          </p>
        </div>
      </div>

      {/* Float Keyframes Inline */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default Giveaway;