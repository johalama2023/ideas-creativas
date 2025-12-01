import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Partners from "./components/Partners/Partners.jsx";

import textil from "./assets/modelos/img10.png";
import ceramica from "./assets/modelos/img11.png";

import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const BannerData = {
  discount: "Descuento por docena",
  title: "Diseños Textiles",
  date: "Toda Ocasión",
  image: textil,
  title2: "Estampados Creativos",
  title3: "Colección Exclusiva",
  title4:
    "Personalizamos tus prendas con diseños únicos, calidad premium y entrega rápida.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "Descuento por docena",
  title: "Cerámica Premium",
  date: "Toda Ocasión",
  image: ceramica,
  title2: "Diseños Artesanales",
  title3: "Edición Especial",
  title4:
    "Tazas y piezas personalizadas con acabado profesional y máxima durabilidad.",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [showButton, setShowButton] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
    const handleScroll = () => {
      if (window.scrollY > 300) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />

      {/* BOTÓN WHATSAPP - izquierda */}
      <a
        href="https://wa.me/51919063494?text=%E2%9C%A8%20Ideas%20Creativas%20%E2%9C%A8%0ATrabajo%20productos%20personalizados%20con%20logo%2C%20nombre%2C%20frase%20o%20dise%C3%B1o%20especial.%20Ideal%20para%20empresas%2C%20eventos%2C%20colegios%2C%20cumplea%C3%B1os%2C%20marcas%2C%20publicidad%20o%20regalos%20%C3%BAnicos.%0A%F0%9F%94%A5%20*PRODUCTOS%20DISPONIBLES*%0A%E2%9C%85%20Tazas%20cer%C3%A1micas%20%2F%20mugs%0A%E2%9C%85%20Termos%20personalizados%0A%E2%9C%85%20Tomatodos%20de%20diferentes%20modelos%0A%E2%9C%85%20Agendas%20corporativas%0A%E2%9C%85%20Llaveros%20en%20varios%20materiales%0A%E2%9C%85%20Art%C3%ADculos%20de%20escritorio%20(post%20it%2C%20lapiceros%2C%20entre%20otros)%0A%E2%9C%85%20Stickers%20%2F%20etiquetas%0A%E2%9C%85%20Trofeos%20y%20reconocimientos%0A%E2%9C%85%20Detalles%20creativos%20para%20toda%20ocasi%C3%B3n%0A%E2%9C%85%20Y%20otros%20art%C3%ADculos%20promocionales%20por%20pedido%0A%F0%9F%8E%A8%20*T%C3%89CNICAS%20DE%20GRABACI%C3%93N*%0A%F0%9F%93%8C%20DTF%20full%20color%0A%F0%9F%93%8C%20Sublimaci%C3%B3n%20en%20alta%20calidad%0APersonalizaci%C3%B3n%20con%20logo%2C%20nombre%20o%20dise%C3%B1o%20especial%0A%F0%9F%92%BC%20IDEAL%20PARA%0A%E2%AD%90%20Empresas%0A%E2%AD%90%20Activaciones%20%2F%20eventos%0A%E2%AD%90%20Regalos%20corporativos%0A%E2%AD%90%20Cumplea%C3%B1os%20y%20aniversarios%0A%E2%AD%90%20Promociones%20de%20marca%0A%E2%AD%90%20Souvenirs%20y%20kits%20personalizados%0A%0A😎Cu%C3%A9ntame%20qu%C3%A9%20quieres%20y%20lo%20hago%20realidad%20al%20toque%20😎"
        target="_blank"
        className="fixed bottom-6 left-6 sm:left-36 z-[60] w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <FaWhatsapp />
      </a>

      {/* BOTÓN SCROLL TOP - derecha */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 sm:right-36 z-50 w-14 h-14 border-4 border-primary/50 text-primary/50 bg-white/20 backdrop-blur-xl rounded-full shadow-2xl flex items-center justify-center text-3xl animate-bounce hover:scale-110 hover:bg-white/30 transition-all duration-300"
      >
        <FaArrowUpFromBracket />
      </button>
    </div>
  );
};

export default App;
