import { gsap } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { useEffect, useRef } from 'react';
import pic from './assets/img.png';
import { TimelineLite, Power2 } from 'gsap/gsap-core';

gsap.registerPlugin(CSSRulePlugin);

const App = () => {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule('.img-container::after');

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } }).to(
      imageReveal, 
      1.4, 
      { width: '0%', ease: Power2.easeInOut }
      ).from(image, 2, {scale: 1.6, ease: Power2.easeInOut, delay: -2.8})
      
  },[]);

  return (
    <section>
      <div ref={(el) => { container = el; }} className="container">
        <div className="img-container">
          <img ref={(el) => { image = el; }} src={pic} alt="people" />
        </div>
      </div>
    </section>
  );
};

export default App;