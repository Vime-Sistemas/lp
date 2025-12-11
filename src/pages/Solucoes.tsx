import { motion } from "framer-motion";
import { CheckCircle2, Globe, Smartphone, CloudCheck } from "lucide-react";

const solutions = [
  {
    id: "web-development",
    title: "Aplicações Web",
    description: "Criamos aplicações web modernas e eficientes, focadas em alta performance, segurança e escalabilidade. Soluções pensadas para crescer junto com o seu negócio.",
    icon: <Globe className="w-10 h-10" />,
    features: [
        "Sistemas e serviços online sob medida",
        "Arquitetura escalável para acompanhar seu crescimento",
        "Alta disponibilidade e confiabilidade",
        "Segurança reforçada em todas as camadas"
    ]
  },
  {
    id: "mobile-development",
    title: "Aplicações Mobile",
    description: "Desenvolvemos aplicativos modernos e intuitivos para iOS e Android, com foco em experiência do usuário, design de alta qualidade e desempenho impecável.",
    icon: <Smartphone className="w-10 h-10" />,
    features: [
        "Apps para iOS e Android",
        "Desenvolvimento nativo ou híbrido",
        "Experiência e interface de alta qualidade",
        "Integração com serviços e sistemas existentes"
    ]
  },
  {
    id: "integracoes",
    title: "Integrações",
    description: "Conectamos sistemas e plataformas para tornar seus processos mais simples, rápidos e eficientes. Integramos ferramentas corporativas, como SharePoint, e transformamos fluxos complexos em soluções ágeis e bem estruturadas.",
    icon: <CloudCheck className="w-10 h-10" />,
    features: [
        "Planejamento e estratégia tecnológica",
        "Apoio e mentoria para equipes internas",
        "Mapeamento e otimização de processos"
    ]
  }
];

export default function Solucoes() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Nossas Soluções</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Combinamos design de classe mundial com engenharia de ponta para entregar software que define o mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              id={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Visual Header */}
              <div className="h-48 bg-secondary/30 relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-secondary/60 opacity-100" />
                 <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                 </div>
                 <div className="relative z-10 p-6 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="bg-background/50 backdrop-blur-sm p-4 rounded-2xl border shadow-sm text-primary">
                      {solution.icon}
                    </div>
                 </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold tracking-tight mb-3">{solution.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {solution.description}
                </p>
                <ul className="space-y-2 pt-4 border-t">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
