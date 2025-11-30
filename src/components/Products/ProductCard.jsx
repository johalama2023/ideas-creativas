import React from "react";
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative h-[180px] w-[260px] overflow-hidden rounded-md">
              <img
                src={data.img}
                alt=""
                className="w-[95%] h-[95%] object-fit"
              />

              {/* hover button */}
              {/* <div className="hidden group-hover:flex absolute inset-0 group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div> */}
            </div>

            <div className="leading-7 mt-2">
              <h2 className="font-semibold text-center">{data.title}</h2>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
