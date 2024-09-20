import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Phrases = () => {
  const phrasesRef = useRef([]);

  useEffect(() => {
    const phrases = [
      "AHHH ATTEND",
      "ARRETE DE SCROLL",
      "ON VEUT TE PROPOSER UN JEU"
    ];

    const typeWriter = (element, text, i = 0) => {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        setTimeout(() => typeWriter(element, text, i + 1), 50); //Pour définir la vitesse de frappe
      } else {
        element.innerHTML = text;
        const nextElement = element.nextElementSibling;
        if (nextElement && nextElement.classList.contains('phrase')) {
          setTimeout(() => {
            gsap.to(nextElement, { opacity: 1, duration: 0.5 });
            typeWriter(nextElement, nextElement.getAttribute('data-text'));
          }, 1000);
        }
      }
    };

    phrasesRef.current.forEach((element, index) => {
      if (index < phrases.length) {
        element.textContent = '';
        gsap.set(element, { opacity: index === 0 ? 1 : 0 });
        element.setAttribute('data-text', phrases[index]);
      }
    });

    if (phrasesRef.current.length > 0) {
      const firstElement = phrasesRef.current[0];
      gsap.to(firstElement, { opacity: 1, duration: 0.5 });
      typeWriter(firstElement, firstElement.getAttribute('data-text'));
    }
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
  <p ref={el => phrasesRef.current[0] = el} className="phrase absolute top-[5vh] left-[5vw] sm:top-[10vh] sm:left-[5vw] opacity-0 font-standrock text-[5vw] transform -rotate-12 [word-spacing:0.5em] z-10 sm:z-20 md:z-30 lg:z-40"></p>
  <p ref={el => phrasesRef.current[1] = el} className="phrase absolute top-[28vh] left-[2vw] md:top-[35vh] lg:top-[40vh] -translate-y-1/2 opacity-0 font-standrock text-[5vw] md:text-[3vw] transform -rotate-6 [word-spacing:0.5em] z-20 sm:z-30 md:z-40 lg:z-50"></p>
  <p ref={el => phrasesRef.current[2] = el} className="phrase absolute top-[9vh] right-[2vw] md:top-[10vh] opacity-0 font-standrock text-[5vw] md:text-[3vw] transform rotate-6 md:rotate-12 [word-spacing:0.5em] z-30 sm:z-40 md:z-50 lg:z-60"></p>
</div>
  );
};

export default Phrases;