import { useTranslation } from "react-i18next";
import { RiArrowDownWideFill } from "react-icons/ri";
import Header from "./Header";
import Equals from "../assets/icons/equals.png";
import BackgroundAnimation from "./BackgroundAnimation";
import { FaDroplet, FaCircle, FaSquareFull } from "react-icons/fa6";
import { RiEqualFill } from "react-icons/ri";
import { TbMedicalCrossFilled } from "react-icons/tb";

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
        <main className="px-4 py-8 md:px-20 md:py-16 lg:px-24 lg:py-20 2xl:px-60 2xl:py-32  space-y-3">
          <div className="relative flex md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center">
            <p className="text-[80px] lg:text-[130px] 2xl:text-[260px] tracking-[10px] lg:tracking-[30px] xl:tracking-[50px] text-white font-bold">
              BR
            </p>
            <TbMedicalCrossFilled className="h-20 w-20 lg:h-28 lg:w-28 xl:h-44 xl:w-44 text-white" />

            <span className="absolute bottom-10 left-[200px] lg:bottom-24 lg:left-[340px] 2xl:bottom-40 2xl:left-[600px] text-white text-[30px] md:text-[50px] lg:text-[50px]">
              ©
            </span>
          </div>
          <div className="flex md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center">
            <FaDroplet className="h-20 w-20 lg:h-28 lg:w-28 xl:h-44 xl:w-44 text-white" />

            <p className="ms-4 text-[80px] lg:text-[130px] 2xl:text-[260px] tracking-[10px] lg:tracking-[30px] xl:tracking-[50px] text-white font-bold">
              AG
            </p>
          </div>
          <div className="relative flex md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center">
            <p className="text-[80px] lg:text-[130px] 2xl:text-[260px] tracking-[10px] lg:tracking-[10px] xl:tracking-[50px] text-white font-bold">
              LIA
            </p>
            <RiEqualFill className="h-20 w-20 lg:h-28 lg:w-28 xl:h-44 xl:w-44 text-white" />

            <span className="absolute bottom-[-10px] md:bottom-[-20px] lg:bottom-[0px] left-[200px] md:left-[100px] lg:left-[265px] text-white text-[30px] md:text-[40px] lg:text-[24px]">
              MFG
            </span>
          </div>
          <div className="ms-2 w-full">
            <p className="text-[20px] md:text-[30px] lg:text-[24px] uppercase text-white">
              {t("Fluid sparaing and engineering")}
            </p>
          </div>
        </main>
      </div>

      <div className="z-50 absolute bottom-10 md:bottom-20 right-10 md:right-20 flex justify-center items-center text-white">
        <div className="flex-col space-y-5 xl:space-y-10">
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

      <div className="w-full absolute bottom-10 md:bottom-20 lg:bottom-0 left-0 right-0 flex justify-center items-center p-4 md:p-10 text-white">
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
