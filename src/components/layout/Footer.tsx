import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-background border-t py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight mb-4 block">
              Vime
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm">{t('footer.company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/produtos" className="hover:text-foreground transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/carreiras" className="hover:text-foreground transition-colors">{t('nav.careers')}</Link></li>
              <li><Link to="/contato" className="hover:text-foreground transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vime Sistemas. {t('footer.rightReserved')}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
