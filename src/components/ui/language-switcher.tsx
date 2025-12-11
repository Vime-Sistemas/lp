import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FlagBR = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 rounded-sm object-cover shadow-sm">
    <path fill="#009c3b" d="M0 0h640v480H0z"/>
    <path fill="#ffdf00" d="M320 40L605 240 320 440 35 240z"/>
    <circle fill="#002776" cx="320" cy="240" r="108"/>
    <path fill="none" stroke="#fff" strokeWidth="12" d="M220 280q100-80 200 20"/>
  </svg>
);

const FlagUS = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-5 h-5 rounded-sm object-cover shadow-sm">
    <path fill="#bd3d44" d="M0 0h640v480H0z"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
    <path fill="#192f5d" d="M0 0h296v259H0z"/>
    <g fill="#fff">
       <circle cx="30" cy="30" r="12"/>
       <circle cx="80" cy="30" r="12"/>
       <circle cx="130" cy="30" r="12"/>
       <circle cx="180" cy="30" r="12"/>
       <circle cx="230" cy="30" r="12"/>
       <circle cx="55" cy="75" r="12"/>
       <circle cx="105" cy="75" r="12"/>
       <circle cx="155" cy="75" r="12"/>
       <circle cx="205" cy="75" r="12"/>
    </g>
  </svg>
);

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language || 'pt';
  const isPt = currentLanguage.startsWith('pt');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="rounded-full px-3 h-10 gap-2 hover:bg-secondary/80">
          {isPt ? <FlagBR /> : <FlagUS />}
          <span className="font-medium text-sm">
            {isPt ? 'PT' : 'EN'}
          </span>
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('pt')} className="gap-2 cursor-pointer">
          <FlagBR />
          <span>Português</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('en')} className="gap-2 cursor-pointer">
          <FlagUS />
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
