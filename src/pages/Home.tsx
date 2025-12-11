import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-background to-background opacity-50" />
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 
            }}
            className="text-4xl sm:text-5xl md:text-8xl font-semibold tracking-tighter text-primary bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-600 pb-2"
          >
            Vime Sistemas
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1], 
              delay: 0.4 
            }}
            className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-light tracking-tight max-w-2xl mx-auto leading-relaxed px-4"
          >
            Transformamos a sua necessidade
            <br className="hidden md:block" />
            {" "}em solução tecnológica.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1], 
              delay: 0.6 
            }}
            className="pt-8 flex justify-center gap-4"
          >
            <Link to="/solucoes">
              <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium transition-all hover:scale-105">
                Nossas Soluções
              </Button>
            </Link>
            <Link to="/produtos">
              <Button variant="ghost" size="lg" className="rounded-full px-8 h-12 text-base font-medium group hover:bg-secondary/50">
                Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Como podemos ajudar no seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologia bem feita, simples de usar e alinhada aos seus objetivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
          
          {/* AI Development - Coluna 1 e 2 (2/6) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden relative min-h-[300px]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32" />
            </div>
            <div className="flex items-center justify-center flex-1 mb-4">
               <div className="relative w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl transform rotate-6"></div>
                  <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl transform -rotate-6"></div>
                  <Zap className="w-10 h-10 text-primary relative z-10" />
               </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Integrações</h3>
              <p className="text-muted-foreground text-sm">
                Conectamos sistemas e simplificamos processos para que tudo funcione de forma fluida no seu dia a dia.
              </p>
            </div>
          </motion.div>

          {/* Front-End Development - Coluna 3, 4, 5, 6 (4/6) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group overflow-hidden relative min-h-[300px]"
          >
             <div className="absolute -right-10 top-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers className="w-64 h-64" />
            </div>
            <div className="flex items-center justify-center flex-1 mb-4 relative">
              {/* Browser Mockup */}
              <div className="w-full max-w-md bg-background border rounded-lg shadow-sm overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="h-6 bg-secondary border-b flex items-center px-2 space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="h-2 w-1/3 bg-secondary rounded"></div>
                  <div className="h-2 w-2/3 bg-secondary/50 rounded"></div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="h-16 bg-secondary/30 rounded"></div>
                    <div className="h-16 bg-secondary/30 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Sistemas Web</h3>
              <p className="text-muted-foreground text-sm">Criamos plataformas e ferramentas online sob medida, feitas para serem rápidas e fáceis de usar.</p>
            </div>
          </motion.div>

          {/* Mobile Development - Coluna 3 e 4 (2/6) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group min-h-[300px]"
          >
            <div className="flex items-center justify-center flex-1 mb-4">
               <div className="w-20 h-32 border-4 border-secondary rounded-2xl relative bg-background flex flex-col items-center pt-2 transform group-hover:rotate-3 transition-transform duration-500">
                  <div className="w-8 h-1 bg-secondary rounded-full mb-2"></div>
                  <div className="w-full h-full bg-secondary/10"></div>
               </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Aplicativos Mobile</h3>
              <p className="text-muted-foreground text-sm">Apps modernos para iOS e Android, pensados para o seu público e para o crescimento do seu produto.</p>
            </div>
          </motion.div>

          {/* Fractional CTO - Coluna 5 e 6 (2/6) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group min-h-[300px]"
          >
            <div className="flex items-center justify-center flex-1 mb-4">
               <div className="relative flex items-center justify-center">
                  <div className="absolute w-32 h-32 border border-dashed border-secondary rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-20 h-20 border border-secondary rounded-full"></div>
                  <Shield className="w-8 h-8 text-primary" />
               </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Segurança</h3>
              <p className="text-muted-foreground text-sm">Proteção completa para seus dados e sistemas, com práticas de segurança atualizadas.</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Minimalist CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Pronto para o futuro?</h2>
          <Link to="/contato">
              <Button size="lg" className="rounded-full px-8 h-12 text-base bg-white hover:bg-white text-black font-medium transition-all hover:scale-105">
                Contato
              </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
