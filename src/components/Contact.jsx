import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineSend } from "react-icons/ai";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8qvr2ga", "template_gnb3h7c", form.current, {
        publicKey: "qZIqGNpfGy6bsFvmh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex mt-20 flex-col text-left  
    "
    >
      <p className="text-gray-300 ml-1 text-3xl font-extralight">
        <span
          className="text-3xl text-white font-Kanit font-semibold"
          id="contact"
        >
          CONTACTO |
        </span>{" "}
        ENVIAR CORREO{" "}
      </p>

      <div className=" flex flex-row justify-between gap-3 mt-3">
        <form ref={form} onSubmit={sendEmail} className="sm:w-1/2 w-full ">
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-white font-semibold mb-2"
            ></label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="w-full px-4 py-2 border rounded-md"
              required
              placeholder="Nombre"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-white font-semibold mb-2"
            ></label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="w-full px-4 py-2 border rounded-md"
              required
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            ></label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md"
              required
              placeholder="Mensaje"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit">
              <AiOutlineSend className="w-5 h-5 me-2 -ms-1" />
              Enviar mensaje
            </button>
          </div>
        </form>
        <div className="w-1/2 flex md:block hidden ">
          <p className="text-gray-300 font-extralight font-Kanit text-lg text-justify p-2 ">
            Estoy en busca de mi primera oportunidad en el mundo profesional del
            desarrollo frontend. Si estás buscando a alguien con motivación y
            una sólida base en HTML, CSS, JavaScript y React, me encantaría
            conversar con vos. No dudes en contactarme a través de{" "}
            <a
              href="https://www.linkedin.com/in/matias-napolitano-8a0a5a2bb/"
              className=" font-normal"
              target="blank"
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
            o enviarme un mensaje directo. ¡Estoy listo para comenzar mi carrera
            y aportar al equipo!
          </p>
        </div>
      </div>
    </div>
  );
};
