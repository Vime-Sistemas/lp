import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import Solucoes from './pages/Solucoes';
import Produtos from './pages/Produtos';
import Carreiras from './pages/Carreiras';
import Contato from './pages/Contato';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/carreiras" element={<Carreiras />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

