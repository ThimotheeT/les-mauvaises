import React from 'react';
import Header from './components/Header';
import Phrases from './components/Phrases';
import GameArea from './components/GameArea';

const App = () => {
  return (
    <div className="bg-custom-yellow min-h-screen flex justify-center items-center text-custom-dark overflow-x-hidden">
      <div className="container flex flex-col w-full max-w-6xl h-auto p-2 sm:p-3 md:p-4 lg:p-5 box-border">
        <Header />
        <Phrases />
        <GameArea />
      </div>
    </div>
  );
};

export default App;