import { motion } from "framer-motion";
import { CheckCircle2, Code2, Cpu, Globe, Smartphone, Users } from "lucide-react";

const solutions = [
  {
    id: "ai-development",
    title: "AI Development",
    description: "Transforme dados em decisões inteligentes. Desenvolvemos modelos de Machine Learning e integrações com LLMs para automatizar processos complexos.",
    icon: <Cpu className="w-10 h-10" />,
    features: ["Processamento de Linguagem Natural", "Visão Computacional", "Análise Preditiva", "Automação Inteligente"]
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Aplicações web modernas, rápidas e escaláveis. Utilizamos as tecnologias mais recentes para garantir performance e SEO de ponta.",
    icon: <Globe className="w-10 h-10" />,
    features: ["React & Next.js", "Arquitetura Serverless", "Progressive Web Apps", "Design Systems"]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Apps nativos e híbridos que os usuários amam usar. Foco total em UX/UI fluida e performance nativa.",
    icon: <Smartphone className="w-10 h-10" />,
    features: ["iOS & Android", "React Native", "Flutter", "Integrações Nativas"]
  },
  {
    id: "fractional-cto",
    title: "Fractional CTO",
    description: "Liderança técnica sob demanda para sua startup ou empresa. Ajudamos a definir arquitetura, contratar times e estabelecer cultura de engenharia.",
    icon: <Users className="w-10 h-10" />,
    features: ["Estratégia Tecnológica", "Mentoria de Equipe", "Revisão de Arquitetura", "Due Diligence Técnica"]
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

        <div className="space-y-20 md:space-y-32">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              id={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24 items-center scroll-mt-24`}
            >
              <div className="flex-1 space-y-4 md:space-y-6 w-full">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4 md:mb-6 text-primary">
                  {solution.icon}
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-tight">{solution.title}</h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 md:space-y-3 pt-2 md:pt-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 mr-3 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 w-full aspect-square md:aspect-video bg-secondary/30 rounded-3xl border flex items-center justify-center relative overflow-hidden group">
                 {/* Placeholder visual abstrato para cada solução */}
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/50 opacity-50" />
                 <Code2 className="w-24 h-24 md:w-32 md:h-32 text-secondary-foreground/10 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
