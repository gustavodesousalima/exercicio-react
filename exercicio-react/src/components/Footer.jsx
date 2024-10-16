import React from 'react';
import Styled from './Footer.module.css';
import Insta from '../assets/imgs/insta.png';
import Whats from '../assets/imgs/whats.png';
import Face from '../assets/imgs/face.png';

function Footer(props) {
  return (
    <>
      <div className={Styled.Footer}>
        <div className={Styled.FooterContent}>
          <div className={Styled.FooterLinks}>
            <a href="/">Home</a>
            <a href="/quem-somos">Quem Somos</a>
            <a href="/instrumentos">Instrumentos</a>
            <a href="/endereco">Endereço</a>
            <a href="/contato">Contato</a>
          </div>
          <div className={Styled.FooterContact}>
            <p>Email: gustavdesousalima@gmail.com</p>
            <p>Telefone: (11) 972069406</p>
          </div>
          <div className={Styled.FooterSocial}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Insta} alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={Whats} alt="WhatsApp" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={Face} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;