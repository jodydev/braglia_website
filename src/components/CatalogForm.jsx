import React, { useState } from "react";
import { RiDownloadLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { colorIcons } from "../data/colorIcons";
import BackButton from "./BackButton";
import "react-toastify/dist/ReactToastify.css";
import Cube from "../assets/images/icons/cube.png";
import Goccia from "../assets/images/icons/goccia.png";
import CompleteCatalog from "../assets/pdf/Catalogo_Completo.pdf";

const CatalogForm = () => {
  const { t } = useTranslation();

  const categories = [
    { name: "Lance", page: 13 },
    { name: "Getti", page: 45 },
    { name: "Ugelli", page: 107 },
    { name: "Inovel", page: 181 },
    { name: "Comandi", page: 225 },
    { name: "Masotti", page: 309 },
  ];

  // Funzione per aprire il catalogo in base al dispositivo
  const openCatalog = (pageNumber) => {
    window.open(`${CompleteCatalog}#page=${pageNumber}`, "_blank");

    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // if (isMobile) {
    //   setOpenMobilePdf(true);
    // } else {
    //   window.open(`${CompleteCatalog}#page=${pageNumber}`, "_blank");
    // }
  };

  // Funzione per scaricare il catalogo
  const downloadCatalog = (file) => {
    try {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop();
      link.click();
      toast.success(
        `${t("The")} ${link.download.replace("_", " ").replace(".pdf", "")} ${t(
          "downloaded successfully!"
        )}`
      );
    } catch (error) {
      console.error(error);
      toast.error(`${t("Failed to download the catalog.")}`);
    }
  };

  return (
    <section
      id="catalog"
      className="flex flex-col h-auto lg:h-screen w-full relative px-0 py-10 md:py-0 fh:p-10"
    >
      <ToastContainer position="top-left" />
      <div className="hidden-mobile md:flex absolute inset-0 -z-50">
        {colorIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className={icon.className}
          />
        ))}
      </div>
      <div className="absolute md:hidden top-[10%] left-[-10%] lg:-left-20 lg:top-40 inset-0 -z-50">
        <img
          src={Cube}
          alt="Background"
          className="object-cover w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] opacity-20"
        />
      </div>
      <div className="absolute md:hidden top-[70%] left-[55%] lg:left-[67%] lg:right-0 lg:top-60 inset-0 z-50">
        <img
          src={Goccia}
          alt="Background"
          className="object-cover w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] opacity-20"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-32">
        <div className="w-full md:w-1/4 fh:w-2/3 flex-col items-start text-start lg:text-center md:text-left p-5 lg:p-0">
          <div className="absolute top-[3%] left-2">
            <BackButton />
          </div>
          <h2 className="text-black text-4xl md:text-6xl fh:text-8xl italic mb-5">
            Cataloghi
          </h2>
          <p className="text-black text-nowrap text-xl md:text-2xl fh:text-4xl flex items-center justify-start lg:justify-center">
            Catalogo Completo
            <RiDownloadLine
              onClick={() => downloadCatalog(CompleteCatalog)}
              className="ms-3 inline-block text-2xl fh:text-4xl cursor-pointer"
            />
          </p>
        </div>
        <div className="flex justify-end items-start w-full md:w-1/3 fh:w-2/3 px-5 lg:px-0">
          <div className="flex flex-col w-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-row justify-between w-full border-b-2 border-black mb-3 py-5"
              >
                <div className="flex flex-col w-full md:w-2/5 justify-start items-start">
                  <p className="text-black text-2xl md:text-3xl fh:text-5xl">
                    {category.name}
                  </p>
                </div>
                <div className="flex flex-col w-full md:w-1/5 justify-end items-end">
                  <FaEye
                    onClick={() => openCatalog(category.page)}
                    className="ms-3 inline-block text-2xl fh:text-4xl cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden-mobile lg:flex flex-col items-center w-full md:w-1/3 fh:w-2/3">
          <div className="absolute w-1/4 top-[50%] fh:top-[60%] flex flex-col space-y-5">
            <Link
              to="/company"
              className="uppercase text-lg md:text-2xl border-2 border-black text-center py-3 px-5 md:px-20 text-black hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-700 ease-in-out"
            >
              {t("company")}
            </Link>

            <Link
              to="/contacts"
              className="uppercase text-lg md:text-2xl border-2 border-black text-center py-3 px-5 md:px-20 text-black hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-700 ease-in-out"
            >
              {t("contacts")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogForm;
