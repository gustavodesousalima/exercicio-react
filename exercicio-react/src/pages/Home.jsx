import React from 'react';
import Bloco from '../components/Bloco';
import StyledSection from '../components/Section.module.css';
import StyledBloco from '../components/bloco.module.css';

function Home() {
  return (
    <section className={StyledSection.home}>
      <Bloco className={StyledBloco.bloco_home}> 
        <h1>Acordes perfeitos para cada sonho</h1>
      <Bloco className={StyledBloco.bloco1_2_home} />
      </Bloco>
    </section>
  );
}

export default Home;