import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import game_main from '../../assets/images/game_main.jpeg';
import game_join from '../../assets/images/game_join.jpeg';
import game_login from '../../assets/images/game_login.jpeg';
import game_my from '../../assets/images/game_my.jpeg';
import game_game from '../../assets/images/game_game.jpeg';
import aegis1 from '../../assets/images/aegis1.jpeg';
import aegis2 from '../../assets/images/aegis2.jpeg';
import aegis3 from '../../assets/images/aegis3.jpeg';

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="projects" className="py-10 w-full bg-[#393e46]">
      <h1 className="text-5xl text-center text-white mb-7 font-nanum-eb">
        PROJECTS
      </h1>
      <div className="flex flex-col justify-around items-center h-[160vh]">
        <div className="bg-white w-[80%] h-[50%] rounded-2xl p-10 xl:w-[95%]">
          <h1 className="text-5xl text-center font-nanum-eb">Octopus Game</h1>
          <h1 className="my-4 text-lg text-center font-nanum-bold text-[#666]">
            2021.10 ~ 2021.11 (5인 팀 프로젝트)
          </h1>
          <div className="w-full h-[55vh] flex justify-around">
            <div className="bg-white h-full w-[60%] overflow-hidden">
              <Slider {...settings}>
                <div>
                  <img src={game_main} />
                </div>
                <div>
                  <img src={game_join} />
                </div>
                <div>
                  <img src={game_login} />
                </div>
                <div>
                  <img src={game_my} />
                </div>
                <div>
                  <img src={game_game} />
                </div>
              </Slider>
            </div>
            <div className="bg-white h-full w-[35%]">
              <span className="leading-7">
                국비학원 1차 팀 프로젝트때 만든 아두이노로 만든 게임패드를
                이용해 플레이 할 수 있는 플래시게임 웹사이트입니다. 당시
                인기였던 "오징어게임" 드라마를 패러디한 컨셉으로 만들었습니다.
                <br />
                <br />큰 스케일은 아니였지만 그동안 배웠던 자바와 오라클을
                프로젝트에 적용해보면서 다시 한번 복습 할 수 있었던
                프로젝트이며, HTML,CSS에 대해 많이 배울 수 있었습니다.
                <br />
                <br />
                처음 해본 팀 프로젝트라서 팀원들과 의사소통이 서툴러 주어진
                시간에 비해 다소 아쉬운 결과물이지만 팀 활동을 경험해보고
                팀워크의 중요성에 대해 생각하고 배울 수 있는 프로젝트였습니다.
              </span>
              <div className="my-5 border border-[#666]"></div>
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <div className="w-[25%]">✔ 주요 기능</div>
                  <div className="w-[70%] leading-7">
                    회원가입, 로그인, 게임플레이, 점수확인 및 등수확인
                  </div>
                </div>
                <div className="flex justify-between w-full my-3">
                  <div className="w-[25%]">✔ GitHub</div>
                  <div className="w-[70%]">
                    <a
                      target="_blank"
                      href="https://github.com/whddnjs/Octopus_game"
                      className="overflow-hidden text-blue-400 break-words hover:text-blue-600"
                    >
                      https://github.com/whddnjs/Octopus_game
                    </a>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-[25%]">✔ Front-end</div>
                  <div className="w-[70%]">HTML, CSS, JavaScript, jQuery</div>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <div className="w-[25%]">✔ Back-end</div>
                  <div className="w-[70%]">JAVA(JSP & Servlet), Oracle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[80%] h-[45%] rounded-2xl p-10 xl:w-[95%]">
          <h1 className="text-5xl text-center font-nanum-eb">AEGIS</h1>
          <h1 className="my-4 text-lg text-center font-nanum-bold text-[#666]">
            2021.11 ~ 2021.12 (5인 팀 프로젝트)
          </h1>
          <div className="w-full h-[55vh] flex justify-around ">
            <div className="bg-white h-full w-[60%] overflow-hidden">
              <Slider {...settings}>
                <div>
                  <img src={aegis1} />
                </div>
                <div>
                  <img src={aegis2} />
                </div>
                <div>
                  <img src={aegis3} />
                </div>
              </Slider>
            </div>
            <div className="bg-white h-full w-[35%]">
              <span className="leading-7">
                국비학원 2차 팀 프로젝트때 만든 작업장 통합 모니터링
                웹사이트입니다. 그중 React를 사용해 웹 프론트 파트를
                구현하였습니다.
                <br />
                <br />
                시간이 촉박해서 Redux보단 난이도가 낮은 Recoil 상태관리
                라이브러리를 배워 사용했고, Tailwindcss 라이브러리를 사용해
                디자인 했습니다.
                <br />
                <br />
                React와 Vanilla JS 기초를 많이 익히고, 검색하는 스킬, 혼자
                공부하는 방법을 배웠습니다.
              </span>
              <div className="my-5 border border-[#666]"></div>
              <div className="w-full">
                <div className="flex justify-between w-full">
                  <div className="w-[25%]">✔ 주요 기능</div>
                  <div className="w-[70%] leading-7">
                    작업장 인원 파악, 실시간 센서값 확인, 센서값 기준치 초과시
                    경고, 위험 작업장 출입시 경고, 게시판
                  </div>
                </div>
                <div className="flex justify-between w-full my-3">
                  <div className="w-[25%]">✔ GitHub</div>
                  <div className="w-[70%]">
                    <a
                      target="_blank"
                      href="https://github.com/whddnjs/Aegis"
                      className="overflow-hidden text-blue-400 break-words hover:text-blue-600"
                    >
                      https://github.com/whddnjs/Aegis
                    </a>
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <div className="w-[25%]">✔ Front-end</div>
                  <div className="w-[70%]">React, Recoil, Tailwindcss</div>
                </div>
                <div className="flex justify-between w-full mt-3">
                  <div className="w-[25%]">✔ Back-end</div>
                  <div className="w-[70%]">Nodejs, MySQL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
