import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import Solucoes from './pages/Solucoes';
import Produtos from './pages/Produtos';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

