import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Bloco from './components/Bloco';
import Footer from './components/Footer';
import Styled from '../src/components/Header.module.css';
import StyledSection from '../src/components/Section.module.css';
import StyledBloco from '../src/components/bloco.module.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header className={Styled.header} />
      <Section className={StyledSection.Section1}>
        <Bloco className={StyledBloco.bloco1} />

        <Bloco className={StyledBloco.bloco1} />
      </Section>

      <Section className={StyledSection.Section2}>
        <Bloco className={StyledBloco.bloco2} />

        <Bloco className={StyledBloco.bloco2} />

        <Bloco className={StyledBloco.bloco2} />

        <Bloco className={StyledBloco.bloco2} />
      </Section>

      <Section className={StyledSection.Section3} />

      <Section className={StyledSection.Section4}>
        <Bloco className={StyledBloco.bloco3} />

        <Bloco className={StyledBloco.bloco4} />
      </Section>
      <Footer />

    </>
  );
}

export default App;