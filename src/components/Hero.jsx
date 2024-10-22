import { useTranslation } from "react-i18next";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import Header from "./Header";
import BackgroundAnimation from "./BackgroundAnimation";
import Image from "../assets/images/hero/hero.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="h-screen w-screen bg-secondary relative p-4 md:p-10 2xl:p-20"
    >
      <BackgroundAnimation />

      <div className="flex flex-col relative z-50 space-y-0">
        <Header />
        <main className="px-4 py-8 md:px-20 lg:px-24 lg:py-10 2xl:px-60 2xl:py-40  space-y-3">
          <img
            src={Image}
            alt="Hero Image"
            className="w-full h-1/2 lg:h-1/3 lg:w-2/5"
          />
        </main>
      </div>

      <div className="z-50 absolute bottom-18 md:bottom-20 right-10 md:right-20 flex justify-center items-center text-white">
        <div className="flex-col space-y-5 xl:space-y-10">
          <div className="lg:hidden flex flex-row border-2 border-white text-center py-3 px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a href="/catalog" className="uppercase text-2xl flex items-center">
              {t("catalog")}
              <FaPlus className="text-2xl ml-4" />
            </a>
          </div>
          <div className="flex flex-row border-2 border-white text-center py-3 px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a href="/company" className="uppercase text-2xl flex items-center">
              {t("company")}
            </a>
          </div>
          <div className="flex flex-row border-2 border-white text-center py-3 px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a
              href="/contacts"
              className="uppercase text-2xl flex items-center"
            >
              {t("contacts")}
            </a>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0 md:bottom-20 lg:bottom-0 left-0 right-0 flex justify-center items-center p-4 md:p-10 text-white">
        <div className="z-50 flex-col space-y-4 md:space-y-10">
          <div className="border-2 border-white rounded-full text-center p-2 md:p-3 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a className="text-lg md:text-2xl " href="#category">
              <RiArrowDownWideFill className=" text-2xl md:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
