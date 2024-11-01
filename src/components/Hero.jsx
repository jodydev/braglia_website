import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import Header from "./Header";
import BackgroundAnimation from "./BackgroundAnimation";
import Image from "../assets/images/hero/hero.png";

const Hero = () => {
  const { t } = useTranslation();
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); 

  return (
    <section
      id="hero"
      className="h-screen w-screen bg-secondary relative p-4 md:p-10 2xl:p-20"
    >
      <BackgroundAnimation />

      <div className="flex flex-col relative z-50 space-y-0">
        <Header />
        <main className="py-4 md:py-16 md:px-20 lg:px-24 lg:py-20 2xl:px-60 2xl:py-24 flex items-center justify-center lg:justify-start space-y-3">
          <img
            src={Image}
            alt="Hero Image"
            className="flex items-center justify-center w-4/5 h-1/2 sm:w-3/5 md:w-full lg:w-full xl:w-1/3 2xl:w-2/5 3xl:w-2/3"
          />
        </main>
      </div>

      <div className={`${isIOS ? "bottom-36 " : "bottom-44 "} w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/4 2xl:w-1/4 3xl:w-1/3 z-50 absolute sm:bottom-32 md:bottom-20 fh:bottom-52 right-11 sm:right-36 md:right-5 lg:right-10 2xl:right-20 3xl:bottom-32 flex justify-center items-center text-white`}>
        <div className="flex flex-col space-y-3 md:space-y-5 xl:space-y-8 w-full px-4 md:px-0">
          <Link
            to="/catalog"
            className="uppercase text-sm md:text-xl lg:text-2xl flex items-center w-full justify-center  md:ml-8 hidden-no-mobile flex-row border-2 border-white text-center py-2 md:py-3 px-4 md:px-10 lg:px-20 text-white hover:bg-white hover:text-primary hover:border-primary cursor-pointer transition-all duration-700 ease-in-out"
          >
            {t("catalog")}
            <FaPlus className="text-base md:text-xl ml-2 md:ml-4" />
          </Link>

          <Link
            to="/company"
            className="uppercase text-sm md:text-xl lg:text-2xl flex items-center w-full justify-center flex-row border-2 border-white text-center py-2 md:py-3 px-4 md:px-10 lg:px-20 text-white hover:bg-white hover:text-primary hover:border-primary cursor-pointer transition-all duration-700 ease-in-out"
          >
            {t("company")}
          </Link>

          <Link
            to="/contacts"
            className="uppercase text-sm md:text-xl lg:text-2xl flex items-center w-full justify-center flex-row border-2 border-white text-center py-2 md:py-3 px-4 md:px-10 lg:px-20 text-white hover:bg-white hover:text-primary hover:border-primary cursor-pointer transition-all duration-700 ease-in-out"
          >
            {t("contacts")}
          </Link>
        </div>
      </div>

      <div className="w-full absolute bottom-10 md:bottom-0 lg:bottom-0 left-0 right-0 flex justify-center items-center p-4 md:p-10 text-white">
        <div className="z-50 flex-col space-y-4 md:space-y-10">
          <div className=" animate-bounce border-2 border-white rounded-full text-center p-2 md:p-3 text-white hover:bg-white hover:text-primary hover:border-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a href="#categories" className="text-base md:text-2xl ">
              <RiArrowDownWideFill className="text-2xl md:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
