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
      className="max-w-screen mx-auto p-6 bg-black bg-opacity-30 "
      id="contact"
    >
      <h1 className="font-Kanit text-white font-semibold text-4xl text-left mb-6 ">
        CONTACTO
      </h1>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-6 ">
        <div className="mb-4">
          <label
            for="user_name"
            className="block text-white font-semibold mb-2"
          ></label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full px-4 py-2 border  rounded-md "
            required
            placeholder="Nombre"
          />
        </div>

        <div className="mb-4">
          <label
            for="user_email"
            className="block text-white font-semibold mb-2"
          ></label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="w-full px-4 py-2 border  rounded-md "
            required
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label
            for="message"
            className="block text-white font-semibold mb-2"
          ></label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="w-full px-4 py-2 border  rounded-md "
            required
            placeholder="Mensaje"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 me-2 -ms-1"
            >
              <path
                fillRule="evenodd"
                d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                clipRule="evenodd"
              />
            </svg>
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};
