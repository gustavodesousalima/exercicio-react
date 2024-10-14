import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Bloco from './components/Bloco';
import Footer from './components/Footer';
import Styled from '../src/components/Header.module.css';
import StyledSection from '../src/components/Section.module.css';
import StyledBloco from '../src/components/bloco.module.css';
import ImageViolao from './assets/imgs/guitarrinha.jpg';
import Insta from './assets/imgs/insta.png';
import Whats from './assets/imgs/whats.png';
import Face from './assets/imgs/face.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header className={Styled.header} />
      
      <Section className={StyledSection.Section1}>
        <Bloco className={StyledBloco.bloco1}> 
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, odio! Odit ex quisquam corporis eos voluptas. Repudiandae enim atque itaque!</p>
        </Bloco>
        <Bloco className={StyledBloco.bloco1_2} />
      </Section>

      <Section className={StyledSection.Section2}>
        <Bloco className={StyledBloco.bloco2}>
          <img src={ImageViolao} alt="Guitarrinha" />
          <p>Lorem ipsum dolor sit amet consectetur <span>R$100,00</span></p>
        </Bloco>
        <Bloco className={StyledBloco.bloco2}>
          <img src={ImageViolao} alt="Guitarrinha" />
          <p>Lorem ipsum dolor sit amet consectetur <span>R$100,00</span></p>
        </Bloco>
        <Bloco className={StyledBloco.bloco2}>
          <img src={ImageViolao} alt="Guitarrinha" />
          <p>Lorem ipsum dolor sit amet consectetur <span>R$100,00</span></p>
        </Bloco>
        <Bloco className={StyledBloco.bloco2}>
          <img src={ImageViolao} alt="Guitarrinha" />
          <p>Lorem ipsum dolor sit amet consectetur <span>R$100,00</span></p>
        </Bloco>
      </Section>

      <Section className={StyledSection.Section1}>
        <Bloco className={StyledBloco.bloco3}>
            <iframe
              width="100%"
              height="200"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
        </Bloco>

        <Bloco className={StyledBloco.bloco1}> 
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, odio! Odit ex quisquam corporis eos voluptas. Repudiandae enim atque itaque!</p>
        </Bloco>
      </Section>

      <Section className={StyledSection.Section4}>
        <form action="">
          <label htmlFor="">Nome:</label>
          <input type="text" />
          <label htmlFor="">E-mail:</label>
          <input type="email" />
          <textarea name="" id="" placeholder='Seu pedido aqui'></textarea>
          <button>Enviar</button>
        </form>
        <Bloco className={StyledBloco.bloco4}>

          <h1>Lorem ipsum dolor sit amet.</h1>

        <Bloco className={StyledBloco.blocoredes}>
            <img src={Whats} alt="Whatsapp" />
            <img src={Insta} alt="Instagram" />
            <img src={Face} alt="Facebook" />
        </Bloco>
        </Bloco>
      </Section>
      
      <Footer>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <Bloco className={StyledBloco.blocoredes2}>
            <img src={Whats} alt="Whatsapp" />
            <img src={Insta} alt="Instagram" />
            <img src={Face} alt="Facebook" />
        </Bloco>
      </Footer>
    </>
  );
}

export default App;