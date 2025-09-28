import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <Code className="h-8 w-8 text-primary floating" />
              <Zap className="h-4 w-4 text-primary-glow absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-display font-bold gradient-text">
              NextDev
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group font-medium"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
<div className="hidden md:block">
  <a href="#contact">
    <Button variant="hero" size="lg" className="animate-pulse-glow">
      Começar Projeto
    </Button>
  </a>
</div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-6 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="mt-4 w-full">
                Começar Projeto
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;