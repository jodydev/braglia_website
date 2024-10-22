import { useTranslation } from "react-i18next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import categoriesData from "../data/categoriesData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const { t } = useTranslation();

  const translatedCategories = categoriesData.map((category) => ({
    ...category,
    name: t(category.key),
  }));

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    draggable: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          <IoIosArrowDroprightCircle className="text-gray-200" size={60} />
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <IoIosArrowDroprightCircle className="text-gray-200" size={60} />
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 640, // Schermi piccoli (mobile)
        settings: {
          slidesToShow: 1, // Mostra un solo item per schermo
          slidesToScroll: 1,
          arrows: false, // Disabilita le frecce su mobile se necessario
        },
      },
      {
        breakpoint: 1024, // Schermi medi (tablet)
        settings: {
          slidesToShow: 2, // Mostra 2 item su tablet
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
<section
  id="categories"
  className="h-auto w-full bg-white relative py-10 px-5 sm:p-6 md:p-10 2xl:p-20"
>
  <h2 className="text-primary text-2xl sm:text-4xl md:text-6xl xl:text-8xl underline italic text-start">
    {t("categories")}
  </h2>

  <div className="flex flex-col items-center justify-center py-10 sm:py-20 md:py-32 lg:py-40 lg:px-20 xl:px-60">
    <Slider {...settings} className="w-full">
      {translatedCategories.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center w-full h-full focus:outline-none cursor-pointer transition-transform duration-500 sm:mx-6 md:mx-8"
        >
          <div className="relative overflow-hidden w-[300px] h-[300px] sm:h-[150px] md:h-[200px] lg:h-[300px] xl:h-[350px] mb-6 sm:mb-8 md:mb-10">
            <img
              src={item.image}
              alt={item.name}
              className="drop-shadow-lg object-cover ms-5 md:ms-0 w-[300px] h-[300px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px] transition-transform duration-500 hover:scale-105"
            />
          </div>
          <h3 className="title-animation text-2xl md:text-2xl xl:text-3xl uppercase text-center mt-2 sm:mt-4 md:mt-6 xl:mt-10 flex items-center justify-center">
            {item.name}
          </h3>
        </div>
      ))}
    </Slider>
  </div>
</section>


  );
};

export default Category;
