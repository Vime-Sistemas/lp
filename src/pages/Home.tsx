import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import "./Home.css"; // Certifique-se de ter suas classes CSS ou Tailwind configurado

// --- COMPONENTES PARALLAX ---

type ParallaxCardProps = {
  title: string;
  subtitle: string;
  image: string;
  colSpan: number;
  delay?: number;
};

const ParallaxCard = ({ title, subtitle, image, colSpan, delay = 0 }: ParallaxCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay }}
      className={`md:col-span-${colSpan} rounded-xl border bg-card/60 backdrop-blur-sm p-6 flex flex-col justify-end overflow-hidden relative min-h-[300px] group`}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(1) contrast(1.05)",
          opacity: 0.9,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10 pointer-events-none" />

      <div className="relative z-10 max-w-md bg-background/70 backdrop-blur-md p-4 rounded-lg border border-border/60">
        <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{subtitle}</p>
      </div>
    </motion.div>
  );
};


// --- COMPONENTE PRINCIPAL ---

export default function Home() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  // Sem refs individuais: parallax reage ao scroll da viewport

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Loading Screen (Mantido igual) */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <motion.span
                  className="text-4xl md:text-6xl font-bold tracking-tighter"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Vime
                </motion.span>
              </motion.div>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-foreground rounded-full"
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section (Mantido igual) */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden w-full">
        <motion.div 
          className="hero-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={showContent ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-background to-background opacity-50" />
        
        <div className="space-y-6 max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-8xl font-semibold tracking-tighter text-primary bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-600 pb-2 hero-gradient-text w-full"
            >
              {t('home.hero.title')}
            </motion.h1>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={showContent ? { scaleX: 1, opacity: [0, 1, 0] } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[2px] w-48 mx-auto bg-gradient-to-r from-transparent via-foreground to-transparent"
          />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="overflow-hidden"
          >
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="text-lg sm:text-xl md:text-3xl text-muted-foreground font-light tracking-tight max-w-2xl mx-auto leading-relaxed px-4"
            >
              {t('home.hero.subtitle')}
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1 }}
            className="pt-8 flex flex-col sm:flex-row justify-center gap-4 w-full px-2"
          >
            <Link to="/solucoes">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium relative overflow-hidden whitespace-nowrap bg-foreground text-background hover:bg-foreground/90">
                  {t('home.hero.ctaSolutions')}
                </Button>
              </motion.div>
            </Link>
            <Link to="/produtos">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button variant="ghost" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium group hover:bg-secondary/50 whitespace-nowrap">
                  {t('home.hero.ctaLearnMore')} 
                  <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Section - ASCII EDITION */}
      <section className="container mx-auto px-4 py-12 md:py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 md:mb-16 text-center relative"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          {[
            {
              title: t('home.expertise.integrations'),
              subtitle: 'Conexão fluida de sistemas via arquitetura robusta.',
              image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80&sat=-100',
              colSpan: 2,
              delay: 0,
            },
            {
              title: t('home.expertise.frontend'),
              subtitle: t('home.expertise.frontendDesc'),
              image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80&sat=-100',
              colSpan: 4,
              delay: 0.05,
            },
            {
              title: t('home.expertise.mobile'),
              subtitle: t('home.expertise.mobileDesc'),
              image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1600&q=80&sat=-100',
              colSpan: 3,
              delay: 0.1,
            },
            {
              title: t('home.expertise.security'),
              subtitle: t('home.expertise.securityDesc'),
              image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80&sat=-100',
              colSpan: 3,
              delay: 0.15,
            },
          ].map((card) => (
            <ParallaxCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              colSpan={card.colSpan}
              delay={card.delay}
            />
          ))}

        </div>
      </section>

      {/* CTA Section (Simplificada para combinar com o estilo Clean/ASCII) */}
      <section className="py-24 border-t relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 font-mono"
          >
            {t('home.cta.readyForFuture')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/contato">
              <Button size="lg" className="rounded-none border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all h-14 px-10 text-lg font-mono uppercase tracking-widest">
                {t('nav.contact')}_
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}