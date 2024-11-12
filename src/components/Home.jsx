import "../cssComponents/home.css";

import Skills from "./Skills";
import SocialMediaIcon from "./SocialMediaIcon";
import { FaFileDownload } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex    items-center min-h-screen">
        <div className=" flex flex-col gap-4">
          <div className="flex flex-col  gap-7 items-center justify-center text-center ">
            <div className=" flex flex-col gap-2 ">
              <p className="text-gray-300 ml-1 text-3xl  font-extralight ">
                <span className="text-3xl text-white font-Kanit font-semibold">
                  MN |
                </span>{" "}
                DESARROLLADOR FRONTEND{" "}
              </p>
              <div className="w-[100%] h-[0.5px] bg-white  opacity-40"></div>
            </div>

            <p className="text-gray-300 font-extralight font-Kanit text-lg  ">
              ¡Hola! Soy Matías Napolitano,{" "}
              <span className=" font-normal text-white">
                programador front end
              </span>{" "}
              de 24 años, nacido en Rosario, Argentina. Desde siempre me ha
              apasionado la tecnología, y decidí hacer de esta pasión mi carrera
              profesional.{" "}
              <span className="font-normal text-white">
                Cuento con una sólida formación en desarrollo web y
                conocimientos en HTML, CSS, JavaScript, React y Tailwind{" "}
              </span>
              , herramientas que utilizo para construir interfaces funcionales y
              estéticamente atractivas.
            </p>
            <SocialMediaIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
