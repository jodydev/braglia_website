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
  };

  return (
    <section
      id="categories"
      className="h-100 w-screen bg-white relative p-4 md:p-10 2xl:p-20"
    >
      <h2 className="text-primary md:text-6xl xl:text-8xl underline italic">
        {t("categories")}
      </h2>

      <div className="flex items-center justify-center md:py-32 lg:py-40 md:px-10 lg:px-20 xl:px-60">
        <Slider {...settings} className="w-full">
          {translatedCategories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center w-full h-full focus:outline-none cursor-pointer transition-transform duration-500"
            >
              <div className="relative overflow-hidden w-full h-[250px] lg:h-[300px] xl:h-[350px]">
                {" "}
                {/* Fixed height for consistency */}
                <img
                  src={item.image}
                  alt={item.name}
                  className=" drop-shadow-lg object-cover lg:ms-6 xl:ms-16 lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px] transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="title-animation text-xl md:text-2xl xl:text-3xl uppercase text-center lg:mt-4 xl:mt-10 flex items-center justify-center">
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
