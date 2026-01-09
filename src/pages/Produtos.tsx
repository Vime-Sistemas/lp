import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Briefcase, FileText, Share2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const products = [
  {
    id: "advisor-sync",
    titleKey: "products.advisorSync.title",
    categoryKey: "products.advisorSync.category",
    descriptionKey: "products.advisorSync.description",
    icon: <BarChart3 className="w-8 h-8" />,
    highlight: true,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80&sat=-100"
  },
  {
    id: "broker-workspace",
    titleKey: "products.brokerWorkspace.title",
    categoryKey: "products.brokerWorkspace.category",
    descriptionKey: "products.brokerWorkspace.description",
    icon: <Briefcase className="w-8 h-8" />,
    highlight: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80&sat=-100"
  },
  {
    id: "cerebro-financas",
    titleKey: "products.cerebroFinancas.title",
    categoryKey: "products.cerebroFinancas.category",
    descriptionKey: "products.cerebroFinancas.description",
    icon: <Sparkles className="w-8 h-8" />,
    highlight: false,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-100"
  },
  {
    id: "sharepoint",
    titleKey: "products.integrations.title",
    categoryKey: "products.integrations.category",
    descriptionKey: "products.integrations.description",
    icon: <Share2 className="w-8 h-8" />,
    highlight: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80&sat=-100"
  }
];

export default function Produtos() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative mb-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.65) 100%), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80&sat=-100)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(1)",
          }}
        />
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-center mx-auto text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-white/10 border border-white/30 rounded-full px-4 py-2">
              <span>{t('products.title')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              {t('products.heroHeading', { defaultValue: 'Produtos assinados para quem exige performance, controle e design.' })}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {t('products.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/solucoes">
                <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium bg-white text-black hover:bg-white/90">
                  {t('products.primaryCta', { defaultValue: 'Explorar soluções' })}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contato">
                <Button variant="ghost" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium border border-white/40 text-white hover:bg-white/10">
                  {t('products.secondaryCta', { defaultValue: 'Falar com o time' })}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
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
              className={`group relative overflow-hidden rounded-3xl border bg-card p-0 flex flex-col justify-between ${
                product.highlight ? "md:col-span-2" : ""
              }`}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.7) 70%), url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(1)",
                  transform: "scale(1.02)",
                }}
              />

              <div className="relative z-10 flex flex-col h-full p-6 md:p-12 text-white gap-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/20 shadow-sm">
                    {product.icon}
                  </div>
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/80 border border-white/30 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                    {t(product.categoryKey)}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className={`font-semibold tracking-tight ${product.highlight ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                    {t(product.titleKey)}
                  </h3>
                  <p className={`leading-relaxed text-white/80 ${product.highlight ? "text-lg md:text-xl max-w-2xl" : "text-base"}`}>
                    {t(product.descriptionKey)}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span>{t('products.learnMore', { defaultValue: 'Ver detalhes' })}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
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
              {t('products.notFound')}
            </h2>
            <p className="text-base md:text-xl text-primary-foreground/80 leading-relaxed">
              {t('products.notFoundDesc')}
            </p>
            <div className="pt-4">
              <Link to="/solucoes">
                <Button variant="secondary" size="lg" className="w-full md:w-auto rounded-full px-6 py-6 h-auto whitespace-normal text-center leading-tight text-sm md:text-base">
                  {t('products.seeMore')}
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
