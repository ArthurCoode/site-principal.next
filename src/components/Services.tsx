import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Monitor, 
  Cloud, 
  Database, 
  Brain, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Aplicações Mobile",
      description: "Apps nativos e híbridos para iOS e Android com performance excepcional",
      features: [
        "React Native / Flutter",
        "Design responsivo",
        "Integração com APIs",
        "Performance otimizada"
      ],
      popular: false
    },
    {
      icon: Monitor,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas, rápidas e escaláveis para seu negócio",
      features: [
        "React / Next.js",
        "Progressive Web Apps",
        "SEO otimizado",
        "Arquitetura escalável"
      ],
      popular: true
    },
    {
      icon: Cloud,
      title: "Soluções Cloud",
      description: "Infraestrutura em nuvem robusta e segura para suas aplicações",
      features: [
        "AWS / Azure / GCP",
        "Containers Docker",
        "Microserviços",
        "Auto-scaling"
      ],
      popular: false
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Processamento e análise de dados para insights estratégicos",
      features: [
        "Data Warehousing",
        "Real-time Analytics",
        "Machine Learning",
        "Dashboards interativos"
      ],
      popular: false
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Soluções de IA personalizadas para automatizar e otimizar processos",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Chatbots inteligentes"
      ],
      popular: true
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description: "Proteção avançada para suas aplicações e dados empresariais",
      features: [
        "Auditorias de segurança",
        "Pentesting",
        "Compliance LGPD",
        "Criptografia avançada"
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-glow opacity-10 rounded-full floating"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-primary/20 rounded-full pulse-glow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Oferecemos soluções completas em tecnologia, desde desenvolvimento de aplicações 
            até implementação de inteligência artificial e infraestrutura em nuvem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-500 relative ${
                service.popular ? 'gold-glow ring-2 ring-primary/50' : 'hover:gold-glow'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-gold text-background px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <service.icon className="h-16 w-16 text-primary group-hover:text-primary-glow transition-all duration-300 floating" />
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={service.popular ? "hero" : "futuristic"} 
                className="w-full group"
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 glass-card p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold gradient-text mb-4">
              Nosso Processo
            </h3>
            <p className="text-lg text-muted-foreground font-body">
              Uma metodologia comprovada que garante resultados excepcionais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análise", desc: "Entendemos suas necessidades e objetivos" },
              { step: "02", title: "Planejamento", desc: "Criamos uma estratégia técnica detalhada" },
              { step: "03", title: "Desenvolvimento", desc: "Codificamos com as melhores práticas" },
              { step: "04", title: "Entrega", desc: "Deploy e suporte contínuo" }
            ].map((process, index) => (
              <div key={process.step} className="text-center group">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-background font-display font-bold text-xl">{process.step}</span>
                </div>
                <h4 className="text-xl font-display font-bold text-foreground mb-2">
                  {process.title}
                </h4>
                <p className="text-muted-foreground font-body text-sm">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;