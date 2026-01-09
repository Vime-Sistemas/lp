import { motion } from "framer-motion";
import { CheckCircle2, Globe, Smartphone, CloudCheck, ArrowRight, Workflow, ShieldCheck, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Solucoes() {
  const { t } = useTranslation();

  const heroImage = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2000&q=80&sat=-100";

  const pillars = [
    {
      title: t('solutions.pillar.discovery.title', { defaultValue: 'Discovery & Strategy' }),
      description: t('solutions.pillar.discovery.desc', { defaultValue: 'Imersão com stakeholders, mapeamento de jornadas e definição de requisitos críticos.' }),
      icon: <Gauge className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&sat=-100",
    },
    {
      title: t('solutions.pillar.delivery.title', { defaultValue: 'Delivery & Product' }),
      description: t('solutions.pillar.delivery.desc', { defaultValue: 'Squads lean, design system vivo, releases frequentes e observabilidade conectada.' }),
      icon: <Workflow className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80&sat=-100",
    },
    {
      title: t('solutions.pillar.security.title', { defaultValue: 'Security & Scale' }),
      description: t('solutions.pillar.security.desc', { defaultValue: 'Arquiteturas resilientes, SSO, hardening, SLAs claros e runbooks prontos.' }),
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=80&sat=-100",
    },
  ];

  const solutions = [
    {
      id: "web-development",
      titleKey: "solutions.webApplication.title",
      descriptionKey: "solutions.webApplication.description",
      icon: <Globe className="w-10 h-10" />,
      featuresKeys: [
        "solutions.webApplication.feature1",
        "solutions.webApplication.feature2",
        "solutions.webApplication.feature3",
        "solutions.webApplication.feature4"
      ]
    },
    {
      id: "mobile-development",
      titleKey: "solutions.mobileApplication.title",
      descriptionKey: "solutions.mobileApplication.description",
      icon: <Smartphone className="w-10 h-10" />,
      featuresKeys: [
        "solutions.mobileApplication.feature1",
        "solutions.mobileApplication.feature2",
        "solutions.mobileApplication.feature3",
        "solutions.mobileApplication.feature4"
      ]
    },
    {
      id: "integracoes",
      titleKey: "solutions.integrations.title",
      descriptionKey: "solutions.integrations.description",
      icon: <CloudCheck className="w-10 h-10" />,
      featuresKeys: [
        "solutions.integrations.feature1",
        "solutions.integrations.feature2",
        "solutions.integrations.feature3"
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      {/* Hero full-bleed */}
      <section className="relative overflow-hidden mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.65) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(1)",
          }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-white/10 border border-white/30 rounded-full px-4 py-2">
              <span>{t('solutions.title')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              {t('solutions.heroHeading', { defaultValue: 'Soluções de produto, integrações e mobile em ritmo de lançamento.' })}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              {t('solutions.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contato">
                <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium bg-white text-black hover:bg-white/90">
                  {t('solutions.primaryCta', { defaultValue: 'Planejar um projeto' })}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/produtos">
                <Button variant="ghost" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium border border-white/40 text-white hover:bg-white/10">
                  {t('solutions.secondaryCta', { defaultValue: 'Ver produtos' })}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-3xl border bg-card min-h-[260px]"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%), url(${pillar.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(1)",
                }}
              />
              <div className="relative z-10 p-6 md:p-8 text-white space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.2em]">
                  {pillar.icon}
                  <span>{t('solutions.pillar.label', { defaultValue: 'Pilar' })}</span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions grid */}
      <section className="container mx-auto px-4 mb-16">
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

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold tracking-tight mb-3">{t(solution.titleKey)}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {t(solution.descriptionKey)}
                </p>
                <ul className="space-y-2 pt-4 border-t">
                  {solution.featuresKeys.map((featureKey, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mr-2 text-primary shrink-0" />
                      {t(featureKey)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col gap-4 md:gap-6 max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">
              {t('solutions.cta.title', { defaultValue: 'Pronto para orquestrar seu próximo produto?' })}
            </h3>
            <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              {t('solutions.cta.subtitle', { defaultValue: 'Integrações, mobile e plataformas com cadência de entrega e governança.' })}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contato">
                <Button variant="secondary" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium">
                  {t('solutions.cta.primary', { defaultValue: 'Agendar conversa' })}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/produtos">
                <Button variant="ghost" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium border border-white/40 text-primary-foreground hover:bg-primary-foreground/10">
                  {t('solutions.cta.secondary', { defaultValue: 'Ver portfólio' })}
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute left-10 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/3" />
        </motion.div>
      </section>
    </div>
  );
}
