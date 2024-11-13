const Skills = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left   mt-5 flex flex-col ">
      <p className="text-gray-300 ml-1 text-3xl  font-extralight ">
        <span className="text-3xl text-white font-Kanit font-semibold">
          TECNOLOGÍAS |
        </span>{" "}
        CONOCIMIENTOS
      </p>
      <div className="flex flex-col  ">
        <div className="flex flex-wrap mt-3  gap-3 text-white items-center justify-center text-center bg-red-400">
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            React{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            Html{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            Css{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            Javascript{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            Tailwind{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            Git{" "}
          </div>
          <div className="text-sm rounded-md border p-2 hover:scale-105">
            {" "}
            Vite{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
