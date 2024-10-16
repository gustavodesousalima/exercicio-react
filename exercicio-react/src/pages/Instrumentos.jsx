import React from 'react';
import Bloco from '../components/Bloco';
import StyledSection from '../components/Section.module.css';
import StyledBloco from '../components/bloco.module.css';
import ImageViolao from '../assets/imgs/guitarrinha.jpg';

function Instrumentos() {
  return (
    <section className={StyledSection.Section2}>
      <Bloco className={StyledBloco.bloco2}>
        <img src={ImageViolao} alt="Guitarrinha" />
        <p>Violão Clássico Acústico <span>R$100,00</span></p>
      </Bloco>
      <Bloco className={StyledBloco.bloco2}>
        <img src={ImageViolao} alt="Guitarrinha" />
        <p>Violão Clássico Acústico <span>R$100,00</span></p>
      </Bloco>
      <Bloco className={StyledBloco.bloco2}>
        <img src={ImageViolao} alt="Guitarrinha" />
        <p>Violão Clássico Acústico <span>R$100,00</span></p>
      </Bloco>
      <Bloco className={StyledBloco.bloco2}>
        <img src={ImageViolao} alt="Guitarrinha" />
        <p>Violão Clássico Acústico <span>R$100,00</span></p>
      </Bloco>
    </section>
  );
}

export default Instrumentos;