import React from 'react';
import Bloco from '../components/Bloco';
import StyledSection from '../components/Section.module.css';
import StyledBloco from '../components/bloco.module.css';
import Insta from '../assets/imgs/insta.png';
import Whats from '../assets/imgs/whats.png';
import Face from '../assets/imgs/face.png';

function Contato() {
  return (
    <section className={StyledSection.Section4}>
      <form action="">
        <label htmlFor="">Nome:</label>
        <input type="text" />
        <label htmlFor="">E-mail:</label>
        <input type="email" />
        <textarea name="" id="" placeholder='Seu pedido aqui'></textarea>
        <button>Enviar</button>
      </form>
      <Bloco className={StyledBloco.bloco4}>
        <h1>Redes Sociais</h1>
        <Bloco className={StyledBloco.blocoredes}>
          <img src={Whats} alt="Whatsapp" />
          <img src={Insta} alt="Instagram" />
          <img src={Face} alt="Facebook" />
        </Bloco>
      </Bloco>
    </section>
  );
}

export default Contato;