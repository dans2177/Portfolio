function Header() {
  return (
    <header className="text-center mt-6 p-10 pt-14 md:pt-12 transform transition duration-500">
      <div className="o h-96 md:h-[85vh] bg-gray-200 dark:bg-gray-800 transform transition duration-500 border-solid border-4 justify-between border-orange-500 text-gray-800 dark:text-gray-300 rounded flex flex-col">
        <div className="flex-grow p-4 sm:m-4">
          <h1 className="animate-slide-top text-xl font-bold text-left font-prata md:text-3xl lg:text-4xl">
            Hello World! My name is
          </h1>
          <h1 className="md:pt-4 animate-slide-left font-bold text-left font-pixelify text-6xl md:text-8xl lg:text-9xl">
            Daniel Shemon<span className="animate-blink">_</span>
          </h1>
        </div>
        <p className="text-left text-black dark:text-white mt-20 sm:mt-0 p-4 md:pl-10 md:text-2xl xl:text-4xl font-prata leading-normal sm:leading-relaxed ">
          Full Stack Web Developer <br />
          Bachelors in Business Management (2025) <br />
          Certified ScrumMaster
        </p>
      </div>
    </header>
  );
}

export default Header;
