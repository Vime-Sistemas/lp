import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, PhoneCall, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();
  const heroImage = "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2000&q=80&sat=-100";
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
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(1)",
          }}
        />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] bg-white/10 border border-white/30 rounded-full px-4 py-2">
              <span>{t('contact.title')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              {t('contact.heroHeading', { defaultValue: 'Vamos tirar seu projeto do papel e integrá-lo ao seu ecossistema.' })}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              {t('contact.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium bg-white text-black hover:bg-white/90">
                {t('contact.primaryCta', { defaultValue: 'Agendar conversa' })}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full px-6 sm:px-8 h-12 text-base font-medium border border-white/40 text-white hover:bg-white/10">
                {t('contact.secondaryCta', { defaultValue: 'Ver soluções' })}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8"
          >
            <Card className="rounded-3xl shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-semibold tracking-tight">{t('contact.sectionTitle', { defaultValue: 'Fale com o time' })}</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  {t('contact.sectionSubtitle', { defaultValue: 'Conte o contexto, timelines e stakeholders. Respondemos rápido e direcionamos o melhor formato.' })}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[{
                  icon: <Mail className="w-5 h-5" />, label: t('contact.email'), value: t('contact.emailValue')
                },{
                  icon: <PhoneCall className="w-5 h-5" />, label: t('contact.phone', { defaultValue: 'Telefone' }), value: t('contact.phoneValue', { defaultValue: '+55 (11) 0000-0000' })
                },{
                  icon: <MapPin className="w-5 h-5" />, label: t('contact.location'), value: t('contact.locationValue')
                },{
                  icon: <MessageSquare className="w-5 h-5" />, label: t('contact.socials'), value: 'LinkedIn / Instagram'
                }].map((item) => (
                  <Card key={item.label} className="border bg-card/60 rounded-2xl">
                    <CardContent className="flex items-start gap-3 p-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{item.label}</p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-transparent"
          >
            <Card className="rounded-3xl shadow-sm">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-semibold tracking-tight">{t('contact.form.title', { defaultValue: 'Envie sua mensagem' })}</CardTitle>
                <CardDescription className="text-sm md:text-base leading-relaxed">
                  {t('contact.form.subtitle', { defaultValue: 'Compartilhe o contexto do projeto, prazo desejado e integrações envolvidas.' })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="flex h-10 md:h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="flex h-10 md:h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {t('contact.form.company', { defaultValue: 'Empresa' })}
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="flex h-10 md:h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder={t('contact.form.companyPlaceholder', { defaultValue: 'Nome da empresa' })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {t('contact.form.subject')}
                      </label>
                      <select
                        id="subject"
                        className="flex h-10 md:h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">{t('contact.form.selectSubject')}</option>
                        <option value="projeto">{t('contact.form.newProject')}</option>
                        <option value="produtos">{t('contact.form.productQuestion')}</option>
                        <option value="carreiras">{t('contact.form.careersVacancies')}</option>
                        <option value="outro">{t('contact.form.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <Button type="submit" className="w-full rounded-full h-12 text-base">
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
