function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-indigo-100 navbar">
      <div className="w-[70%] justify-between items-center h-full flex relative left-[15%]">
        <div>Home</div>
        <ul className="flex w-[25%] justify-between">
          <li>About Me</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
