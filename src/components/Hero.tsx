import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Rocket, Code2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4"; // Altere para o caminho do seu vídeo

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Função para tentar reproduzir o vídeo (útil para autoplay em alguns navegadores)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center particles overflow-hidden"
    >
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/path/to/poster-image.jpg" // Opcional: imagem de fallback
        >
          <source src={heroVideo} type="video/mp4" />
          {/* Adicione outros formatos para melhor compatibilidade */}
          {/* <source src="/path/to/video.webm" type="video/webm" /> */}
          Seu navegador não suporta o elemento de vídeo.
        </video>
        
        {/* Overlay escuro sobre o vídeo */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(46,4,4,0.5))'
          }}
        ></div>
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
          <h1 className="text-6xl md:text-8xl font-display font-black mb-6 mt-12 opacity-0 animate-scale-in">
            <span className="block gradient-text" style={{ fontFamily: "'DM Serif Display', serif" }}>
              NextDev
            </span>
          </h1>

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
          <div className="mt-24 mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 animate-fade-in animate-delay-1000">
            <div className="glass-card p-6 rounded-xl gold-glow">
              <div className="text-3xl font-bold gradient-text mb-2">⚡</div>
              <div className="text-muted-foreground">Tecnologia de Ponta</div>
            </div>
            <div className="glass-card p-6 rounded-xl gold-glow">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Foco no Futuro</div>
            </div>
            <div className="glass-card p-6 rounded-xl gold-glow">
              <div className="text-3xl font-bold gradient-text mb-2">∞</div>
              <div className="text-muted-foreground">Possibilidades</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animate-delay-1000">
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Role para descobrir mais</span>
          <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;