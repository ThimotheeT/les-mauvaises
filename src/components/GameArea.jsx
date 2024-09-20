import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const GameArea = () => {
  const cupsRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        cupsRef.current.forEach(cup => cup.style.pointerEvents = 'auto');
      }
    });

    const shuffleAnimation = () => {
      for (let i = 0; i < 3; i++) { //Défini le nombre de melange
        tl.to(cupsRef.current, {
          duration: 0.5, //Vitesse melange
          x: (index) => index === 0 ? "100%" : "-100%",
          ease: "power2.inOut", //Vitesse anim
        })
        .to(cupsRef.current, {
          duration: 0.5, //Vitesse melange
          x: "0%",
          ease: "power2.inOut", //Vitesse anim
        });
      }
    };

    cupsRef.current.forEach(cup => cup.style.pointerEvents = 'none');

     //Temps avant debu d'anim
    setTimeout(() => {
      shuffleAnimation();
    }, 1000);

    const handleCupClick = (cup) => {
      if (!isAnimating) {
        gsap.to(cup.querySelector('img'), {
          y: -50,
          duration: 0.5
        });
        gsap.to(cup.querySelector('.hidden-text'), {
          opacity: 1,
          duration: 0.5
        });
      }
    };

    cupsRef.current.forEach(cup => {
      cup.addEventListener('click', () => handleCupClick(cup));
    });

    return () => {
      cupsRef.current.forEach(cup => {
        cup.removeEventListener('click', () => handleCupClick(cup));
      });
    };
  }, [isAnimating]);

  return (
    <div className="game-area flex justify-center items-center mt-[5vh] mb-[2vh]">
      <div className="flex justify-center space-x-[5vw]">
        {[0, 1].map((index) => (
          <div key={index} ref={el => cupsRef.current[index] = el} className="cup relative cursor-pointer flex flex-col items-center">
            <img src="src/assets/goblet-removebg-preview.png" alt="Gobelet" className="w-[20vw] max-w-[200px] 3xl:max-w-[400px] h-auto" />
            <span className="hidden-text absolute -bottom-[3vh] left-1/2 -translate-x-1/2 opacity-0 bg-custom-dark text-white py-[1vh] px-[3vw] rounded-full font-standrock text-[2vw] whitespace-nowrap">
              {index === 0 ? "NON" : "OUI"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameArea;