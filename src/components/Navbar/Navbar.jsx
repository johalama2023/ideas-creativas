import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCaretDown, FaCartShopping,  } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
  { id: 1, name: "Inicio", link: "/#" },
  { id: 2, name: "Productos", link: "#product" },
  { id: 3, name: "Catalogo", link: "#catalog" },
  { id: 4, name: "Servicios", link: "#services" },
];

const DropdownLinks = [
  { id: 1, name: "Tendencias", link: "#blog" },
  { id: 2, name: "Populares", link: "#catalog" },
  { id: 3, name: "Destacados", link: "#banner" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center">
              <img src="/logo04.png" alt="Logo" className="h-10 w-auto sm:h-12" />
            </a>

            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}

                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Extras
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
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

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Buscar" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
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

      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl p-5 animate-slide-down z-[999]">
          <ul className="space-y-4 text-center">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="block font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary duration-200"
                  onClick={() => setOpen(false)}
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
                  className="block py-2 font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary duration-200"
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
