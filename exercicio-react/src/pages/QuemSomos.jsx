import React from 'react';
import Bloco from '../components/Bloco';
import StyledSection from '../components/Section.module.css';
import StyledBloco from '../components/bloco.module.css';

function QuemSomos() {
  return (
    <section className={StyledSection.Section1}>
      <Bloco className={StyledBloco.bloco1}> 
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, odio! Odit ex quisquam corporis eos voluptas. Repudiandae enim atque itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Bloco>
      <Bloco className={StyledBloco.bloco1_2} />
    </section>
  );
}

export default QuemSomos;