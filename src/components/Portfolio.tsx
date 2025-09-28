import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Future Forge",
      category: "desenvolvimento",
      description: "Oferecer ferramentas prontas e escaláveis para desenvolvedores",
      image: "/public/eco-smart.png",
      tech: ["Next.js", "React", "JavaScript"],
      status: "Em desenvolvimento - 75%",
      featured: true
    },
    {
      id: 2,
      title: "NextChat AI",
      category: "desenvolvimento",
      description: "Sistema de chat inteligente com IA para suporte ao cliente",
      image: "/public/nextchat-ai.png", // Caminho para a imagem
      tech: ["React", "Node.js", "OpenAI", "WebSocket"],
      status: "Em desenvolvimento - 30%",
      featured: true
    },
    {
      id: 3,
      title: "EcoSmart Platform",
      category: "conceito",
      description: "Plataforma de gestão ambiental com IA para otimização de recursos",
      image: "/public/eco-smart.png", // Caminho para a imagem
      tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
      status: "Conceito validado",
      featured: false
    },
  ];

  const filters = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "desenvolvimento", label: "Em Desenvolvimento" },
    { id: "conceito", label: "Conceitos" }
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 particles opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
            Nosso Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Projetos conceituais e ideias inovadoras que demonstram nossa capacidade 
            de criar soluções tecnológicas revolucionárias. Como uma empresa recém-nascida, 
            apresentamos nossa visão do que é possível construir.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "hero" : "futuristic"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Featured Projects Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.filter(p => p.featured).slice(0, 2).map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 gold-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 bg-gradient-primary overflow-hidden">
                {/* Imagem do projeto */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-card opacity-80"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-gold text-background px-3 py-1 rounded-full text-sm font-bold">
                    {project.status.includes('desenvolvimento') ? 'Em Desenvolvimento' : 'Destaque'}
                  </span>
                </div>
                {/* REMOVIDO: Texto grande com nome do projeto atrás da imagem */}
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Status */}
                <div className="mb-6 p-4 glass-card rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">Status:</span>
                    <span className="text-sm font-bold text-primary">{project.status}</span>
                  </div>
                  {project.status.includes('%') && (
                    <div className="mt-2 w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-gold h-2 rounded-full transition-all duration-500"
                        style={{ width: project.status.match(/(\d+)%/)?.[1] + '%' || '0%' }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button variant="hero" size="sm" className="flex-1 group">
                    Ver Projeto
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="futuristic" size="sm" className="group">
                    <Github className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.filter(p => !p.featured).map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:gold-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                {/* Imagem do projeto */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-card opacity-80"></div>
                {/* REMOVIDO: Texto grande com nome do projeto atrás da imagem */}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-display font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  {project.status.includes('desenvolvimento') && (
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  )}
                </div>
                <p className="text-muted-foreground font-body text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="text-xs text-primary font-medium mb-4">
                  {project.status}
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="futuristic" size="sm" className="flex-1 group">
                    Ver Mais
                    <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-card p-12 rounded-2xl">
          <h3 className="text-3xl font-display font-bold gradient-text mb-4">
            Pronto para Construir o Futuro?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 font-body">
            Somos uma empresa nova com ideias grandes. Vamos transformar sua visão em realidade
          </p>

<Button asChild variant="hero" size="xl" className="group">
  <a href="#contact">
    Iniciar Projeto
    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
  </a>
</Button>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;