function Header() {
  return (
    <header className="text-center mt-6 p-10 pt-10 transform transition duration-500">
      <div className="overflow-auto h-[50vh] md:h-[85vh] border-solid border-4 justify-between border-orange-500 text-gray-800 dark:text-gray-300 rounded flex flex-col">
        <div className="flex-grow p-4 sm:m-4">
          <h1 className="animate-slide-top text-xl  font-bold text-left font-prata md:text-3xl lg:text-4xl">
            Hello World! My name is
          </h1>
          <h1 className="md:pt-4 animate-slide-left font-bold text-left font-pixelify text-6xl md:text-8xl lg:text-9xl">
            Daniel Shemon<span className="animate-blink">_</span>
          </h1>
        </div>
        <div className="text-right p-4 md:pl-10 text-md lg:text-2xl xl:text-4xl font-prata">
          Full Stack Developer located in Phoenix, AZ. <br /> With a passion for
          innovation, servant leadership, and learning.
        </div>
      </div>
    </header>
  );
}

export default Header;
