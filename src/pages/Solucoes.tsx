import { motion } from "framer-motion";
import { CheckCircle2, Globe, Smartphone, CloudCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Solucoes() {
  const { t } = useTranslation();

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
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{t('solutions.title')}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('solutions.subtitle')}
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
      </div>
    </div>
  );
}
