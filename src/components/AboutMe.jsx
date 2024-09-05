import { TbBrandReact } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandGit } from "react-icons/tb";
import { SiVisualstudiocode } from "react-icons/si";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import "../cssComponents/about.css";
import { useState } from "react";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center text-left min-h-screen p-20 "
        id="aboutMe"
      >
        <div className=" ml-1  mb-5 ">
          <span className="text-4xl text-white font-Quantico">Sobre mi</span>
        </div>

        <div className="flex justify-between">
          <div className="w-1/2 text-justify">
            <p className="text-gray-300 ml-1 text-lg font-extralight">
              Actualmente, estoy cursando mi última materia en la Tecnicatura
              Universitaria en Programación en la Universidad Tecnológica
              Nacional de Rosario. Mi formación académica y experiencia práctica
              me han brindado un fuerte dominio de las tecnologías FrontEnd,
              especialmente en{" "}
              <span className="text-white font-normal">HTML,</span>
              <span className="text-white font-normal"> CSS </span>,
              <span className="text-white font-normal"> JavaScript </span>,
              <span className="text-white font-normal"> React </span> y
              <span className="text-white font-normal"> Tailwind CSS </span>.
            </p>{" "}
            <br />
            <p className="text-gray-300 ml-1 text-lg font-extralight">
              Mi enfoque se centra en crear interfaces de usuario modernas,
              intuitivas y eficientes, siempre buscando mejorar la experiencia
              del usuario. <br />
              Utilizo{" "}
              <span className="text-white font-normal">
                Visual Studio Code{" "}
              </span>
              como mi editor de código de cabecera y
              <span className="text-white font-normal"> Git </span> para el
              control de versiones, garantizando un flujo de trabajo ordenado y
              colaborativo.
            </p>
            <br />
            <p className="text-gray-300 ml-1 text-lg font-extralight">
              Además, tengo experiencia en el trabajo en equipo, habiendo
              colaborado en proyectos utilizando metodologías ágiles como
              <span className="text-white font-normal"> Scrum </span> y
              herramientas de gestión como
              <span className="text-white font-normal"> Trello </span>, lo que
              me ha permitido desarrollar habilidades de comunicación y
              organización esenciales para el éxito en proyectos grupales.
            </p>
            <p className="text-gray-300 ml-1 text-lg font-extralight">
              Estoy ansioso por aplicar mis conocimientos y seguir aprendiendo
              en un entorno profesional, contribuyendo con mi creatividad y
              entusiasmo en el desarrollo de soluciones tecnológicas
              innovadoras.
            </p>
            {!isOpen && (
              <button
                className="seeMore hidden md:flex "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Ver detalles <FaCaretDown className=" text-2xl" />
              </button>
            )}
            <br />
          </div>
          <div className="flex gap-3 w-1/2 justify-center items-center">
            <TbBrandReact className="iconSkill" />
            <TbBrandTailwind className="iconSkill" />
            <TbBrandHtml5 className="iconSkill" />
            <TbBrandCss3 className="iconSkill" />
            <TbBrandJavascript className="iconSkill" />
            <TbBrandGit className="iconSkill" />
            <SiVisualstudiocode className="iconSkill" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
