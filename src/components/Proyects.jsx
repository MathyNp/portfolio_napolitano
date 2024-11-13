import "../cssComponents/proyect.css";
import { useState } from "react";
import ProyectCard from "./ProyectCard";
import { proyectosData } from "../data/dataProyects";

const Proyects = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredProyects, setFilteredProyects] = useState(proyectosData);

  const filterResult = (value) => {
    setInputValue(value);
    if (value === "") {
      setFilteredProyects(proyectosData);
    } else {
      const lowercasedValue = value.toLowerCase();
      const filtered = proyectosData.filter((proyect) =>
        proyect.skills.some((skill) =>
          skill.toLowerCase().includes(lowercasedValue)
        )
      );
      setFilteredProyects(filtered);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-Kanit "
      id="proyects"
    >
      <div className="flex flex-col items-center w-full">
        <p className="text-gray-300 ml-1 text-3xl font-extralight mb-6">
          mis_proyectos
        </p>

        <form className="flex max-w-md w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            <input
              onChange={(e) => filterResult(e.target.value)}
              type="search"
              className="text-white text-sm font-extralight border-[0.1px]  focus:border-[0.1px] focus:outline-none bg-black bg-opacity-25 rounded-lg block w-full p-2 placeholder-white"
              placeholder="Buscar por tecnología"
              value={inputValue}
              required
            />
          </div>
        </form>
      </div>

      {filteredProyects.length === 0 && (
        <p className="text-gray-300 font-extralight font-Kanit text-lg my-10 ">
          Por el momento, no he desarrollado proyectos utilizando la tecnología
          que ingresaste en la barra de búsqueda. Sin embargo, estoy trabajando
          para expandir mis conocimientos y habilidades en otras áreas.
        </p>
      )}

      <div className="flex flex-wrap gap-y-10  mt-8">
        {filteredProyects.map((proyect, index) => (
          <ProyectCard
            key={index}
            name={proyect.name}
            desc={proyect.desc}
            link={proyect.link}
            skills={proyect.skills}
          />
        ))}
      </div>
      <div
        className="bg-white w-full h-[0.5px] bg-opacity-55 my-20"
        id="aboutMe"
      ></div>
    </div>
  );
};

export default Proyects;
