import React, { useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  { title: "Inicio", link: "/#" },
  { title: "Productos", link: "#product" },
  { title: "Catalogo", link: "#catalog" },
];

const DownLinks = [
  { id: 1, name: "Tendencias", link: "#blog" },
  { id: 2, name: "Populares", link: "#catalog" },
  { id: 3, name: "Destacados", link: "#banner" },
];

const Footer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenModal(false);
      setClosing(false);
    }, 300); // tiempo igual a la animación
  };

  return (
    <div className="dark:bg-gray-950 relative">
      {openModal && (
        <div
          className={`
      fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50
      ${closing ? "animate-fadeBgOut" : "animate-fadeBgIn"}
      bg-black/60
    `}
          onClick={handleClose}
        >
          <div
            className={`
        bg-white dark:bg-gray-900 p-6 rounded-xl w-[90%] sm:w-[400px] shadow-xl
        ${closing ? "animate-modalOut" : "animate-modalIn"}
      `}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-3 text-center text-primary">
              Acerca de mí
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
              Soy <strong>John Harold Lanza Martínez</strong> y me dedico a la
              <strong> sublimación profesional</strong>. Transformo ideas en
              productos personalizados como polos, tomatodos, tazas, gorras y
              artículos promocionales. Cada diseño es realizado con dedicación
              para asegurar colores vibrantes, acabados de calidad y resultados
              duraderos.
            </p>

            <button
              onClick={handleClose}
              className="mt-5 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5 place-items-center">
          <div className="py-8 px-4">
            <a
              href="#"
              className="flex items-center justify-center sm:justify-start"
            >
              <img
                src="/logo04.png"
                alt="Logo"
                className="h-20 w-auto sm:h-24"
              />
            </a>

            <p className="w-full text-xl sm:text-2xl font-semibold pt-3 text-[#28B3E8] drop-shadow-[0_0_10px_rgba(40,179,232,0.6)] tracking-wide text-center sm:text-justify">
              Convirtiendo tus ideas en diseños que hablan por ti
            </p>

            <p className="text-gray-500 mt-4">
              Hecho por John Harold Lanza Martínez
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full transition-all hover:bg-primary"
            >
              Acerca de mi
            </button>
          </div>

          {/* Enlaces */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Enlaces Importantes</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl font-bold mb-3">Extras</h1>
              <ul className="space-y-3">
                {DownLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold mb-3">Dirección</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Resid. San Pedro A-22 Sunampe, Chincha - Perú</p>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+51 919063494</p>
                </div>

                {/* <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
