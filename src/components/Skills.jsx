const Skills = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  text-left   mt-5 ">
      <div className="flex flex-col  ">
        <p className="text-gray-300 ml-1 text-3xl  font-extralight ">
          <span className="text-3xl text-white font-Kanit font-semibold">
            TECNOLOGÍAS |
          </span>{" "}
          LENGUAJES Y HERRAMIENTAS{" "}
        </p>
        <div className="flex flex-wrap mt-3  gap-3 text-white">
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            REACT{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            HTML{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            CSS{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            JAVASCRIPT{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            TAILWIND{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            GIT{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            VITE{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
