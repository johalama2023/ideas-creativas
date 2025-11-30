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
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 
             border-4 border-primary text-primary 
             bg-transparent 
             rounded-full shadow-2xl flex items-center justify-center 
             text-3xl animate-bounce 
             hover:scale-110 transition-all duration-300"
      >
        <FaArrowUpFromBracket />
      </button>
    </div>
  );
};

export default App;
