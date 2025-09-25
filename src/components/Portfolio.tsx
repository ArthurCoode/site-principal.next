import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "EcoSmart Platform",
      category: "web",
      description: "Plataforma de gestão ambiental com IA para otimização de recursos",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "TensorFlow", "MongoDB"],
      stats: { users: "10k+", rating: 4.9, growth: "+250%" },
      featured: true
    },
    {
      id: 2,
      title: "FinTech Mobile",
      category: "mobile",
      description: "App bancário com blockchain e biometria avançada",
      image: "/api/placeholder/600/400",
      tech: ["React Native", "Blockchain", "Biometry", "AWS"],
      stats: { users: "50k+", rating: 4.8, growth: "+180%" },
      featured: true
    },
    {
      id: 3,
      title: "AI Healthcare",
      category: "ai",
      description: "Sistema de diagnóstico médico assistido por inteligência artificial",
      image: "/api/placeholder/600/400",
      tech: ["Python", "TensorFlow", "Computer Vision", "React"],
      stats: { users: "5k+", rating: 4.9, growth: "+320%" },
      featured: false
    },
    {
      id: 4,
      title: "Smart Logistics",
      category: "web",
      description: "Plataforma de logística inteligente com otimização de rotas",
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "ML Algorithms", "Maps API", "PostgreSQL"],
      stats: { users: "25k+", rating: 4.7, growth: "+150%" },
      featured: false
    },
    {
      id: 5,
      title: "VR Training Suite",
      category: "vr",
      description: "Sistema de treinamento corporativo em realidade virtual",
      image: "/api/placeholder/600/400",
      tech: ["Unity", "C#", "VR SDKs", "Cloud Storage"],
      stats: { users: "2k+", rating: 4.9, growth: "+400%" },
      featured: true
    },
    {
      id: 6,
      title: "IoT Dashboard",
      category: "iot",
      description: "Dashboard para monitoramento de dispositivos IoT em tempo real",
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "MQTT", "Time Series DB", "WebSockets"],
      stats: { users: "15k+", rating: 4.8, growth: "+200%" },
      featured: false
    }
  ];

  const filters = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "Inteligência Artificial" },
    { id: "vr", label: "Realidade Virtual" },
    { id: "iot", label: "IoT" }
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
                <div className="absolute inset-0 bg-gradient-card"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-gold text-background px-3 py-1 rounded-full text-sm font-bold">
                    Destaque
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-display font-bold text-primary/20">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
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

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 glass-card rounded-lg">
                  <div className="text-center">
                    <Users className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{project.stats.users}</div>
                    <div className="text-xs text-muted-foreground">Usuários</div>
                  </div>
                  <div className="text-center">
                    <Star className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{project.stats.rating}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{project.stats.growth}</div>
                    <div className="text-xs text-muted-foreground">Crescimento</div>
                  </div>
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
                <div className="absolute inset-0 bg-gradient-card"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-display font-bold text-primary/20">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
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
          <Button variant="hero" size="xl" className="group">
            Iniciar Projeto
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
