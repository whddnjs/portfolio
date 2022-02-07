import { useState } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

function Header() {
  const [toggle, setToggle] = useState(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  const offToggle = () => {
    setToggle(false);
  };

  return (
    <header
      className="fixed top-0 right-10 w-[35%] h-[55px] bg-black/70 text-white text-xl rounded-b-3xl text-opacity-70
      lg:w-[50%] sm:w-full sm:right-0 sm:bg-white sm:rounded-none z-10"
    >
      <ul
        className={`flex items-center justify-around h-full sm:w-full sm:translate-y-[55px] sm:flex-col sm:bg-white sm:text-black sm:h-[120px] ${
          toggle ? 'sm:flex' : 'sm:hidden'
        }`}
      >
        <li className="sm:hidden">
          <a className="hover:text-opacity-100 hover:text-white" href="#home">
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-opacity-100 hover:text-white sm:hover:text-black"
            href="#about"
            onClick={offToggle}
          >
            About Me
          </a>
        </li>
        <li>
          <a
            className="hover:text-opacity-100 hover:text-white sm:hover:text-black"
            href="#skills"
            onClick={offToggle}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="hover:text-opacity-100 hover:text-white sm:hover:text-black"
            href="#projects"
            onClick={offToggle}
          >
            Projects
          </a>
        </li>
      </ul>

      <a
        className="hidden sm:block sm:absolute sm:top-3 sm:left-3 sm:text-black sm:text-2xl sm:font-nanum-eb"
        href="#home"
      >
        Home
      </a>

      <button
        className="hidden sm:block sm:absolute sm:top-0 sm:right-0 sm:w-[55px] sm:h-[55px] sm:text-black"
        onClick={changeToggle}
      >
        {toggle ? <MdOutlineClose size="50" /> : <GoThreeBars size="50" />}
      </button>
    </header>
  );
}

export default Header;
