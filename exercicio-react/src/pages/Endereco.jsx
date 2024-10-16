import React from 'react';
import Bloco from '../components/Bloco';
import StyledSection from '../components/Section.module.css';
import StyledBloco from '../components/bloco.module.css';

function Endereco() {
  return (
    <section className={StyledSection.Section3}>
      <Bloco className={StyledBloco.bloco3}>
      <iframe id="map-canvas" class="map_part" width="100%"  height="260"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=R. Tito, 54 - Vila Romana&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com/">embed google maps</a> and <a href="https://https://udenrofus.com/udenlandske-casinoer/">udenlandske casinoer uden nemid</a></iframe>
      </Bloco>
      <Bloco className={StyledBloco.bloco1}> 
        <h1>Localização</h1>
        <p>Estamos localizados na Rua Tito, 54, Vila Romana, São Paulo. Venha nos visitar e descubra um mundo de música a poucos passos de você! Nossa loja é um espaço acolhedor onde você pode experimentar os instrumentos e receber orientações da nossa equipe especializada. Esperamos por você!</p>
      </Bloco>
    </section>
  );
}

export default Endereco;