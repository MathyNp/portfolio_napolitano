import { useState } from "react";
import "../cssComponents/proyect.css";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import { VscGithubAlt } from "react-icons/vsc";

const Proyects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 items-center  min-h-screen p-20 ">
        <div className="flex flex-col ml-1 gap-10 " id="proyects">
          <div className="flex justify-between">
            <div className="md:flex items-center gap-10 ">
              <a href="https://github.com/MathyNp" target="blank">
                <VscGithubAlt className="iconSocialMedia " />
              </a>
              <span className="text-2xl font-Quantico text-white  ">
                Bolsa de Trabajo Universitaria
              </span>

              <ul className="flex gap-3  text-gray-300 mt-10 md:mt-0">
                <li className="itemT"> React</li>
                <li className="itemT"> Tailwind</li>
              </ul>
            </div>
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

            {isOpen && (
              <button
                className="seeMore hidden md:flex "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Cerrar detalles <FaCaretUp className=" text-2xl" />
              </button>
            )}
          </div>
          <div className="proyect gap-2">
            <p className="text-gray-300 font-extralight text-lg">
              Como parte de mi proyecto final en la carrera de Tecnicatura
              Universitaria en Programación, participé en un equipo que
              desarrolló una nueva versión de la{" "}
              <span className="font-medium text-gray-100">
                Bolsa de Trabajo
              </span>{" "}
              de la Universidad Tecnológica Nacional de Rosario. Este proyecto
              fue una oportunidad para aplicar y consolidar mis conocimientos en{" "}
              <span className="font-medium text-gray-100">React</span>,{" "}
              <span className="font-medium text-gray-100">Vite</span>,{" "}
              <span className="font-medium text-gray-100">Tailwind</span>,{" "}
              <span className="font-medium text-gray-100">.NET 6</span>,{" "}
              <span className="font-medium text-gray-100">SQLite</span>, y{" "}
              <span className="font-medium text-gray-100">JWT</span>, así como
              en metodologías ágiles como{" "}
              <span className="font-medium text-gray-100">Scrum</span>.
              {!isOpen && (
                <button
                  className="seeMore md:hidden mt-5"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Ver detalles <FaCaretDown className=" text-2xl" />
                </button>
              )}
            </p>
            <br />

            {isOpen && (
              <div>
                <p className="text-gray-300 font-extralight text-lg">
                  En la fase de desarrollo, colaboré con mis compañeros en la
                  construcción del frontend, utilizando{" "}
                  <span className="font-medium text-gray-100">React</span>,{" "}
                  <span className="font-medium text-gray-100">Vite</span>, y{" "}
                  <span className="font-medium text-gray-100">Tailwind</span>{" "}
                  para diseñar una interfaz intuitiva y responsiva.
                  Implementamos funcionalidades clave que permiten a los
                  usuarios registrarse como alumnos o empresas y, según el tipo
                  de usuario, postularse a ofertas laborales o crear nuevas
                  ofertas.
                </p>
                <br />
                <p className="text-gray-300 font-extralight text-lg">
                  Para la gestión eficiente del proyecto, adoptamos{" "}
                  <span className="font-medium text-gray-100">Scrum</span> como
                  metodología ágil, utilizando{" "}
                  <span className="font-medium text-gray-100">Trello</span> para
                  el seguimiento de tareas y la colaboración en equipo. Además
                  de mi trabajo en el frontend, participé activamente en el
                  desarrollo del backend, empleando{" "}
                  <span className="font-medium text-gray-100">.NET 6</span>,{" "}
                  <span className="font-medium text-gray-100">SQLite</span>, y{" "}
                  <span className="font-medium text-gray-100">JWT</span> para
                  garantizar la seguridad y eficiencia del sistema.
                </p>
                <br />
                <p className="text-gray-300 font-extralight text-lg">
                  Este proyecto no solo me permitió aplicar tecnologías
                  modernas, sino también trabajar en un entorno profesional,
                  enfrentando desafíos reales y colaborando en equipo para
                  alcanzar nuestros objetivos comunes.
                </p>

                <div className="flex w-full gap-4 mt-5">
                  <img
                    src="../assets/utn_bolsaDeTrabajo.webp"
                    className=" imageP "
                  ></img>
                  <img
                    src="../assets/utn_bolsaDeTrabajo2.webp"
                    className=" imageP"
                  ></img>
                  <img
                    src="../assets/utn_bolsaDeTrabajo3.webp"
                    className=" imageP"
                  ></img>
                </div>

                <button
                  className="seeMore md:hidden mt-5"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Cerrar detalles <FaCaretUp className=" text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col ml-1 gap-10 ">
          <div className="flex justify-between">
            <div className="md:flex items-center gap-10 ">
              <span className="text-2xl font-Quantico text-white ">
                Bolsa de Trabajo Universitaria
              </span>
              <ul className="flex gap-3  text-gray-300 mt-10 md:mt-0">
                <li className="itemT"> React</li>
                <li className="itemT"> Tailwind</li>
              </ul>
            </div>
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

            {isOpen && (
              <button
                className="seeMore hidden md:flex "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Cerrar detalles <FaCaretUp className=" text-2xl" />
              </button>
            )}
          </div>
          <div className="proyect gap-2">
            <p className="text-gray-300 font-extralight text-lg">
              Como parte de mi proyecto final en la carrera de Tecnicatura
              Universitaria en Programación, participé en un equipo que
              desarrolló una nueva versión de la{" "}
              <span className="font-medium text-gray-100">
                Bolsa de Trabajo
              </span>{" "}
              de la Universidad Tecnológica Nacional de Rosario. Este proyecto
              fue una oportunidad para aplicar y consolidar mis conocimientos en{" "}
              <span className="font-medium text-gray-100">React</span>,{" "}
              <span className="font-medium text-gray-100">Vite</span>,{" "}
              <span className="font-medium text-gray-100">Tailwind</span>,{" "}
              <span className="font-medium text-gray-100">.NET 6</span>,{" "}
              <span className="font-medium text-gray-100">SQLite</span>, y{" "}
              <span className="font-medium text-gray-100">JWT</span>, así como
              en metodologías ágiles como{" "}
              <span className="font-medium text-gray-100">Scrum</span>.
              {!isOpen && (
                <button
                  className="seeMore md:hidden mt-5"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Ver detalles <FaCaretDown className=" text-2xl" />
                </button>
              )}
            </p>
            <br />

            {isOpen && (
              <div>
                <p className="text-gray-300 font-extralight text-lg">
                  En la fase de desarrollo, colaboré con mis compañeros en la
                  construcción del frontend, utilizando{" "}
                  <span className="font-medium text-gray-100">React</span>,{" "}
                  <span className="font-medium text-gray-100">Vite</span>, y{" "}
                  <span className="font-medium text-gray-100">Tailwind</span>{" "}
                  para diseñar una interfaz intuitiva y responsiva.
                  Implementamos funcionalidades clave que permiten a los
                  usuarios registrarse como alumnos o empresas y, según el tipo
                  de usuario, postularse a ofertas laborales o crear nuevas
                  ofertas.
                </p>
                <br />
                <p className="text-gray-300 font-extralight text-lg">
                  Para la gestión eficiente del proyecto, adoptamos{" "}
                  <span className="font-medium text-gray-100">Scrum</span> como
                  metodología ágil, utilizando{" "}
                  <span className="font-medium text-gray-100">Trello</span> para
                  el seguimiento de tareas y la colaboración en equipo. Además
                  de mi trabajo en el frontend, participé activamente en el
                  desarrollo del backend, empleando{" "}
                  <span className="font-medium text-gray-100">.NET 6</span>,{" "}
                  <span className="font-medium text-gray-100">SQLite</span>, y{" "}
                  <span className="font-medium text-gray-100">JWT</span> para
                  garantizar la seguridad y eficiencia del sistema.
                </p>
                <br />
                <p className="text-gray-300 font-extralight text-lg">
                  Este proyecto no solo me permitió aplicar tecnologías
                  modernas, sino también trabajar en un entorno profesional,
                  enfrentando desafíos reales y colaborando en equipo para
                  alcanzar nuestros objetivos comunes.
                </p>

                <div className="flex w-full gap-4 mt-5">
                  <img
                    src="../assets/utn_bolsaDeTrabajo.webp"
                    className=" imageP "
                  ></img>
                  <img
                    src="../assets/utn_bolsaDeTrabajo2.webp"
                    className=" imageP"
                  ></img>
                  <img
                    src="../assets/utn_bolsaDeTrabajo3.webp"
                    className=" imageP"
                  ></img>
                </div>

                <button
                  className="seeMore md:hidden mt-5"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Cerrar detalles <FaCaretUp className=" text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col ml-1 gap-10 ">
          <div className="flex justify-between">
            <div className="md:flex items-center gap-10 ">
              <span className="text-2xl font-Quantico text-white ">
                Bolsa de Trabajo Universitaria
              </span>
              <ul className="flex gap-3  text-gray-300 mt-10 md:mt-0">
                <li className="itemT"> React</li>
                <li className="itemT"> Tailwind</li>
              </ul>
            </div>
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

            {isOpen && (
              <button
                className="seeMore hidden md:flex "
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Cerrar detalles <FaCaretUp className=" text-2xl" />
              </button>
            )}
          </div>
          <div className="proyect gap-2">
            <p className="text-gray-300 font-extralight text-lg">
              Como parte de mi proyecto final en la carrera de Tecnicatura
              Universitaria en Programación, participé en un equipo que
              desarrolló una nueva versión de la{" "}
              <span className="font-medium text-gray-100">
                Bolsa de Trabajo
              </span>{" "}
              de la Universidad Tecnológica Nacional de Rosario. Este proyecto
              fue una oportunidad para aplicar y consolidar mis conocimientos en{" "}
              <span className="font-medium text-gray-100">React</span>,{" "}
              <span className="font-medium text-gray-100">Vite</span>,{" "}
              <span className="font-medium text-gray-100">Tailwind</span>,{" "}
              <span className="font-medium text-gray-100">.NET 6</span>,{" "}
              <span className="font-medium text-gray-100">SQLite</span>, y{" "}
              <span className="font-medium text-gray-100">JWT</span>, así como
              en metodologías ágiles como{" "}
              <span className="font-medium text-gray-100">Scrum</span>.
              {!isOpen && (
                <button
                  className="seeMore md:hidden mt-5"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Ver detalles <FaCaretDown className=" text-2xl" />
                </button>
              )}
            </p>
            <br />

            {isOpen && (
              <div>
                <p className="text-gray-300 font-extralight text-lg">
                  En la fase de desarrollo, colaboré con mis compañeros en la
                  construcción del frontend, utilizando{" "}
                  <span className="font-medium text-gray-100">React</span>,{" "}
                  <span className="font-medium text-gray-100">Vite</span>, y{" "}
                  <span className="font-medium text-gray-100">Tailwind</span>{" "}
                  para diseñar una interfaz intuitiva y responsiva.
                  Implementamos funcionalidades clave que permiten a los
                  usuarios registrarse como alumnos o empresas y, según el tipo
                  de usuario, postularse a ofertas laborales o crear nuevas
                  ofertas.
                </p>
                <br />
                <p className="text-gray-300 font-extralight text-lg">
                  Para la gestión eficiente del proyecto, adoptamos{" "}
                  <span className="font-medium text-gray-100">Scrum</span> como
                  metodología ágil, utilizando{" "}
                  <span className="font-medium text-gray-100">Trello</span> para
                  el seguimiento de tareas y la colaboración en equipo. Además
                  de mi trabajo en el frontend, participé activamente en el
                  desarrollo del backend, empleando{" "}
                  <span className="font-medium text-gray-100">.NET 6</span>,{" "}
                  <span className="font-medium text-gray-100">SQLite</span>, y{" "}
                  <span className="font-medium text-gray-100">JWT</span> para
                  garantizar la seguridad y eficiencia del sistema.
                </p>
                <br />
                <p className="text-gray-300 font-extralight text-lg">
                  Este proyecto no solo me permitió aplicar tecnologías
                  modernas, sino también trabajar en un entorno profesional,
                  enfrentando desafíos reales y colaborando en equipo para
                  alcanzar nuestros objetivos comunes.
                </p>

                <div className="flex w-full gap-4 mt-5">
                  <img
                    src="../assets/utn_bolsaDeTrabajo.webp"
                    className=" imageP "
                  ></img>
                  <img
                    src="../assets/utn_bolsaDeTrabajo2.webp"
                    className=" imageP"
                  ></img>
                  <img
                    src="../assets/utn_bolsaDeTrabajo3.webp"
                    className=" imageP"
                  ></img>
                </div>

                <button
                  className="seeMore md:hidden mt-5"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Cerrar detalles <FaCaretUp className=" text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Proyects;
