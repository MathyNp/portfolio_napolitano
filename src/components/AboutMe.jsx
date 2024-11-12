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

const AboutMe = () => {
  return (
    <>
      <div
        className=" font-Kanit max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center text-left my-32  "
        id="aboutMe"
      >
        {/*  sadasdasd  */}

        <div className=" max-w-full">
          <div className=" text-gray-300 font-light text-lg ">
            <div>
              <h1 className="font-Kanit text-slate-200 opacity-55 font-semibold text-4xl text-left mb-6 ">
                Sobre Mi
              </h1>
            </div>
            <div className="flex flex-wrap  gap-3 lg:justify-center ">
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <RxPerson />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Nombre</div>
                    <div className="font-Kanit text-sm">Matias Napolitano</div>
                  </div>
                </div>
              </div>
              {/* DSFSDF */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <CiCalendarDate />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Edad</div>
                    <div className="font-Kanit text-sm">24</div>
                  </div>
                </div>
              </div>
              {/* SADASDAS */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <IoIosPhonePortrait />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Telefono</div>
                    <div className="font-Kanit text-sm">+543415719541</div>
                  </div>
                </div>
              </div>
              {/* dsadfas  */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <MdOutlineAlternateEmail />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-Kanit text-sm">
                      matiasenapolitano@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <LiaCitySolid />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Domicilio</div>
                    <div className="font-Kanit text-sm">
                      Dr. Nicolas Herrera 1839
                    </div>
                  </div>
                </div>
              </div>
              {/*  sdaasda*/}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <GiWorld />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Nacionalidad</div>
                    <div className="font-Kanit text-sm">Argentina</div>
                  </div>
                </div>
              </div>
              {/* dasdas */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <IoSchoolOutline />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Estudios</div>
                    <div className="font-Kanit text-sm">
                      Universidad Tecnológica Nacional
                    </div>
                  </div>
                </div>
              </div>
              {/* fasfasf */}
              <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                  <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                    <RiKakaoTalkLine />
                  </div>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="text-sm text-gray-500">Idioma</div>
                    <div className="font-Kanit text-sm">Español</div>
                  </div>
                </div>
              </div>
              {/*  */}

              <a href="https://github.com/MathyNp" target="blank">
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                      <VscGithub />
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm text-gray-500">GitHub</div>
                      <div className="font-Kanit text-sm">\mathynp</div>
                    </div>
                  </div>
                </div>
              </a>
              {/*  */}
              <a
                href="https://www.linkedin.com/in/matias-napolitano-8a0a5a2bb/"
                target="blank"
              >
                <div className="col-span-12 sm:col-span-6 md:col-span-3">
                  <div className="flex flex-row bg-black rounded p-4 hover:translate-y-1 ">
                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12  ">
                      <TbBrandLinkedin />
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                      <div className="text-sm text-gray-500">Linkedin</div>
                      <div className="font-Kanit text-sm">
                        \matias-napolitano
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
