import "../cssComponents/home.css";

import SocialMediaIcon from "./SocialMediaIcon";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col mt-10 items-center ">
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-7 text-left flex-1">
            <div className="flex flex-col gap-2">
              <h1 className="text-gray-300 ml-1 text-3xl font-extralight">
                <span className="text-3xl text-white font-Kanit font-semibold">
                  mn |
                </span>{" "}
                desarrollador_web
              </h1>
            </div>

            <p className="text-gray-300 text-justify font-extralight font-Kanit text-lg">
              ¡hola! mi nombre es{" "}
              <span className="font-normal text-white">matías napolitano</span>,
              pero mis amigos me dicen mathy. soy un programador{" "}
              <span className="font-normal text-white">front end</span> , nacido
              en rosario, argentina, con una sólida base en desarrollo web
              actualmente manejo tecnologías como{" "}
              <span className="font-normal text-white">
                html, css, js, react y tailwind
              </span>
              .
            </p>
            <SocialMediaIcon />
          </div>
          <div className="bg-blue-400 w-[40%] lg:block hidden"></div>
        </div>
        <div
          className="bg-white w-full h-[0.5px] bg-opacity-55 my-20"
          id="projects"
        ></div>
      </main>
    </>
  );
};

export default Home;
