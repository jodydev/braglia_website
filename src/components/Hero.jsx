import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiArrowDownWideFill } from "react-icons/ri";
import Header from "./Header";
import Equals from "../assets/icons/equals.png";
import BackgroundAnimation from "./BackgroundAnimation";

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
        <main className="px-4 py-8 md:px-20 md:py-16 2xl:px-60 2xl:py-32">
          <div className="relative flex flex-col md:flex-row md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center gap-4 md:gap-10">
            <p className="animate-fadeInLeft text-[80px] lg:text-[160px] 2xl:text-[260px] tracking-[10px] md:tracking-[30px] lg:tracking-[50px] text-white font-bold">
              BR
            </p>
            <img
              src={Equals}
              alt="icon"
              className="animate-fadeInLeft h-20 w-24 md:h-30 md:w-34 lg:h-40 lg:w-44 text-black"
            />
            <span className="animate-fadeInLeft absolute bottom-10 left-[200px] lg:bottom-28 lg:left-[470px] 2xl:bottom-40 2xl:left-[600px] text-white text-[30px] md:text-[50px] lg:text-[70px]">
              ©
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center gap-4 md:gap-10">
            <img
              src={Equals}
              alt="icon"
              className="animate-fadeInLeft h-20 w-24 md:h-30 md:w-34 lg:h-40 lg:w-44"
            />
            <p className="animate-fadeInLeft text-[80px] lg:text-[160px] 2xl:text-[260px] tracking-[10px] md:tracking-[30px] lg:tracking-[50px] text-white font-bold">
              AG
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center gap-4 md:gap-10">
            <p className="animate-fadeInLeft text-[80px] lg:text-[160px] 2xl:text-[260px] tracking-[10px] md:tracking-[30px] lg:tracking-[50px] text-white font-bold">
              LIA
            </p>
            <img
              src={Equals}
              alt="icon"
              className="animate-fadeInLeft h-20 w-24 md:h-30 md:w-34 lg:h-40 lg:w-44"
            />
            <span className="animate-fadeInLeft absolute bottom-[-10px] md:bottom-[-20px] left-[200px] md:left-[400px] lg:left-[530px] text-white text-[30px] md:text-[40px] lg:text-[50px]">
              MFG
            </span>
          </div>
          <div className="ms-2 mt-14 w-full">
            <p className="animate-fadeInLeft text-[20px] md:text-[30px] lg:text-[38px] uppercase text-white">
              {t("Fluid sparaing and engineering")}
            </p>
          </div>
        </main>
      </div>

      <div className="z-50 absolute bottom-10 md:bottom-20 right-10 md:right-20 flex justify-center items-center text-white">
        <div className="flex-col space-y-5 xl:space-y-10">
          <div className="flex flex-row border-2 border-white text-center py-3 px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a href="/company" className="uppercase text-2xl flex items-center">
              {t("azienda")}
            </a>
          </div>
          <div className="flex flex-row border-2 border-white text-center py-3 px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a href="/contacts" className="uppercase text-2xl flex items-center">
              {t("contatti")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 md:bottom-20 left-0 right-0 flex justify-center items-center p-4 md:p-10 text-white">
        <div className="flex-col space-y-4 md:space-y-10">
          <div className="border-2 border-white rounded-full text-center p-2 md:p-3 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a className="text-lg md:text-2xl uppercase " href="#category">
              <RiArrowDownWideFill className="text-2xl md:text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
