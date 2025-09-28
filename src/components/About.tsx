import { Button } from "@/components/ui/button";
import { Brain, Cpu, Zap, Target, Users, Trophy } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Implementamos soluções de IA avançadas para automatizar processos e otimizar resultados."
    },
    {
      icon: Cpu,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as mais recentes tecnologias e frameworks para garantir performance superior."
    },
    {
      icon: Zap,
      title: "Desenvolvimento Ágil",
      description: "Metodologias ágeis que garantem entregas rápidas sem comprometer a qualidade."
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particles opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
            Quem Somos
          </h2>
<p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
  Somos os criadores de um novo futuro. A NextDev conecta pessoas, ideias e tecnologia para transformar conhecimento em impacto real, construindo hoje as soluções que irão moldar o amanhã. 
  Nascemos com a missão de revolucionar o desenvolvimento de aplicações, trazendo energia, paixão e uma visão clara para antecipar as necessidades do futuro por meio de soluções tecnológicas inovadoras.
</p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass-card p-8 rounded-xl gold-glow group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <feature.icon className="h-12 w-12 text-primary group-hover:text-primary-glow transition-colors duration-300 floating" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="glass-card p-12 rounded-2xl text-center mb-16">
          <h3 className="text-3xl font-display font-bold gradient-text mb-8">
            Nossa Missão
          </h3>
<p className="text-lg text-muted-foreground max-w-4xl mx-auto font-body leading-relaxed mb-8">
  Na NextDev, nossa missão é transformar ideias em soluções digitais inovadoras, unindo criatividade, tecnologia e impacto real. Queremos capacitar pessoas e empresas a evoluírem, tornando o futuro mais acessível, conectado e pronto para as oportunidades de amanhã.
</p>

          
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
  <div className="group">
    <div className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
      2025
    </div>
    <div className="text-muted-foreground font-medium">O Início da Revolução</div>
  </div>
  <div className="group">
    <div className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
      ∞
    </div>
    <div className="text-muted-foreground font-medium">Possibilidades</div>
  </div>
  <div className="group">
    <div className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
      Impacto
    </div>
    <div className="text-muted-foreground font-medium">Tecnologia com Propósito</div>
  </div>
  <div className="group">
    <div className="text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
      Futuro
    </div>
    <div className="text-muted-foreground font-medium">Visão Transformadora</div>
  </div>
</div>
        </div>

        {/* CTA Section */}
<div className="text-center">
  <Button asChild variant="hero" size="xl" className="group">
    <a href="#portfolio">
      Conheça Nossos Desenvolvimento
      <Target className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
    </a>
  </Button>
</div> 
      </div>
    </section>
  );
};

export default About;