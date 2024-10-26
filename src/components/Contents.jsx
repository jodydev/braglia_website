import React from "react";
import { useTranslation } from "react-i18next";
import { contentsData } from "../data/contentsData";
import { contentsCompanyData } from "../data/contentsCompanyData";

const Contents = ({ isCompanyPage }) => {
  const { t } = useTranslation();

  const translatedContents = contentsData.map((content) => ({
    ...content,
    title: t(content.title),
    text: t(content.text),
  }));

  const translatedCompanyContents = contentsCompanyData.map((content) => ({
    ...content,
    title: t(content.title),
    text: t(content.text),
  }));

  return (
    <div className={`${isCompanyPage ? "px-0 py-10" : "px-10 py-0" } container mx-auto 2xl:px-60`}>
      {isCompanyPage
        ? translatedCompanyContents.map((content, index) => (
            <div
              key={content.id}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 sm:mb-16 md:mb-20 2xl:mb-60 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 p-2 sm:p-4">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-auto hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-2 sm:p-5">
                <h3 className="title-animation text-3xl sm:text-4xl md:text-5xl 2xl:text-8xl font-medium mb-2 sm:mb-4">
                  {content.title}
                </h3>
                {/* <p className="italic mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg 2xl:text-2xl">
                  {content.text}
                </p> */}
              </div>
            </div>
          ))
        : translatedContents.map((content, index) => (
            <div
              key={content.id}
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 sm:mb-16 md:mb-20 2xl:mb-60 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full h-full md:w-1/2 p-2 sm:p-4">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full md:w-2/3 h-auto hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 p-2 sm:p-5">
                <h3 className="title-animation text-3xl lg:text-8xl 2xl:text-9xl font-medium mb-2 sm:mb-4">
                  {content.title}
                </h3>
                {/* <p className="italic mt-6 sm:mt-8 md:mt-10 text-base lg:text-base 2xl:text-2xl">
                  {content.text}
                </p> */}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Contents;
