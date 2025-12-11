import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Vamos conversar?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Tem um projeto em mente ou quer saber mais sobre nossos produtos? Estamos prontos para ouvir você.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@vimesistemas.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Localização</h3>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  <p className="text-sm text-muted-foreground mt-1">(Atendemos globalmente)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Redes Sociais</h3>
                  <div className="flex gap-4 text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border rounded-3xl p-8 md:p-10 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="projeto">Novo Projeto</option>
                  <option value="produtos">Dúvida sobre Produtos</option>
                  <option value="carreiras">Carreiras / Vagas</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <Button type="submit" className="w-full rounded-full h-12 text-base">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
