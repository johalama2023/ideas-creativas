import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/modelos/tazas.png";
import Image2 from "../../assets/modelos/polo.png";
import Image3 from "../../assets/modelos/tomatodo.png";
import Button from "../Shared/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Diseños",
    title: "Personalizados",
    title2: "Tazas",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Estilo",
    title: "Unico",
    title2: "Polos",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Toma",
    title: "Cool",
    title2: "Tomatodos",
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute left-0 sm:-left-10 top-1/2 -translate-y-1/2 z-50 bg-primary/60 text-white p-3 rounded-full cursor-pointer hover:bg-primary transition-all animate-[bounceLeft_1.8s_ease-in-out_infinite]"
  >
    <FaChevronLeft size={20} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute right-0 sm:-right-10 top-1/2 -translate-y-1/2 z-50 bg-primary/60 text-white p-3 rounded-full cursor-pointer hover:bg-primary transition-all animate-[bounceRight_1.8s_ease-in-out_infinite]"
  >
    <FaChevronRight size={20} />
  </div>
);

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="slick-dots-custom">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-primary backdrop-blur-md rounded-full hover:bg-white/80 transition-all"></div>
    ),
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold leading-tight"
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-4xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold leading-tight"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Ver Mas..."
                        bgColor="bg-primary"
                        textColor="text-white"
                        handler={handleOrderPopup}
                      />
                    </div>
                  </div>

                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
