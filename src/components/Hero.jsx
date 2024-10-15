import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaDroplet, FaCircle, FaSquareFull } from "react-icons/fa6";
import { RiEqualFill } from "react-icons/ri";
import { TbMedicalCrossFilled } from "react-icons/tb";
import { RiArrowDownWideFill } from "react-icons/ri";
import Header from "./Header";
import Equals from "../assets/icons/equals.png";

const getInitialPositions = () => {
  if (window.innerWidth >= 2440) {
    // 2xl breakpoint
    return [
      { top: "200px", left: "-250px" },
      { top: "auto", bottom: "50px", left: "400px" },
      { top: "auto", bottom: "-50px", left: "1000px" },
      { top: "auto", bottom: "50px", left: "1800px" },
      { top: "-250px", left: "700px" },
      { top: "-300px", left: "1500px" },
      { top: "300px", left: "1200px" },
    ];
  } else if (window.innerWidth >= 1920) {
    // xl breakpoint
    return [
      { top: "150px", left: "-200px" },
      { top: "auto", bottom: "40px", left: "300px" },
      { top: "auto", bottom: "-40px", left: "800px" },
      { top: "auto", bottom: "40px", left: "1500px" },
      { top: "-200px", left: "500px" },
      { top: "-250px", left: "1000px" },
      { top: "250px", left: "900px" },
    ];
  } else if (window.innerWidth >= 768) {
    // md breakpoint
    return [
      { top: "120px", left: "-160px" },
      { top: "auto", bottom: "30px", left: "240px" },
      { top: "auto", bottom: "-30px", left: "640px" },
      { top: "auto", bottom: "30px", left: "1200px" },
      { top: "-160px", left: "400px" },
      { top: "-200px", left: "800px" },
      { top: "200px", left: "720px" },
    ];
  } else if (window.innerWidth >= 640) {
    // sm breakpoint
    return [
      { top: "40px", left: "-40px" },
      { top: "auto", bottom: "8px", left: "80px" },
      { top: "auto", bottom: "-8px", left: "200px" },
      { top: "auto", bottom: "8px", left: "300px" },
      { top: "-40px", left: "120px" },
      { top: "-80px", left: "240px" },
      { top: "80px", left: "180px" },
    ];
  } else {
    // default for smaller screens
    return [
      { top: "20px", left: "-20px" },
      { top: "auto", bottom: "4px", left: "40px" },
      { top: "auto", bottom: "-4px", left: "100px" },
      { top: "auto", bottom: "4px", left: "150px" },
      { top: "-20px", left: "60px" },
      { top: "-40px", left: "120px" },
      { top: "40px", left: "90px" },
    ];
  }
};

const Hero = () => {
  const [positions, setPositions] = useState(getInitialPositions());
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setPositions(getInitialPositions());
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        const firstPosition = newPositions.shift();
        newPositions.push(firstPosition);
        return newPositions;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="h-screen w-screen bg-secondary relative p-4 md:p-10 2xl:p-20"
    >
      <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 text-secondary opacity-100 z-0">
        <FaDroplet
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
          style={positions[0]}
        />
        <FaCircle
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
          style={positions[1]}
        />
        <RiEqualFill
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[600px] 2xl:w-[600px] text-primary absolute transition-all duration-1000 ease-in-out"
          style={positions[2]}
        />
        <FaCircle
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
          style={positions[3]}
        />
        <FaSquareFull
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[400px] 2xl:w-[400px] text-primary absolute rotate-45 transition-all duration-1000 ease-in-out"
          style={positions[4]}
        />
        <TbMedicalCrossFilled
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[600px] 2xl:w-[600px] text-primary absolute transition-all duration-1000 ease-in-out"
          style={positions[5]}
        />
        <FaCircle
          className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
          style={positions[6]}
        />
      </div>

      <div className="flex flex-col relative z-50 space-y-0">
        <Header />
        <main className="px-4 py-8 md:px-20 md:py-16 2xl:px-60 2xl:py-32">
          <div className="relative flex flex-col md:flex-row md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center gap-4 md:gap-10">
            <p className="text-[80px] lg:text-[160px] 2xl:text-[260px] tracking-[10px] md:tracking-[30px] lg:tracking-[50px] text-white font-bold">
              BR
            </p>
            <img
              src={Equals}
              alt="icon"
              className="h-20 w-24 md:h-30 md:w-34 lg:h-40 lg:w-44 text-black"
            />
            <span className="absolute bottom-10 left-[200px] lg:bottom-28 lg:left-[470px] 2xl:bottom-40 2xl:left-[600px] text-white text-[30px] md:text-[50px] lg:text-[70px]">
              ©
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center gap-4 md:gap-10">
            <img
              src={Equals}
              alt="icon"
              className="h-20 w-24 md:h-30 md:w-34 lg:h-40 lg:w-44"
            />
            <p className="text-[80px] lg:text-[160px] 2xl:text-[260px] tracking-[10px] md:tracking-[30px] lg:tracking-[50px] text-white font-bold">
              AG
            </p>
          </div>
          <div className="relative flex flex-col md:flex-row md:h-[130px] xl:h-[170px] 2xl:h-[220px] items-center gap-4 md:gap-10">
            <p className="text-[80px] lg:text-[160px] 2xl:text-[260px] tracking-[10px] md:tracking-[30px] lg:tracking-[50px] text-white font-bold">
              LIA
            </p>
            <img
              src={Equals}
              alt="icon"
              className="h-20 w-24 md:h-30 md:w-34 lg:h-40 lg:w-44"
            />
            <span className="absolute bottom-[-10px] md:bottom-[-20px] left-[200px] md:left-[400px] lg:left-[530px] text-white text-[30px] md:text-[40px] lg:text-[50px]">
              MFG
            </span>
          </div>
          <div className="ms-2 mt-14 w-full">
            <p className="text-[20px] md:text-[30px] lg:text-[38px] uppercase text-white">
              {t("Fluid sparaing and engineering")}
            </p>
          </div>
        </main>
      </div>

      <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 flex justify-center items-center p-4 md:p-10 text-white">
        <div className="flex-col space-y-4 md:space-y-10">
          <div className="flex border-2 border-white text-center py-2 px-10 md:py-3 md:px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a
              href="/catalog"
              className="uppercase text-lg md:text-2xl flex items-center"
            >
              {t("Azienda")}
            </a>
          </div>
          <div className="flex flex-row border-2 border-white text-center py-2 px-10 md:py-3 md:px-20 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <a
              href="/catalog"
              className="uppercase text-lg md:text-2xl flex items-center"
            >
              {t("Contatti")}
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
