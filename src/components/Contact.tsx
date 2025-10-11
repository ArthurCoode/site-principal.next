import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  Send, 
  Clock,
  MessageSquare,
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

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", { // 🔹 backend completo
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
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
      info: "contact.nextdev@gmail.com",
      description: "Resposta em até 2 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (77) 99804-1520",
      description: "Seg-Sex, 9h às 18h"
    },
  ];

  const testimonials = [
    {
  name: "",
  company: "",
  message: "O time da NextDev foi extremamente proativo e detalhista. Nosso projeto ganhou vida exatamente como imaginávamos!",
  rating: 5
},
    {
      name: "",
      company: "",
      message: "A NextDev transformou nossa visão em uma aplicação incrível. Profissionalismo e qualidade excepcionais!",
      rating: 5
    },
    {
      message: "Equipe altamente qualificada que entregou muito além das nossas expectativas. Recomendamos!",
      rating: 5
    }
  ];

  return (
   <section className="py-20 relative overflow-hidden bg-[#141414]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold gradient-text mb-6">
            Vamos Conversar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Somos uma empresa que nasceu esta semana com grandes sonhos! Entre em contato 
            conosco e descubra como podemos começar a construir o futuro juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulário */}
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
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa (Opcional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre seu projeto..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Button variant="hero" size="xl" type="submit" className="w-full group">
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                {/* Status do envio */}
                {status === "success" && (
                  <p className="text-green-500 text-center mt-4">Mensagem enviada com sucesso!</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-center mt-4">Erro ao enviar, tente novamente.</p>
                )}
              </form>
            </div>
          </div>

          {/* Informações de contato e depoimentos */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-display font-bold gradient-text mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((contact) => (
                  <div key={contact.title} className="flex items-start">
                    <contact.icon className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <h4 className="font-bold">{contact.title}</h4>
                      <p className="text-primary font-medium">{contact.info}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-primary/20">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold">Horário de Atendimento</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Segunda a Sexta: 9h às 18h <br />
                  Sábado & Domingo: 9h às 12h
                </p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-display font-bold gradient-text mb-6">
                O que Nossos Clientes Dizem
              </h3>
              <div className="space-y-6">
                {testimonials.map((t) => (
                  <div key={t.name} className="group">
                    <div className="flex text-primary mb-2">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">
                      "{t.message}"
                    </p>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
