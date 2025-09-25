import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Rocket, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Desenvolvemos o Futuro";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center particles overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(46,4,4,0.5)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse floating"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-gold opacity-20 rounded-lg floating animate-delay-200"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-primary/30 rounded-full pulse-glow animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8 opacity-0 animate-fade-in animate-delay-200">
            <Sparkles className="h-8 w-8 text-primary floating animate-delay-100" />
            <Rocket className="h-10 w-10 text-primary-glow floating animate-delay-300" />
            <Code2 className="h-8 w-8 text-primary floating animate-delay-500" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 opacity-0 animate-scale-in">
            <span className="block gradient-text">NextDev</span>
          </h1>

          {/* Typing Animation */}
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-8 opacity-0 animate-slide-up animate-delay-300">
            <span className="text-foreground">{typedText}</span>
            <span className="text-primary animate-pulse">|</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-500 font-body">
            Transformamos ideias em realidade digital através de tecnologias inovadoras 
            e soluções de software que definem o amanhã.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-slide-up animate-delay-700">
            <Button variant="hero" size="xl" className="group">
              Iniciar Projeto
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="futuristic" size="xl" className="group">
              Ver Portfolio
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in animate-delay-1000">
            <div className="glass-card p-6 rounded-xl gold-glow">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projetos Entregues</div>
            </div>
            <div className="glass-card p-6 rounded-xl gold-glow">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="glass-card p-6 rounded-xl gold-glow">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-1000">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Role para descobrir mais</span>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;