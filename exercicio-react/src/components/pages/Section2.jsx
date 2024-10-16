import React from 'react';
import Bloco from '../Bloco';
import StyledSection from '../Section.module.css';
import StyledBloco from '../bloco.module.css';
import ImageViolao from '../../assets/imgs/guitarrinha.jpg';

function Section2() {
  return (
    <section className={StyledSection.Section2}>
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
    </section>
  );
}

export default Section2;