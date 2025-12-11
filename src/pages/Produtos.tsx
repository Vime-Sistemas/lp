import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Briefcase, FileText, Share2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "advisor-sync",
    title: "AdvisorSync",
    category: "Planejamento Financeiro",
    description: "A ferramenta definitiva para planejadores financeiros. Gestão completa de carteira, CRM avançado e análises preditivas em uma única plataforma.",
    icon: <BarChart3 className="w-8 h-8" />,
    highlight: true
  },
  {
    id: "broker-workspace",
    title: "BrokerWorkspace",
    category: "Seguros",
    description: "Gestão inteligente de clientes e apólices. Inclui nossa exclusiva ferramenta de comparativo entre apólices para agilizar o fechamento de contratos.",
    icon: <Briefcase className="w-8 h-8" />,
    highlight: false
  },
  {
    id: "cerebro-financas",
    title: "Cérebro das Finanças",
    category: "Finanças Pessoais",
    description: "Um aplicativo de finanças pessoais que vai além do básico. Controle, planejamento e inteligência financeira para o usuário final.",
    icon: <Sparkles className="w-8 h-8" />,
    highlight: false
  },
  {
    id: "sharepoint",
    title: "Integrações",
    category: "Enterprise",
    description: "Otimizamos fluxos empresariais complexos integrando softwares robustos como SharePoint. Transformamos ferramentas corporativas em soluções ágeis.",
    icon: <Share2 className="w-8 h-8" />,
    highlight: false
  }
];

export default function Produtos() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Nossos Produtos
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ferramentas desenhadas para elevar a produtividade e simplificar o complexo.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border bg-card p-6 md:p-12 flex flex-col justify-between ${
                product.highlight ? "md:col-span-2 bg-secondary/30" : ""
              }`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 md:mb-8 flex items-center justify-between">
                  <div className="p-3 bg-background rounded-xl border shadow-sm">
                    {product.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground border px-2 py-1 md:px-3 md:py-1 rounded-full bg-background/50 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>
                
                <div className="mt-auto">
                  <h3 className={`font-semibold tracking-tight mb-3 ${product.highlight ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"}`}>
                    {product.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${product.highlight ? "text-base md:text-lg max-w-2xl" : "text-sm md:text-base"}`}>
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Software House Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
            <FileText className="w-10 h-10 md:w-12 md:h-12 mx-auto opacity-80" />
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
              Não encontrou o que procura?
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/80 leading-relaxed">
              Além dos nossos produtos, criamos soluções personalizadas sob medida para o seu negócio — sempre com o mesmo cuidado, qualidade e design que aplicamos internamente.
            </p>
            <div className="pt-4">
              <Link to="/solucoes">
                <Button variant="secondary" size="lg" className="w-full md:w-auto rounded-full px-6 py-6 h-auto whitespace-normal text-center leading-tight text-sm md:text-base">
                  Conheça nossas Soluções Personalizadas
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
