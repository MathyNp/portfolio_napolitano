import "../cssComponents/skills.css";

import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FiTrello } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { TbBrandVite } from "react-icons/tb";

const Skills = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-auto  font-Quantico  ">
      <div className="flex flex-col text-center ">
        <div className="lg:flex lg:justify-center flex-wrap flex justify-center">
          <div className="iconSkill" id="html">
            <TbBrandHtml5 />
            <p> HTML </p>
          </div>

          <div className="iconSkill" id="css">
            <TbBrandCss3 />
            <p> CSS </p>
          </div>

          <div className="iconSkill" id="js">
            <TbBrandJavascript />
            <p> JS </p>
          </div>

          <div className="iconSkill" id="react">
            <TbBrandReact />
            <p> REACT </p>
          </div>

          <div className="iconSkill" id="tailwind">
            <RiTailwindCssLine />
            <p> TAILWIND </p>
          </div>

          <div className="iconSkill" id="vitejs">
            <TbBrandVite />
            <p>VITEJS</p>
          </div>

          <div className="iconSkill" id="github">
            <VscGithub />
            <p>GITHUB</p>
          </div>

          <div className="iconSkill" id="trello">
            <FiTrello />
            <p>TRELLO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
