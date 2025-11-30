import React from "react";
import Heading from "../Shared/Heading";

// import images
import Img1 from "../../assets/modelos/img21.png";
import Img2 from "../../assets/modelos/img22.png";
import Img3 from "../../assets/modelos/img23.png";

const BlogData = [
  {
    title: "¿Qué industrias están usando la sublimación textil?",
    subtitle:
      "La industria deportiva se ha apoyado en la sublimación aproximadamente desde 1980, en esa década la tecnología de impresión estaba evolucionando, por lo que los equipos deportivos se interesaron en tener uniformes personalizados que les permitieran diferenciarse y que al mismo tiempo fueran duraderos y resistentes.",
    published: "Publicado en 18 agosto, 2025",
    image: Img1,
    aosDelay: "0",
  },
  {
    title: "La Fusión de Arte y Moda",
    subtitle:
      "La sublimación está desempeñando un papel crucial en la convergencia del arte y la moda. Los diseñadores están utilizando esta técnica para crear prendas que son auténticas obras de arte en movimiento. Desde vestidos hasta camisetas, la sublimación permite la reproducción de ilustraciones detalladas y colores vibrantes, lo que transforma la moda en una expresión artística.",
    published: "Publicado en 21 junio, 2025",
    image: Img2,
    aosDelay: "200",
  },
  {
    title: "Sublimación en Tres Dimensiones",
    subtitle:
      "Las tendencias de sublimación están en constante evolución, y estas son solo algunas de las emocionantes direcciones que está tomando esta técnica de impresión. Ya sea a través de diseños sutiles y elegantes, patrones geométricos modernos o la fusión de arte y moda, la sublimación ofrece infinitas posibilidades creativas. Al estar en sintonía con estas tendencias, los diseñadores y creadores pueden llevar sus ideas al siguiente nivel y transformarlas en obras maestras personalizadas. ¡Prepárate para sumergirte en el emocionante mundo de la sublimación!",
    published: "Publicado en 26 octubre, 2025",
    image: Img3,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12" id="blog">
      <div className="container">
        {/* Header section */}
        <Heading title="Nuevas Tendencias" subtitle={"Aca te contamos"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
