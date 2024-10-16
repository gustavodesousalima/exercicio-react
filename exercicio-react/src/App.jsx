import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Section1 from './pages/QuemSomos';
import Section2 from './pages/Instrumentos';
import Section3 from './pages/Endereco';
import Section4 from './pages/Contato';
import Footer from './components/Footer';
import Styled from '../src/components/Header.module.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header className={Styled.header} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<Section1 />} />
        <Route path="/instrumentos" element={<Section2 />} />
        <Route path="/endereco" element={<Section3 />} />
        <Route path="/contato" element={<Section4 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;