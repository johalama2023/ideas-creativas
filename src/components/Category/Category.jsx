import React from "react";
import Image1 from "../../assets/modelos/img16.png";
import Image2 from "../../assets/modelos/img17.png";
import Image3 from "../../assets/modelos/img18.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8" id="catalog">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Disfruta</p>
                {/* <p className="text-2xl font-semibold mb-[2px]">Con</p> */}
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Polos
                </p>
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  a tu Estilo
                </p>
                {/* <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                /> */}
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[180px] absolute left-1/2 top-1/2 -translate-x-6 -translate-y-36"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[#f15bb5] to-[#f15bb5]/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                {/* <p className="text-2xl font-semibold mb-[2px]">Con</p> */}
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Tazas
                </p>
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Personalizadas
                </p>
                {/* <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                /> */}
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[220px] absolute left-1/2 top-1/2 -translate-x-16 -translate-y-40"
            />
          </div>
          {/* third col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                {/* <p className="text-2xl font-semibold mb-[2px]">Con</p> */}
                 <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Variedad de
                </p>
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Productos
                </p>
                {/* <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                /> */}
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[180px] sm:w-[300px] absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-32 left-1/2 top-1/2 -translate-x-5 -translate-y-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
