import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

// images import
import Img1 from "../../assets/modelos/img01.png";
import Img2 from "../../assets/modelos/img02.png";
import Img3 from "../../assets/modelos/img03.png";
import Img4 from "../../assets/modelos/img04.png";
import Img5 from "../../assets/modelos/img05.png";
import Img6 from "../../assets/modelos/img06.png";
import Img7 from "../../assets/modelos/img07.png";
import Img8 from "../../assets/modelos/img08.png";


const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Polos",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Rompecabezas",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Tomatodos",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Bolsas y Mochilas",
    price: "220",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "Tazas Mágicas",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Platos",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Retrato en Rocas",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img8,
    title: "Variedad de Productos",
    price: "220",
    aosDelay: "600",
  },
];
const Products = () => {
  return (
    <div id="product">
      <div className="container">
        {/* Header section */}
        <Heading title="Nuestros Productos" subtitle={"Recomendados"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};

export default Products;
