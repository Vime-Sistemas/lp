import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from './components/ui/button';

// Placeholder para as páginas (criaremos em breve)
const Home = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4">
    <h1 className="text-4xl font-bold tracking-tight">Vime Sistemas</h1>
    <p className="text-muted-foreground">Software com alma.</p>
    <Button>Começar Agora</Button>
  </div>
);

const Manifesto = () => (
  <div className="flex min-h-screen items-center justify-center">
    <h1 className="text-2xl font-medium">Manifesto</h1>
  </div>
);

const Solucoes = () => (
  <div className="flex min-h-screen items-center justify-center">
    <h1 className="text-2xl font-medium">Soluções</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/solucoes" element={<Solucoes />} />
      </Routes>
    </Router>
  );
}

export default App;

