import React from "react";
import { PiGithubLogoThin } from "react-icons/pi";

const ProyectCard = ({ name, desc, link, skills = [] }) => {
  return (
    <div className="w-full min-h-60 cardProyect flex flex-row p-4">
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center flex-row gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm inline-flex items-center"
          >
            <div className="text-sm rounded-md border p-2 text-white hover:scale-105">
              <PiGithubLogoThin />
            </div>
          </a>
          <h5 className="text-2xl font-extralight text-gray-300">{name}</h5>
        </div>

        <p className="text-gray-300 font-extralight text-sm text-justify">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="border text-xs font-extralight p-2 rounded-2xl hover:scale-105 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="max-h-60 bg-blue-300 rounded-lg ml-4 hidden md:block flex-1"></div>
    </div>
  );
};

export default ProyectCard;
