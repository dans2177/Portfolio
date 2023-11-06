import React from "react";

function Header() {
  return (
    <header className="bg-orange-900 text-amber-100 text-center p-4 mt-12">
      <div className="h-auto border-solid border-4 rounded">
        <div className="flex-col justify-start p-4 m-4">
        <h1 className="animate-slide-top text-2xl font-bold text-left font-agbalumo md:text-3xl lg:text-4xl">Hello! My name is</h1> 
        <h1 className="animate-slide-left font-bold text-left font-pixelify text-7xl md:text-8xl lg:text-9xl">Daniel Shemon</h1>
        </div>
        <div className="flex align-middle justify-center pb-6">
        <img src="./Banner.png" alt="People sitting on a fountain with computers" className="w-11/12 lg:w-7/12 md:w-10/12 sm:w-11/12"/>
        </div>
      </div>
    </header>
  );
}

export default Header;
