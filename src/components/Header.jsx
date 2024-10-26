import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPlus } from "react-icons/fa";
import Logo from "../assets/images/loghi/logo.png";

const Header = ({ isContactPage, isCatalogPage }) => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setActiveLanguage(lng);
  };

  return (
    <header
      className={`flex justify-between items-center z-50 ${
        isContactPage || isCatalogPage ? "p-4 md:p-10 2xl:p-20" : ""
      }`}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className={`h-16 w-40 lg:h-24 lg:w-60 ${
            isContactPage || isCatalogPage ? "filter invert" : ""
          }`}
        />
      </Link>
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
         hidden md:flex md:flex-row border-2 text-center py-3 px-5 transition-all duration-1000 ease-in-out`}
        >
          <Link to={isCatalogPage ? undefined : "/catalog"}
            className="uppercase text-2xl flex items-center"
            onClick={(e) => isCatalogPage && e.preventDefault()}
          >
            {t("catalog")}
            <FaPlus className="text-2xl ml-4" />
          </Link>
        </div>
        <div className="flex space-x-5">
          <div
            className={`border-2 rounded-full text-center px-4 py-3 lg:py-4 lg:px-5 xl:px-5 xl:py-4 ${
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
              className="text-lg lg:text-2xl uppercase"
              onClick={() => changeLanguage("it")}
            >
              {t("it")}
            </button>
          </div>
          <div
            className={`border-2 rounded-full text-center p-3 lg:p-4 ${
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
              className="uppercase text-lg lg:text-2xl"
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
