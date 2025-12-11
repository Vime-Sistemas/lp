import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const getBenefits = (t: any) => [
  {
    icon: <Code className="w-6 h-6" />,
    title: t('careers.benefit1.title'),
    description: t('careers.benefit1.description')
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: t('careers.benefit2.title'),
    description: t('careers.benefit2.description')
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: t('careers.benefit3.title'),
    description: t('careers.benefit3.description')
  }
];

export default function Carreiras() {
  const { t } = useTranslation();
  const benefits = getBenefits(t);
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
            {t('careers.title')}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {t('careers.subtitle')}
          </p>
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
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">{t('careers.openPositions')}</h2>
        <div className="space-y-4">  
          <div className="mt-12 p-8 rounded-3xl bg-secondary/20 text-center">
            <h3 className="text-lg font-medium mb-2">{t('careers.notFound')}</h3>
            <p className="text-muted-foreground mb-6">{t('careers.notFoundDesc')}</p>
            <Link to="/contato">
              <Button variant="outline" className="rounded-full w-full md:w-auto">
                {t('careers.sendResume')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
