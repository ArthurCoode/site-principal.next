import { Button } from "@/components/ui/button";
import { 
  Code, 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Heart,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    servicos: [
      { name: "Desenvolvimento Web", href: "#services" },
      { name: "Apps Mobile", href: "#services" },
      { name: "Inteligência Artificial", href: "#services" },
    ],
    empresa: [
      { name: "Sobre Nós", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contato", href: "#contact" }
    ],
    recursos: [
      { name: "Documentação", href: "#" },
      { name: "Suporte", href: "#contact" },
      { name: "FAQ", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/NextDev-io", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/next-dev-3b039b387/", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@NextDev-io", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/nextdev.io/", label: "Instagram" }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-primary/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 particles opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2 group">
                <div className="relative">
                  <Code className="h-8 w-8 text-primary floating" />
                  <Zap className="h-4 w-4 text-primary-glow absolute -top-1 -right-1 animate-pulse" />
                </div>
                <span className="text-2xl font-display font-bold gradient-text">
                  NextDev
                </span>
              </div>
              
              <p className="text-muted-foreground font-body leading-relaxed">
                Uma startup que nasceu esta semana com a missão de transformar 
                ideias em realidade digital através de tecnologias inovadoras.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">contact.nextdev@gmail.com</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 text-primary mr-3" />
                  <span className="text-muted-foreground">+55 (77) 99804-1520</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center group hover:gold-glow transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-display font-bold gradient-text mb-6">
                  Serviços
                </h3>
                <ul className="space-y-3">
                  {footerLinks.servicos.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold gradient-text mb-6">
                  Empresa
                </h3>
                <ul className="space-y-3">
                  {footerLinks.empresa.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold gradient-text mb-6">
                  Recursos
                </h3>
                <ul className="space-y-3">
                  {footerLinks.recursos.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-primary/20">
          <div className="glass-card p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Fique por Dentro das Novidades
            </h3>
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Acompanhe nossa jornada desde o primeiro dia! Receba atualizações sobre 
              nosso crescimento, insights sobre tecnologia e as novidades da NextDev 
              diretamente em sua caixa de entrada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 bg-card/50 border border-primary/20 rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
              />
              <Button variant="hero" className="group">
                Inscrever-se
                <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground font-body mb-4 md:mb-0">
              <span>© 2025 NextDev. Desenvolvido com</span>
              <Heart className="h-4 w-4 text-primary mx-2 animate-pulse" />
            </div>
            
            <div className="flex items-center space-x-6">
<a 
  href="/src/assets/downloads/Politica-de-Privacidade.pdf" 
  download="Privacidade & Termos" 
  className="text-sm text-muted-foreground hover:text-primary transition-colors"
>
Privacidade & Termos
</a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
                Topo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-6 w-6 text-background group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
