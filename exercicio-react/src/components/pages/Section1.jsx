import React from 'react';
import Bloco from '../Bloco';
import StyledSection from '../Section.module.css';
import StyledBloco from '../bloco.module.css';

function Section1() {
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

export default Section1;