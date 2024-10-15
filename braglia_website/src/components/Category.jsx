import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/2.png";
import Image3 from "../assets/images/3.png";
import Image4 from "../assets/images/4.png";

const category = {
  name: "Category",
  items: [
    {
      id: 1,
      name: "Turbine sh",
      image: Image1,
    },
    {
      id: 2,
      name: "Air-stop",
      image: Image2,
    },
    {
      id: 3,
      name: "art 60' clips",
      image: Image3,
    },
    {
      id: 4,
      name: "cvi 110",
      image: Image4,
    },
    {
      id: 1,
      name: "Turbine sh",
      image: Image1,
    },
    {
      id: 6,
      name: "Air-stop",
      image: Image2,
    },
    {
      id: 7,
      name: "art 60' clips",
      image: Image3,
    },
    {
      id: 8,
      name: "cvi 110",
      image: Image4,
    },
  ],
};

const Category = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Mostra 3 slide contemporaneamente
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
  };

  return (
    <section
      id="category"
      className="h-screen w-screen bg-white relative p-4 md:p-10 2xl:p-20"
    >
      <h2 className="text-primary md:text-6xl xl:text-8xl underline italic">
        {t("Categorie")}
      </h2>

      <div className="flex items-center justify-center md:py-32 md:px-20 xl:px-60">
        <Slider {...settings} className="w-full">
          {category.items.map((item) => (
            <div key={item.id} className="flex flex-col justify-center items-center md:p-5 xl:p-20">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover flex items-center justify-center md:w-[250px] md:h-[250px] xl:w-full xl:h-full"
              />
              <h3 className="text-2xl xl:text-4xl uppercase text-center mt-4 flex items-center justify-center">{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Category;