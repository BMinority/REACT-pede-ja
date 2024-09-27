import './App.css';
import './components/css/Main.css';
import Header from './components/jsx/Header';
import Navigation from './components/jsx/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/jsx/Home';
import Promo from './components/jsx/Promo';
import PedeLover from './components/jsx/PedeLover';
import PedeCard from './components/jsx/PedeCard';
import SobreNos from './components/jsx/SobreNos';
import Vagas from './components/jsx/Vagas';
import Contato from './components/jsx/Contato';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/pedeLover" element={<PedeLover />} />
          <Route path="/pedeCard" element={<PedeCard />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
