import React from 'react';

const Header = () => (
  <header className="flex flex-col items-center mt-2 sm:mt-3 md:mt-4 lg:mt-5">
    <img 
      src="src/assets/smiley-removebg-preview.png" 
      alt="Smiley" 
      className="w-[16vw] sm:w-1/9 md:w-[10vw] lg:w-[10vw] xl:w-[9vw] 3xl:w-1/6 max-w-xs mb-2 sm:mb-3 md:mb-4 lg:mb-5" 
    />
    <div className="relative w-full flex justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-5">
      <h1 className="font-soulmaze text-[9vw] md:text-[7vw] lg:text-[6vw] mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex flex-col items-center relative text-center">
        <span className="relative">
          PRÊTS POUR
          <img src="src/assets/Vector 111.svg" alt="" className="absolute top-[3.5vw] left-[6vw] w-[7vw] md:top-[2.5vw] md:left-[5vw] md:w-[6vw] lg:top-[2vw] lg:left-[4vw] lg:w-[5vw] h-auto z-10" />
          <img src="src/assets/Vector 112.svg" alt="" className="absolute top-[3.5vw] right-[21.5vw] w-[7vw] md:top-[2.5vw] md:right-[16.5vw] md:w-[6vw] lg:top-[2vw] lg:right-[14vw] lg:w-[5vw] h-auto z-10" />
        </span>
        <span className="relative -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-8">
          UN PLAN À 3
          <img src="src/assets/Vector 114.svg" alt="" className="absolute top-[3.5vw] left-[30vw] w-[7vw] md:top-[2.5vw] md:left-[23vw] md:w-[6vw] lg:top-[2vw] lg:left-[20vw] lg:w-[5vw] h-auto z-10" />
          <img src="src/assets/Vector 113.svg" alt="" className="absolute top-[3vw] right-[0vw] w-[5vw] md:top-[2vw] md:w-[4.5vw] lg:w-[3.5vw] h-auto z-10" />
        </span>
      </h1>
      <img 
        src="src/assets/ponctuation-removebg-preview.png" 
        alt="Ponctu" 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[16vw] sm:h-[18vw] md:h-[15vw] lg:h-[13vw] mt-4 xl:mt-6 sm:-mr-2 md:mr-16 lg:mr-36 xl:mr-24 2xl:-mr-20 3xl:-mr-80" 
      />
    </div>
    <h2 className="font-standrock text-[3vw] md:text-[2vw] font-semibold self-end pr-[4.5rem] sm:pr-[6.5rem] md:pr-[11rem] lg:pr-[17rem] xl:pr-[18rem] 2xl:pr-[9rem] 3xl:pr-[1rem] -mt-5 md:-mt-6 lg:-mt-10 3xl:-mt-14 [word-spacing:0.2em]">
      VOUS NOUS ET LE SUCCÈS
    </h2>
  </header>
);

export default Header;