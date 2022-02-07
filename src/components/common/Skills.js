import hcj from '../../assets/images/hcj.png';
import react from '../../assets/images/react.png';
import recoil from '../../assets/images/recoil.svg';
import tailwind from '../../assets/images/tailwind.svg';
import java from '../../assets/images/java.png';
import orecle from '../../assets/images/oracle.png';
import git from '../../assets/images/git.png';
import github from '../../assets/images/github.png';

function Skills() {
  return (
    <div id="skills" className="w-full p-8 bg-[#00adb5]/50">
      <h1 className="mb-6 text-5xl text-center font-nanum-eb sm:text-4xl">
        SKILLS
      </h1>
      <div className="flex items-center justify-center w-full">
        <div className="flex w-[60%] flex-col lg:w-full sm:w-[90%]">
          <div className="flex flex-col w-full bg-white h-[25vh] rounded-xl p-3 mb-6 sm:h-full">
            <h1 className="text-2xl font-nanum-eb text-[#00adb5]/80">
              Front-end
            </h1>
            <div className="flex w-full h-[80%] my-3 sm:flex-col">
              <img src={hcj} className="h-[90%] sm:w-[70%]" />
              <img src={react} className="h-[75%] mt-3 ml-4 sm:w-[25%]" />
              <div className="mt-3 ml-6 sm:ml-0">
                <img src={recoil} className="h-[45%] ml-4 mb-4 sm:w-[60%]" />
                <img src={tailwind} className="h-[25%] sm:w-[80%]" />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-center h-[25vh] sm:flex-col sm:h-full">
            <div className="w-[45%] h-full bg-white rounded-xl p-3 sm:w-full">
              <h1 className=" text-2xl font-nanum-eb text-[#00adb5]/80">
                Back-end
              </h1>
              <div className="flex w-full h-[80%] ml-4 sm:flex-col sm:ml-0">
                <img src={java} className="h-[125%]" />
                <img src={orecle} className="h-[140%]" />
              </div>
            </div>
            <div className="w-[30%] h-full bg-white rounded-xl p-3 sm:w-full sm:my-6">
              <h1 className=" text-2xl font-nanum-eb text-[#00adb5]/80">
                Version Control
              </h1>
              <div className="w-full h-[90%]">
                <img src={git} className="h-[35%] mt-4 ml-2 sm:w-[70%]" />
                <img
                  src={github}
                  className="h-[70%] ml-2 sm:w-[90%] relative bottom-3"
                />
              </div>
            </div>
            <div className="w-[20%] h-full bg-white rounded-xl p-3 sm:w-full">
              <h1 className="text-2xl font-nanum-eb text-[#00adb5]/80">
                Certificate
              </h1>
              <p className="pt-1 text-lg font-nanum-eb">· SQLD(개발자)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
