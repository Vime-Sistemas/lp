import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-8">
        <div className="mr-4 flex w-full justify-between md:justify-start">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight">
              Vime
            </span>
          </Link>
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/produtos">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Produtos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/solucoes">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Soluções
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contato">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contato
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/carreiras">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Carreiras
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
