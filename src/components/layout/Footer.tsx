import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight mb-4 block">
              Vime
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Criando o futuro do software com design invisível e engenharia robusta.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4 text-sm">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/produtos" className="hover:text-foreground transition-colors">Produtos</Link></li>
              <li><Link to="/carreiras" className="hover:text-foreground transition-colors">Carreiras</Link></li>
              <li><Link to="/contato" className="hover:text-foreground transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-sm">Soluções</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/solucoes#ai-development" className="hover:text-foreground transition-colors">AI Development</Link></li>
              <li><Link to="/solucoes#web-development" className="hover:text-foreground transition-colors">Web Development</Link></li>
              <li><Link to="/solucoes#mobile-development" className="hover:text-foreground transition-colors">Mobile Development</Link></li>
              <li><Link to="/solucoes#fractional-cto" className="hover:text-foreground transition-colors">Fractional CTO</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vime Sistemas. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
