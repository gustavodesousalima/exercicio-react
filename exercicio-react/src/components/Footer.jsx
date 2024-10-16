import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
            <Link to="/quem-somos">Quem Somos</Link>
            <Link to="/instrumentos">Instrumentos</Link>
            <Link to="/endereco">Endereço</Link>
            <Link to="/contato">Contato</Link>
          </div>
          <div className={Styled.FooterContact}>
            <p>gustavdesousalima@gmail.com</p>
            <p>(11) 972069406</p>
          </div>
          <div className={Styled.FooterSocial}>
            <a href="https://www.instagram.com" target="_blank">
              <img src={Insta} alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank">
              <img src={Whats} alt="WhatsApp" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <img src={Face} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;