import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from "../assets/images/logo.png";
import { FaPlus } from "react-icons/fa";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="flex justify-between items-center z-50">
      <img src={Logo} alt="Logo" className="h-24 w-60" />
      <div className="flex space-x-40">
        <div className="flex flex-row border-2 border-white text-center py-3 px-5 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
          <a href="/catalog" className="uppercase text-2xl flex items-center">
            {t('catalog')}
            <FaPlus className="text-2xl ml-4" />
          </a>
        </div>
        <div className="flex space-x-5">
          <div className="border-2 border-white rounded-full text-center py-3 px-5 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <button className="text-2xl uppercase" onClick={() => changeLanguage('it')}>{t('it')}</button>
          </div>
          <div className="border-2 border-white rounded-full text-center py-3 px-3 text-white hover:bg-white hover:text-primary hover:cursor-pointer transition-all duration-1000 ease-in-out">
            <button className="uppercase text-2xl" onClick={() => changeLanguage('en')}>{t('en')}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
