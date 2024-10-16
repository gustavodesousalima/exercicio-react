import React from 'react';
import Bloco from '../components/Bloco';
import StyledSection from '../components/Section.module.css';
import StyledBloco from '../components/bloco.module.css';

function QuemSomos() {
  return (
    <section className={StyledSection.Section1}>
      <Bloco className={StyledBloco.bloco1}> 
        <h1>Sobre Nós</h1>
        <p>Bem-vindo à nossa loja de instrumentos musicais, onde a paixão pela música se encontra com a qualidade e a diversidade! Oferecemos uma ampla seleção de instrumentos, desde guitarras e teclados até percussão e acessórios, tudo escolhido com carinho para atender músicos de todos os níveis. Nossa equipe está pronta para ajudar você a encontrar o instrumento perfeito e a inspirar sua jornada musical. Venha fazer parte da nossa comunidade e descubra o som que toca seu coração!</p>
      </Bloco>
      <Bloco className={StyledBloco.bloco1_2} />
    </section>
  );
}

export default QuemSomos;