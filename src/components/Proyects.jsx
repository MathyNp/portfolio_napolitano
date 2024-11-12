import "../cssComponents/proyect.css";
import { RiPagesLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import ProyectCard from "./ProyectCard";

const Proyects = () => {
  const skillsUTN = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "Tailwind",
    "Vite.js",
  ];
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   font-Kanit  ">
        <div className="flex flex-col ">
          <h1 className=" text-white font-semibold text-4xl  mb-6  ">
            Proyectos
          </h1>

          <form className="flex  max-w-md ">
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className=" text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2 "
                placeholder="Buscar en mis proyectos"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg "
            >
              <span className="sr-only">Buscar</span>
            </button>
          </form>
        </div>
        {/* PROYECTOS CONTAINER */}
        <div className="flex flex-wrap ">
          <ProyectCard
            name={"Bolsa de trabajo UTN"}
            desc={
              "Desarrollé en equipo una plataforma de bolsa de trabajo para la UTN Rosario como proyecto final de la Tecnicatura Universitaria en Programación. Usamos React, Vite y Tailwind para el frontend, y .NET 6 y SQLite en el backend. La aplicación permite a estudiantes y empresas registrarse, facilitando la creación de ofertas de trabajo y la postulación según el tipo de usuario. Utilizamos metodología Scrum y Trello para la organización del proyecto."
            }
            link={"https://github.com/salinasariel/final-proyect-frontend"}
            skills={skillsUTN}
          />
          <ProyectCard
            name={"Bolsa de trabajo UTN"}
            desc={
              "Desarrollé en equipo una plataforma de bolsa de trabajo para la UTN Rosario como proyecto final de la Tecnicatura Universitaria en Programación. Usamos React, Vite y Tailwind para el frontend, y .NET 6 y SQLite en el backend. La aplicación permite a estudiantes y empresas registrarse, facilitando la creación de ofertas de trabajo y la postulación según el tipo de usuario. Utilizamos metodología Scrum y Trello para la organización del proyecto."
            }
            link={"https://github.com/salinasariel/final-proyect-frontend"}
            skills={skillsUTN}
          />
          <ProyectCard
            name={"Bolsa de trabajo UTN"}
            desc={
              "Desarrollé en equipo una plataforma de bolsa de trabajo para la UTN Rosario como proyecto final de la Tecnicatura Universitaria en Programación. Usamos React, Vite y Tailwind para el frontend, y .NET 6 y SQLite en el backend. La aplicación permite a estudiantes y empresas registrarse, facilitando la creación de ofertas de trabajo y la postulación según el tipo de usuario. Utilizamos metodología Scrum y Trello para la organización del proyecto."
            }
            link={"https://github.com/salinasariel/final-proyect-frontend"}
            skills={skillsUTN}
          />
          <ProyectCard
            name={"Bolsa de trabajo UTN"}
            desc={
              "Desarrollé en equipo una plataforma de bolsa de trabajo para la UTN Rosario como proyecto final de la Tecnicatura Universitaria en Programación. Usamos React, Vite y Tailwind para el frontend, y .NET 6 y SQLite en el backend. La aplicación permite a estudiantes y empresas registrarse, facilitando la creación de ofertas de trabajo y la postulación según el tipo de usuario. Utilizamos metodología Scrum y Trello para la organización del proyecto."
            }
            link={"https://github.com/salinasariel/final-proyect-frontend"}
            skills={skillsUTN}
          />
          <ProyectCard
            name={"Bolsa de trabajo UTN"}
            desc={
              "Desarrollé en equipo una plataforma de bolsa de trabajo para la UTN Rosario como proyecto final de la Tecnicatura Universitaria en Programación. Usamos React, Vite y Tailwind para el frontend, y .NET 6 y SQLite en el backend. La aplicación permite a estudiantes y empresas registrarse, facilitando la creación de ofertas de trabajo y la postulación según el tipo de usuario. Utilizamos metodología Scrum y Trello para la organización del proyecto."
            }
            link={"https://github.com/salinasariel/final-proyect-frontend"}
            skills={skillsUTN}
          />
          <ProyectCard
            name={"Bolsa de trabajo UTN"}
            desc={
              "Desarrollé en equipo una plataforma de bolsa de trabajo para la UTN Rosario como proyecto final de la Tecnicatura Universitaria en Programación. Usamos React, Vite y Tailwind para el frontend, y .NET 6 y SQLite en el backend. La aplicación permite a estudiantes y empresas registrarse, facilitando la creación de ofertas de trabajo y la postulación según el tipo de usuario. Utilizamos metodología Scrum y Trello para la organización del proyecto."
            }
            link={"https://github.com/salinasariel/final-proyect-frontend"}
            skills={skillsUTN}
          />
        </div>
      </div>
    </>
  );
};

export default Proyects;
