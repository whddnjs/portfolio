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
    <div id="skills" className="w-full p-10 bg-[#00adb5]/50">
      <h1 className="mb-10 text-5xl text-center font-nanum-eb">SKILLS</h1>
      <div className="w-full h-[50vh] justify-center items-center flex">
        <div className="w-[70%] h-full flex flex-col justify-between">
          <div className="flex flex-col w-full bg-white h-[48%] rounded-xl">
            <h1 className="pl-4 py-2 text-2xl font-nanum-eb text-[#00adb5]/80">
              Front-end
            </h1>
            <div className="flex w-full h-[80%] ml-4">
              <img src={hcj} className="h-[90%]" />
              <img src={react} className="h-[75%] mt-3 ml-4" />
              <div className="mt-3 ml-8">
                <img src={recoil} className="h-[45%] ml-4 mb-3" />
                <img src={tailwind} className="h-[25%]" />
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between items-center h-[48%]">
            <div className="w-[50%] h-full bg-white rounded-xl">
              <h1 className="pl-4 pt-2 text-2xl font-nanum-eb text-[#00adb5]/80">
                Back-end
              </h1>
              <div className="flex w-full h-[80%] ml-4 relative bottom-4">
                <img src={java} className="h-[125%]" />
                <img src={orecle} className="h-[140%]" />
              </div>
            </div>
            <div className="w-[25%] h-full bg-white rounded-xl">
              <h1 className="pl-3 pt-2 text-2xl font-nanum-eb text-[#00adb5]/80">
                Version Control
              </h1>
              <div className="w-full h-[80%]">
                <img src={git} className="h-[35%] mt-4 ml-2" />
                <img src={github} className="relative bottom-4 h-[70%] ml-2" />
              </div>
            </div>
            <div className="w-[20%] h-full bg-white rounded-xl">
              <h1 className="pl-3 pt-2 text-2xl font-nanum-eb text-[#00adb5]/80">
                Certificate
              </h1>
              <p className="p-2 text-xl font-nanum-eb">· SQLD(개발자)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
