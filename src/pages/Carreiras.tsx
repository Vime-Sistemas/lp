import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Code, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Tecnologia de Ponta",
    description: "Trabalhe com as ferramentas mais modernas do mercado."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Cultura Colaborativa",
    description: "Ambiente onde todas as vozes são ouvidas e respeitadas."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Equilíbrio",
    description: "Valorizamos sua saúde mental e tempo fora do trabalho."
  }
];

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    type: "Remoto",
    department: "Engenharia",
    link: "#"
  },
  {
    title: "UI/UX Designer",
    type: "Híbrido",
    department: "Design",
    link: "#"
  }
];

export default function Carreiras() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero */}
      <section className="container mx-auto px-4 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Junte-se à Vime
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Estamos construindo o futuro do software. Se você é apaixonado por criar produtos excepcionais, seu lugar é aqui.
          </p>
          <Link to="/contato">
            <Button size="lg" className="rounded-full px-8">
              Ver Vagas Abertas
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Cultura & Benefícios */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-secondary/30 border text-center hover:bg-secondary/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto bg-background rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vagas */}
      <section className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Vagas Abertas</h2>
        <div className="space-y-4">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 rounded-2xl border bg-card hover:border-primary/50 transition-colors cursor-pointer"
            >
              <div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{position.title}</h3>
                <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {position.department}</span>
                  <span>•</span>
                  <span>{position.type}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
          
          <div className="mt-12 p-8 rounded-3xl bg-secondary/20 text-center">
            <h3 className="text-lg font-medium mb-2">Não encontrou sua vaga?</h3>
            <p className="text-muted-foreground mb-6">Estamos sempre procurando talentos excepcionais.</p>
            <Link to="/contato">
              <Button variant="outline" className="rounded-full">
                Envie seu Currículo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
