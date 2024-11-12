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
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-Kanit"
      id="proyects"
    >
      <div className="flex flex-col">
        <h1 className="text-white font-semibold text-4xl mb-6">PROYECTOS</h1>

        <form className="flex max-w-md" onSubmit={handleSubmit}>
          <div className="relative w-full">
            <input
              onChange={(e) => filterResult(e.target.value)}
              type="search"
              className="text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Buscar por tecnología"
              value={inputValue}
              required
            />
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg"
            >
              <span className="sr-only">Buscar</span>
            </button>
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

      <div className="flex flex-wrap gap-2">
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
    </div>
  );
};

export default Proyects;
