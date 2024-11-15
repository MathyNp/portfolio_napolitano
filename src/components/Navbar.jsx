import { useState } from "react";
import "../cssComponents/header.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <button>
        <a className="buttonLink hover:scale-90  " href="#">
          inicio
        </a>
      </button>

      <button>
        <a className="buttonLink hover:scale-90" href="#projects">
          proyectos
        </a>
      </button>

      <button>
        <a className="buttonLink hover:scale-90" href="#aboutMe">
          sobre_mi
        </a>
      </button>

      <button>
        <a className="buttonLink hover:scale-90" href="#contact">
          contacto
        </a>
      </button>
    </>
  );

  return (
    <>
      <nav className="  text-white font-extralight sticky top-0  w-full z-50  shadow-lg left-0">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 ">
            <div className="flex flex-row w-full justify-between">
              <div className="flex gap-4 hover:font-bold">
                <button>
                  <a className=" " href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 hover:scale-75"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                      />
                    </svg>
                  </a>
                </button>
              </div>

              <div className="hidden md:block ">
                <div className="flex ml-10 gap-6">{navLinks}</div>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="flex flex-col gap-2 md:hidden mb-5 items-end px-4 ">
            {navLinks}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
