import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Section1 from './components/pages/Section1';
import Section2 from './components/pages/Section2';
import Section3 from './components/pages/Section3';
import Section4 from './components/pages/Section4';
import Footer from './components/Footer';
import Styled from '../src/components/Header.module.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header className={Styled.header} />
      <Routes>
        <Route path="/" element={<Section1 />} />
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