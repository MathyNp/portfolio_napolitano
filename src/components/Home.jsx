import "../cssComponents/home.css";
import "../cssComponents/skills.css";

import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center lg:text-center text-left  mt-36 ">
        <div className="flex flex-col items-center gap-3 py-16 ">
          <div className="flex">
            <p className="text-gray-300 ml-1 text-3xl md:text-center font-extralight ">
              <span className="text-3xl text-white font-Kanit font-semibold">
                MN |
              </span>{" "}
              DESARROLLADOR FRONTEND{" "}
            </p>
          </div>
          <div className="bg-white bg-opacity-50 w-[70%] h-[0.3px]"></div>
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
        </div>
      </div>
    </>
  );
};

export default Home;
