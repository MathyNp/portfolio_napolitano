import "../cssComponents/home.css";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";

const Home = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-center min-h-screen ">
        <div className="flex flex-col items-center text-center gap-5">
          <p className="text-gray-300 ml-1 text-4xl md:text-center font-extralight ">
            {" "}
            MN{" "}
            <span className="text-4xl text-white font-Quantico">
              Desarrollador Web
            </span>
          </p>
          <p className="text-gray-300 font-light text-lg">
            Soy Matías Napolitano, un programador junior front end de 24 años,
            nacido en Rosario, Santa Fe, Argentina. Desde muy pequeño, las
            computadoras han sido una parte fundamental de mi vida, lo que
            despertó en mí una pasión por la tecnología y me llevó a convertirme
            en programador.
          </p>
          <div className=" flex gap-2 ml-1 items-center">
            <a
              href="https://www.linkedin.com/in/matias-napolitano-8a0a5a2bb/"
              target="blank"
            >
              <RiLinkedinLine className="iconSocialMedia" />
            </a>
            <a href="https://github.com/MathyNp" target="blank">
              <VscGithubAlt className="iconSocialMedia " />
            </a>
            <a href="mailto:matiasenapolitano@gmail.com">
              <TfiEmail className="iconSocialMedia" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
