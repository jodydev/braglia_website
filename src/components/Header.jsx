import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/logo.png";
import { FaPlus } from "react-icons/fa";

const Header = ({ isContactPage, isCatalogPage }) => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  return (
    <header
      className={`flex justify-between items-center z-50 ${
        isContactPage || isCatalogPage ? "p-4 md:p-10 2xl:p-20" : ""
      }`}
    >
      <a href="/">
        <img
          src={Logo}
          alt="Logo"
          className={`h-24 w-60 ${
            isContactPage || isCatalogPage ? "filter invert" : ""
          }`}
        />
      </a>
      <div
        className={`flex md:space-x-10 xl:space-x-40 ${
          isContactPage ? "text-black" : "text-white"
        }`}
      >
        <div
          className={`${
            isCatalogPage
              ? "border-black text-white bg-black cursor-not-allowed"
              : isContactPage
              ? "border-black text-black hover:bg-black hover:text-white cursor-pointer"
              : "border-white text-white hover:bg-white hover:text-black cursor-pointer"
          } 
          flex flex-row border-2 text-center py-3 px-5 transition-all duration-1000 ease-in-out`}
        >
          <a
            href={isCatalogPage ? undefined : "/catalog"}
            className="uppercase text-2xl flex items-center"
            onClick={(e) => isCatalogPage && e.preventDefault()}
          >
            {t("catalog")}
            <FaPlus className="text-2xl ml-4" />
          </a>
        </div>
        <div className="flex space-x-5">
          <div
            className={`border-2 rounded-full text-center py-3 md:py-4 md:px-5 xl:px-5 xl:py-4 ${
              activeLanguage === "it"
                ? "bg-black text-white border-black"
                : activeLanguage && isCatalogPage
                ? "border-black text-black"
                : activeLanguage && isContactPage
                ? "border-black text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            } hover:cursor-pointer transition-all duration-1000 ease-in-out`}
          >
            <button
              className="text-2xl uppercase"
              onClick={() => changeLanguage("it")}
            >
              {t("it")}
            </button>
          </div>
          <div
            className={`border-2 rounded-full text-center p-4 ${
              activeLanguage === "en"
                ? "bg-black text-white border-black"
                : activeLanguage && isCatalogPage
                ? "border-black text-black"
                : activeLanguage && isContactPage
                ? "border-black text-black"
                : "border-white text-white hover:bg-white hover:text-black"
            } hover:cursor-pointer transition-all duration-1000 ease-in-out`}
          >
            <button
              className="uppercase text-2xl"
              onClick={() => changeLanguage("en")}
            >
              {t("en")}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
