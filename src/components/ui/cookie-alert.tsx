import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from 'js-cookie';

export function CookieAlert() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie-consent', 'true', { expires: 365 });
    setIsVisible(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie-consent', 'false', { expires: 365 });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="bg-card border shadow-lg rounded-xl p-6 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              {t('cookieAlert.message')}
            </p>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" size="sm" onClick={handleDecline}>
                {t('cookieAlert.decline')}
              </Button>
              <Button size="sm" onClick={handleAccept}>
                {t('cookieAlert.accept')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
