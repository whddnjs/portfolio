import { BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

function About() {
  return (
    <div id="about" className="py-10 w-full h-[40vh] bg-[#eee]">
      <h1 className="text-5xl text-center mb-7 font-nanum-eb">About Me</h1>
      <div className="flex justify-center w-full">
        <h1 className="text-lg leading-8 ">
          ▪ 어려서부터 컴퓨터를 좋아해서 자연스레 프로그래밍에 관심이
          생겼습니다.
          <br />
          ▪ 새로운 것에 도전하고 배우는 것을 좋아합니다.
          <br />
          ▪ 꾸준함을 기르기 위해 1일 1커밋을 하고 있습니다.
          <br />▪ 프론트엔드뿐만 아니라 백엔드에도 관심이 있고 최종적으로는
          풀스택 개발자를 목표로 하고 있습니다.
        </h1>
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="w-[40%] justify-around flex">
          <div className="flex items-center justify-center">
            <BsFillTelephoneFill size="25" />
            <div className="ml-2 text-xl">010-6292-7950</div>
          </div>
          <div className="flex items-center justify-center">
            <MdEmail size="30" />
            <div className="ml-2 text-xl">kimjw7950@gmail.com</div>
          </div>
          <div className="flex items-center justify-center">
            <BsGithub size="30" />
            <div className="ml-2 text-xl text-blue-400 hover:text-blue-600">
              <a target="_blank" href="https://github.com/whddnjs">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
