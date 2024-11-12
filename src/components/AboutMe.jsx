import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { RxPerson } from "react-icons/rx";
import { LiaCitySolid } from "react-icons/lia";
import { GiWorld } from "react-icons/gi";
import { IoSchoolOutline } from "react-icons/io5";
import { RiKakaoTalkLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { PiCity } from "react-icons/pi";

const AboutMe = () => {
  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  text-left  mt-20  ">
        <div className="max-w-full " id="aboutMe">
          <div className="text-gray-300 font-light text-lg">
            <div>
              <p className="text-gray-300 ml-1 text-3xl  font-extralight mb-6">
                <span className="text-3xl text-white font-Kanit font-semibold">
                  SOBRE MI |
                </span>{" "}
                DATOS PERSONALES{" "}
              </p>
            </div>
            {/* fsdfsd */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 ">
              <div className="flex flex-row ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <RxPerson />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Nombre</div>
                  <div className="font-Kanit text-sm">Matias Napolitano</div>
                </div>
              </div>

              <div className="flex flex-row   ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <CiCalendarDate />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Edad</div>
                  <div className="font-Kanit text-sm">24</div>
                </div>
              </div>

              <div className="flex flex-row    ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <IoIosPhonePortrait />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Telefono</div>
                  <div className="font-Kanit text-sm">+543415719541</div>
                </div>
              </div>

              <div className="flex flex-row    ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <MdOutlineAlternateEmail />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-Kanit text-sm">
                    matiasenapolitano@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex flex-row    ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <LiaCitySolid />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Domicilio</div>
                  <div className="font-Kanit text-sm">
                    Dr. Nicolas Herrera 1839
                  </div>
                </div>
              </div>

              <div className="flex flex-row    ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <PiCity />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Ciudad</div>
                  <div className="font-Kanit text-sm">Rosario, Sta Fe.</div>
                </div>
              </div>

              <div className="flex flex-row   ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <GiWorld />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Nacionalidad</div>
                  <div className="font-Kanit text-sm">Argentina</div>
                </div>
              </div>

              <div className="flex flex-row    ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <IoSchoolOutline />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Estudios</div>
                  <div className="font-Kanit text-sm">
                    Universidad Tecnológica Nacional
                  </div>
                </div>
              </div>

              <div className="flex flex-row   ">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                  <RiKakaoTalkLine />
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Idioma</div>
                  <div className="font-Kanit text-sm">Español</div>
                </div>
              </div>

              <a
                href="https://github.com/MathyNp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row    ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                    <VscGithub />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">GitHub</div>
                    <div className="font-Kanit text-sm">\mathynp</div>
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/matias-napolitano-8a0a5a2bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex flex-row    ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12">
                    <TbBrandLinkedin />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Linkedin</div>
                    <div className="font-Kanit text-sm">\matias-napolitano</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
