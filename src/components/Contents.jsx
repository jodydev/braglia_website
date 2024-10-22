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
    <div className="container mx-auto 2xl:px-60">
      {isCompanyPage
        ? translatedCompanyContents.map((content, index) => (
            <div
              key={content.id}
              className={`flex flex-col md:flex-row items-center gap-10 mb-20 2xl:mb-60 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 p-4">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-auto hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
                />
              </div>
              <div className="md:w-1/2 p-5">
                <h3 className="title-animation text-6xl 2xl:text-8xl font-bold mb-4">
                  {content.title}
                </h3>
                <p className="italic mt-10 2xl:text-2xl">{content.text}</p>
              </div>
            </div>
          ))
        : translatedContents.map((content, index) => (
            <div
              key={content.id}
              className={`flex flex-col md:flex-row items-center gap-10 mb-20 2xl:mb-60 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 p-4">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-auto hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
                />
              </div>
              <div className="md:w-1/2 p-5">
                <h3 className="title-animation text-6xl 2xl:text-8xl font-bold mb-4">
                  {content.title}
                </h3>
                <p className="italic mt-10 2xl:text-2xl">{content.text}</p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Contents;