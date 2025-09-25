import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  MessageSquare,
  CheckCircle,
  Star
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@nextdev.com.br",
      description: "Resposta em até 2 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (11) 9999-9999",
      description: "Seg-Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Atendimento presencial ou remoto"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechCorp",
      message: "A NextDev transformou nossa visão em uma aplicação incrível. Profissionalismo e qualidade excepcionais!",
      rating: 5
    },
    {
      name: "Ana Santos",
      company: "Inovação Ltda",
      message: "Equipe altamente qualificada que entregou muito além das nossas expectativas. Recomendamos!",
      rating: 5
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-glow opacity-10 rounded-full floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-primary/20 rounded-full pulse-glow animate-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e descubra como podemos impulsionar seu negócio com tecnologia de ponta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-8">
                <MessageSquare className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-display font-bold gradient-text">
                  Envie sua Mensagem
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Nome Completo
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-card/50 border-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-card/50 border-primary/20 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Empresa (Opcional)
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-card/50 border-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-card/50 border-primary/20 focus:border-primary transition-colors min-h-32"
                    required
                  />
                </div>

                <Button variant="hero" size="xl" type="submit" className="w-full group">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-primary/20">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Resposta rápida</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Consulta gratuita</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">Orçamento sem custo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info & Testimonials */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-display font-bold gradient-text mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.title}
                    className="flex items-start group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <contact.icon className="h-6 w-6 text-primary group-hover:text-primary-glow transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-primary font-medium mb-1">
                        {contact.info}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="font-display font-bold text-foreground">Horário de Atendimento</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 12h<br />
                  Emergências: 24/7
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-display font-bold gradient-text mb-6">
                O que Nossos Clientes Dizem
              </h3>
              
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.name}
                    className="group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center mb-3">
                      <div className="flex text-primary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                      "{testimonial.message}"
                    </p>
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass-card p-12 rounded-2xl">
          <h3 className="text-3xl font-display font-bold gradient-text mb-4">
            Não Perca Tempo!
          </h3>
          <p className="text-lg text-muted-foreground mb-8 font-body">
            Cada dia de atraso é uma oportunidade perdida. Vamos começar seu projeto hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              Agendar Reunião
              <Phone className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
            <Button variant="futuristic" size="xl" className="group">
              Enviar WhatsApp
              <MessageSquare className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;