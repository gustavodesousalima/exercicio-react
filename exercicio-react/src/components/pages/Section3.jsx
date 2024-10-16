import React from 'react';
import Bloco from '../Bloco';
import StyledSection from '../Section.module.css';
import StyledBloco from '../bloco.module.css';

function Section3() {
  return (
    <section className={StyledSection.Section3}>
      <Bloco className={StyledBloco.bloco3}>
      <iframe id="map-canvas" class="map_part" width="100%"  height="260"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=R. Tito, 54 - Vila Romana&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Powered by <a href="https://www.googlemapsgenerator.com/">embed google maps</a> and <a href="https://https://udenrofus.com/udenlandske-casinoer/">udenlandske casinoer uden nemid</a></iframe>
      </Bloco>
      <Bloco className={StyledBloco.bloco1}> 
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, odio! Odit ex quisquam corporis eos voluptas. Repudiandae enim atque itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </Bloco>
    </section>
  );
}

export default Section3;