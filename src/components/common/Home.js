import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const content = '웹 개발자 김종원의 포트폴리오입니다.';
    const text = document.querySelector('.text');
    let i = 0;
    function typing() {
      if (i < content.length) {
        let txt = content.charAt(i);
        text.innerHTML += txt;
        i++;
      }
    }
    setInterval(typing, 200);
  });
  return (
    <div
      id="home"
      className="flex items-center justify-center h-screen bg-black"
    >
      <div className="text-white text-7xl font-nanum-bold text"></div>
      <div className="text-white animate-pulse1 text-8xl font-nanum-bold">
        |
      </div>
    </div>
  );
}

export default Home;
