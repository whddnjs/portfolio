function Header() {
  return (
    <header className="fixed top-0 right-20 w-[30%] h-[60px] bg-black/80 navbar text-white flex justify-around items-center text-xl rounded-b-3xl text-opacity-70">
      <div>
        <a className="hover:text-opacity-100 hover:text-white" href="#home">
          Home
        </a>
      </div>

      <div>
        <a className="hover:text-opacity-100 hover:text-white" href="#about">
          About Me
        </a>
      </div>
      <div>
        <a className="hover:text-opacity-100 hover:text-white" href="#skills">
          Skills
        </a>
      </div>
      <div>
        <a className="hover:text-opacity-100 hover:text-white" href="#projects">
          Projects
        </a>
      </div>
    </header>
  );
}

export default Header;
