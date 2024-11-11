import "../cssComponents/home.css";
import "../cssComponents/skills.css";
import { FaFileDownload } from "react-icons/fa";

import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-center  min-h-screen ">
        <div className="flex flex-col items-center gap-3 py-5   mainHome">
          <p className="text-gray-300 ml-1 text-4xl md:text-center font-extralight ">
            {" "}
            MN{" "}
            <span className="text-4xl text-white font-Kanit font-semibold">
              desarrollador_web
            </span>
          </p>
          <p className="text-gray-300 font-extralight font-Kanit text-lg ">
            ¡Hola! Soy Matías Napolitano,{" "}
            <span className=" font-normal text-white">
              programador front end
            </span>{" "}
            de 24 años, nacido en Rosario, Argentina. Desde siempre me ha
            apasionado la tecnología, y decidí hacer de esta pasión mi carrera
            profesional.{" "}
            <span className="font-normal text-white">
              Cuento con una sólida formación en desarrollo web y conocimientos
              en HTML, CSS, JavaScript, React y Tailwind{" "}
            </span>
            , herramientas que utilizo para construir interfaces funcionales y
            estéticamente atractivas.
          </p>
          <Skills />

          {/* <div className=" flex gap-2 ml-1 items-center">
            <a
              href="https://www.linkedin.com/in/matias-napolitano-8a0a5a2bb/"
              target="blank"
            >
              <div className="iconSkillHome">
                <RiLinkedinBoxLine />
              </div>
            </a>

           
              <div className="iconSkillHome">
                <VscGithub />
              </div>
            </a>

            <a href="mailto:matiasenapolitano@gmail.com">
              <div className="iconSkillHome">
                <TbMailPlus />
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
