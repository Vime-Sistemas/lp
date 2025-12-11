import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t('contact.email')}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{t('contact.emailValue')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t('contact.location')}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{t('contact.locationValue')}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{t('contact.locationGlobal')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{t('contact.socials')}</h3>
                  <div className="flex gap-4 text-muted-foreground text-sm md:text-base">
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
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
            className="bg-card border rounded-3xl p-6 md:p-10 shadow-sm"
          >
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

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <Button type="submit" className="w-full rounded-full h-12 text-base">
                {t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
