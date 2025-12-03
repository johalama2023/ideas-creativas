import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import ModalPortal from "../ModalPortal/ModalPortal";

const MenuLinks = [
  { id: 1, name: "Inicio", link: "/#" },
  { id: 2, name: "Productos", link: "#product" },
  { id: 3, name: "Catalogo", link: "#catalog" },
  { id: 4, name: "Servicios", link: "#services" },
  { id: 5, name: "Contacto", link: "#contacto" },
];

const DropdownLinks = [
  { id: 1, name: "Tendencias", link: "#blog" },
  { id: 2, name: "Populares", link: "#catalog" },
  { id: 3, name: "Destacados", link: "#banner" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [open, setOpen] = useState(false);

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleOpenModal = () => {
    setOpen(false);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setOpenModal(false);
      setClosing(false);
    }, 300);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* MODAL CONTACTO */}
      {openModal && (
        <ModalPortal>
          <div
            className={`
      fixed inset-0 backdrop-blur-sm flex items-center justify-center z-[9999]
      bg-black/60
      ${closing ? "animate-fadeBgOut" : "animate-fadeBgIn"}
    `}
            onClick={handleCloseModal}
          >
            <div
              className={`
        bg-white dark:bg-gray-900 p-6 rounded-xl w-[90%] sm:w-[400px] shadow-xl
        ${closing ? "animate-modalOut" : "animate-modalIn"}
      `}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-3 text-center text-primary">
                Información de Contacto
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {/* Nombre */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 text-primary rounded-full">
                    <FaUser className="text-xl" />
                  </div>
                  <p>
                    <strong>John Harold Lanza Martínez</strong>
                  </p>
                </div>

                {/* Correo */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 text-primary rounded-full">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <p>johnlanza54@gmail.com</p>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 text-primary rounded-full">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <p>+51 919063494</p>
                </div>
              </div>

              <button
                onClick={handleCloseModal}
                className="mt-5 w-full py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </ModalPortal>
      )}

      {/* NAVBAR */}
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center">
              <img
                src="/logo04.png"
                alt="Logo"
                className="h-10 w-auto sm:h-12"
              />
            </a>

            {/* Desktop menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      onClick={
                        data.name === "Contacto" ? handleOpenModal : null
                      }
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 cursor-pointer"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                <li className="relative cursor-pointer group">
                  <a className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                    Extras
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  <div className="absolute hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white z-[9999]">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Buscar" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>

            <DarkMode />

            <button
              className="lg:hidden text-2xl text-gray-700 dark:text-gray-300"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl p-5 animate-slide-down z-[999]">
          <ul className="space-y-4 text-center">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a
                  onClick={
                    data.name === "Contacto"
                      ? handleOpenModal
                      : () => setOpen(false)
                  }
                  className="block font-semibold text-gray-600 dark:text-gray-300 hover:text-primary duration-200 cursor-pointer"
                >
                  {data.name}
                </a>
              </li>
            ))}

            <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
              {DropdownLinks.map((data) => (
                <a
                  key={data.id}
                  href={data.link}
                  className="block py-2 font-semibold text-gray-600 dark:text-gray-300 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {data.name}
                </a>
              ))}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
