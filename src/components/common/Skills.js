import hcj from '../../assets/images/hcj.png';
import react from '../../assets/images/logo512.png';
import recoil from '../../assets/images/recoil.svg';
import tailwind from '../../assets/images/tailwind.png';
import tailwind1 from '../../assets/images/tailwind.svg';
import java from '../../assets/images/java.png';
import orecle from '../../assets/images/oracle.png';
import git from '../../assets/images/git.PNG';

function Skills() {
  return (
    <div id="skills" className="w-full p-8 bg-[#00adb5]/50">
      <h1 className="text-5xl text-center mb-7 font-nanum-eb">SKILLS</h1>
      <div className="w-full h-[500px] justify-center items-center flex">
        <div className="w-[60%] h-full flex flex-col justify-between">
          <div className="flex w-full bg-white h-[48%]">
            <img src={hcj} className="h-[50%]" />
            <img src={react} className="h-[50%]" />
            <img src={recoil} className="h-[50%]" />
            <img src={tailwind1} className="w-[40%]" />
          </div>
          <div className="flex w-full h-[48%] bg-white">
            <img src={java} />
            <img src={orecle} />
            <img src={git} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
