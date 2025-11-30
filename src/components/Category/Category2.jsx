import React from "react";
import Image1 from "../../assets/modelos/img13.png";
import Image2 from "../../assets/modelos/img19.png";
import Image3 from "../../assets/modelos/img20.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[#8338ec]/90 to-[#8338ec] text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                {/* <p className="text-2xl font-semibold mb-[2px]">con</p> */}
                 <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Mouse Pad
                </p>
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Unicos
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
               className="w-[180px] sm:w-[320px] absolute left-1/2 top-1/2 -translate-x-6 -translate-y-36"
            />
          </div>
          {/* Second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[#6096ba]/90 to-[#6096ba]/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                {/* <p className="text-2xl font-semibold mb-[2px]">con</p> */}
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  lapiceros
                </p>
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Unicos
                </p>
                {/* <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                /> */}
              </div>
            </div>
            <img src={Image2} alt=""  className="w-[180px] sm:w-[180px] absolute left-1/2 top-1/2 -translate-x-5 -translate-y-10" />
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-[#fb5607] to-[#fb5607]/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Disfruta</p>
                {/* <p className="text-2xl font-semibold mb-[2px]">con</p> */}
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Todo lo que 
                </p>
                <p className="text-4xl xl:text-4xl font-bold opacity-60 mb-2">
                  Imagines
                </p>
                {/* <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                /> */}
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[300px] sm:w-[320px] absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-40 sm:translate-y-5 left-1/2 top-1/2 -translate-x-40 translate-y-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
