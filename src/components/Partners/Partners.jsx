import React from "react";
import logo from "/logo04.png";
import wanted from "../../assets/modelos/img15.png";


const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center">
          <img src={logo} alt="brand" className="w-[120px]" />
          <img src={wanted} alt="brand" className="w-[120px]" />
          <img src={logo} alt="brand" className="w-[120px]" />
          <img src={wanted} alt="brand" className="w-[120px]" />
          <img src={logo} alt="brand" className="w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
