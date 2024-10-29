import React from "react";
import { useTranslation } from "react-i18next";
import { contentsData } from "../data/contentsData";
import { contentsCompanyData } from "../data/contentsCompanyData";

const Contents = ({ isCompanyPage }) => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 768;

  const staticCompanyContents = [
    {
      id: 1,
      title: t(contentsCompanyData[0].title),
      video: contentsCompanyData[0].video,
    },
    {
      id: 2,
      title: t(contentsCompanyData[1].title),
      video: contentsCompanyData[1].video,
    },
    {
      id: 3,
      title: t(contentsCompanyData[2].title),
      video: contentsCompanyData[2].video,
    },
    {
      id: 4,
      title: t(contentsCompanyData[3].title),
      video: contentsCompanyData[3].video,
    },
  ];

  const staticContents = [
    {
      id: 1,
      title: t(contentsData[0].title),
      image: contentsData[0].image,
    },
    {
      id: 2,
      title: t(contentsData[1].title),
      image: contentsData[1].image,
    },
    {
      id: 3,
      title: t(contentsData[2].title),
      image: contentsData[2].image,
    },
    {
      id: 4,
      title: t(contentsData[3].title),
      image: contentsData[3].image,
    },
    {
      id: 5,
      image: contentsData[4].image,
    }
  ];

  return (
    <div className={`container mx-auto ${isCompanyPage ? "px-0 py-10" : "px-10 py-0"} 2xl:px-60`}>
      {isCompanyPage ? (
        <>
          <div className="w-full">
            <iframe
              width="100%"
              height={isMobile ? "200" : "500"}
              src="https://www.youtube.com/embed/z-Cmrb7kInE?t=57s"
              title=""
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
            ></iframe>

            {staticCompanyContents.map((content, index) => (
              <div
                key={content.id}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 my-10 sm:my-16 md:my-20 2xl:my-60 ${
                  (index === 1 || index === 3) ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`w-full h-full md:w-1/2 p-2 sm:p-4 ${index === 0 || index === 2 || index === 3 ? "md:w-full " : ""}`}>
                  <iframe
                    width="100%"
                    height={isMobile ? "200" : "500"}
                    src={`https://www.youtube.com/embed/${content.video.split("v=")[1].split("&")[0]}`}
                    title={content.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="hover:scale-105 transition-all duration-500 ease-in-out shadow-lg"
                  ></iframe>
                </div>
                <div className={`flex items-start w-full md:w-1/2 p-2 sm:p-5 ${index === 0  ? "justify-start items-end" : "justify-end items-end"}`}>
                  <h3 className="text-4xl fh:text-6xl font-medium mb-2 sm:mb-4">
                    {content.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        staticContents.map((content, index) => (
          <div
            key={content.id}
            className={`flex flex-col md:flex-row gap-6 md:gap-10 mb-10 sm:mb-16 md:mb-20 2xl:mb-60 ${
              (index === 1 || index === 2 || index === 4) ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`w-full h-full md:w-1/2 p-2 sm:p-4 ${index === 0 || index === 3 ? "flex justify-end items-end" : index === 4 ? "md:flex md:justify-end md:items-end" : ""}`}>
              <img
                src={content.image}
                alt={content.title}
                className={`w-full h-auto hover:scale-105 transition-all duration-500 ease-in-out shadow-lg ${index === 0 ? "h-full" : index === 1 ? "h-full w-2/3" : index === 2 ? "h-full" : index === 4 ? "h-full md:w-2/4" : "h-full md:w-2/3"}`}
              />
            </div>
            <div className={`flex items-start w-full md:w-1/2 p-2 sm:p-5 ${index === 0 ? "justify-start" : index === 3 ? "justify-start items-end" : "justify-end items-end"}`}>
            <h3 className="text-4xl fh:text-6xl font-medium mb-2 sm:mb-4">
            {content.title}
              </h3>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Contents;
