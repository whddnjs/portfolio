function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-indigo-100 navbar">
      <div className="w-[70%] justify-between items-center h-full flex relative left-[15%]">
        <div>
          <a href="#home">Home</a>
        </div>
        <ul className="flex w-[25%] justify-between">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
