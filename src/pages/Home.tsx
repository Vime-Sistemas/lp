import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simula loading inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {/* Logo animado */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.span
                  className="text-4xl md:text-6xl font-bold tracking-tighter"
                  animate={{ 
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Vime
                </motion.span>
              </motion.div>
              
              {/* Loading dots */}
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-foreground rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden">
        {/* Background orb */}
        <motion.div 
          className="hero-orb absolute top-1/2 left-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-background to-background opacity-50" />
        
        <div className="space-y-6 max-w-4xl mx-auto hero-perspective">
          {/* Título principal com animação de reveal dramática */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 100, rotateX: -80 }}
              animate={showContent ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 1.2, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 
              }}
              className="text-4xl sm:text-5xl md:text-8xl font-semibold tracking-tighter text-primary bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-600 pb-2 hero-gradient-text"
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              {t('home.hero.title')}
            </motion.h1>
          </div>

          {/* Linha decorativa animada */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={showContent ? { scaleX: 1, opacity: [0, 1, 0] } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-foreground to-transparent"
          />
          
          {/* Subtítulo com reveal por palavras */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="overflow-hidden"
          >
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1], 
                delay: 0.7 
              }}
              className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-light tracking-tight max-w-2xl mx-auto leading-relaxed px-4"
            >
              {t('home.hero.subtitle')}
            </motion.p>
          </motion.div>
          
          {/* CTAs com animação staggered */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1], 
              delay: 1 
            }}
            className="pt-8 flex justify-center gap-4"
          >
            <Link to="/solucoes">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-8 h-12 text-base font-medium hero-button-shimmer hero-cta-pulse relative overflow-hidden"
                >
                  {t('home.hero.ctaSolutions')}
                </Button>
              </motion.div>
            </Link>
            <Link to="/produtos">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="rounded-full px-8 h-12 text-base font-medium group hover:bg-secondary/50"
                >
                  {t('home.hero.ctaLearnMore')} 
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* Partículas flutuantes decorativas */}
          {showContent && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-foreground/20 rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    bottom: '30%',
                  }}
                  animate={{
                    y: [-20, -100],
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1.5 + i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 overflow-hidden">
        {/* Título da seção com animação dramática */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 text-center relative"
        >
          {/* Linha decorativa superior */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            {t('home.expertise.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            {t('home.expertise.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[300px]">
          
          {/* AI Development - Coluna 1 e 2 (2/6) */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="md:col-span-2 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group overflow-hidden relative min-h-[300px]"
          >
            {/* Glow effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32" />
            </div>
            <div className="flex items-center justify-center flex-1 mb-4">
               <motion.div 
                 className="relative w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center"
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
               >
                  <motion.div 
                    className="absolute inset-0 border-2 border-primary/10 rounded-2xl"
                    animate={{ rotate: [6, -6, 6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 border-2 border-primary/10 rounded-2xl"
                    animate={{ rotate: [-6, 6, -6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Zap className="w-10 h-10 text-primary relative z-10" />
                  </motion.div>
               </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-medium mb-2">{t('home.expertise.integrations')}</h3>
              <p className="text-muted-foreground text-sm">
                Conectamos sistemas e simplificamos processos para que tudo funcione de forma fluida no seu dia a dia.
              </p>
            </motion.div>
          </motion.div>

          {/* Front-End Development - Coluna 3, 4, 5, 6 (4/6) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="md:col-span-4 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group overflow-hidden relative min-h-[300px]"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
             <div className="absolute -right-10 top-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <Layers className="w-64 h-64" />
            </div>
            <div className="flex items-center justify-center flex-1 mb-4 relative">
              {/* Browser Mockup com animações */}
              <motion.div 
                className="w-full max-w-md bg-background border rounded-lg shadow-sm overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="h-6 bg-secondary border-b flex items-center px-2 space-x-1">
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-red-400/50"
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-yellow-400/50"
                    whileHover={{ scale: 1.5 }}
                  />
                  <motion.div 
                    className="w-2 h-2 rounded-full bg-green-400/50"
                    whileHover={{ scale: 1.5 }}
                  />
                </div>
                <div className="p-4 space-y-2">
                  <motion.div 
                    className="h-2 w-1/3 bg-secondary rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ originX: 0 }}
                  />
                  <motion.div 
                    className="h-2 w-2/3 bg-secondary/50 rounded"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ originX: 0 }}
                  />
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <motion.div 
                      className="h-16 bg-secondary/30 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    />
                    <motion.div 
                      className="h-16 bg-secondary/30 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-medium mb-2">{t('home.expertise.frontend')}</h3>
              <p className="text-muted-foreground text-sm">{t('home.expertise.frontendDesc')}</p>
            </motion.div>
          </motion.div>

          {/* Mobile Development - Coluna 3 e 4 (2/6) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="md:col-span-2 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group min-h-[300px] overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="flex items-center justify-center flex-1 mb-4">
               <motion.div 
                 className="w-20 h-32 border-4 border-secondary rounded-2xl relative bg-background flex flex-col items-center pt-2"
                 whileHover={{ rotate: 5, scale: 1.05 }}
                 animate={{ y: [0, -5, 0] }}
                 transition={{ 
                   y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                   rotate: { type: "spring", stiffness: 300 },
                   scale: { type: "spring", stiffness: 300 }
                 }}
               >
                  <div className="w-8 h-1 bg-secondary rounded-full mb-2"></div>
                  <div className="w-full h-full bg-secondary/10 relative overflow-hidden">
                    {/* Animated content inside phone */}
                    <motion.div
                      className="absolute inset-2 bg-secondary/20 rounded"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  {/* Notification dot */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
               </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl font-medium mb-2">{t('home.expertise.mobile')}</h3>
              <p className="text-muted-foreground text-sm">{t('home.expertise.mobileDesc')}</p>
            </motion.div>
          </motion.div>

          {/* Security - Coluna 5 e 6 (2/6) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="md:col-span-2 rounded-3xl border bg-card p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 group min-h-[300px] overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="flex items-center justify-center flex-1 mb-4">
               <div className="relative flex items-center justify-center">
                  {/* Orbiting rings */}
                  <motion.div 
                    className="absolute w-32 h-32 border border-dashed border-secondary rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-24 h-24 border border-secondary/50 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute w-20 h-20 border border-secondary rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {/* Orbiting dot */}
                  <motion.div
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ 
                      transformOrigin: "16px 0px",
                      x: -16
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Shield className="w-8 h-8 text-primary" />
                  </motion.div>
               </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-medium mb-2">{t('home.expertise.security')}</h3>
              <p className="text-muted-foreground text-sm">{t('home.expertise.securityDesc')}</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Minimalist CTA */}
      <section className="py-32 bg-primary text-primary-foreground text-center relative overflow-hidden">
        {/* Background animated elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
          >
            {t('home.cta.readyForFuture')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contato">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-8 h-12 text-base bg-white hover:bg-white text-black font-medium hero-button-shimmer relative overflow-hidden"
                >
                  {t('nav.contact')}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
