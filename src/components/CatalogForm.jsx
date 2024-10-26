import { RiDownloadLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Four from "../assets/images/icons/4.png";
import One from "../assets/images/icons/1.png";
import Two from "../assets/images/icons/2.png";
import Three from "../assets/images/icons/3.png";
import Six from "../assets/images/icons/6.png";
import Seven from "../assets/images/icons/7.png";

const CatalogForm = () => {
  const { t } = useTranslation();
  const catalogBaseUrl = "path/to/catalogs/";

  const categories = [
    { name: "Lance", fileName: "catalogo-lance.pdf" },
    { name: "Getti", fileName: "catalogo-getti.pdf" },
    { name: "Ugelli", fileName: "catalogo-ugelli.pdf" },
    { name: "Comandi", fileName: "catalogo-comandi.pdf" },
    { name: "Masotti", fileName: "catalogo-masotti.pdf" },
  ];

  const downloadCatalog = (fileName) => {
    try {
      const link = document.createElement("a");
      link.href = `${catalogBaseUrl}${fileName}`;
      link.download = fileName;
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="catalog" className="flex flex-col h-auto lg:h-screen w-full relative px-0 py-10 lg:p-10">
      <div className="hidden lg:flex absolute inset-0 -z-50">
        <img
          src={Four}
          alt="Icon"
          className="absolute lg:-bottom-40 lg:right-60 object-cover w-[300px] h-[300px] opacity-20"
        />
        <img
          src={One}
          alt="Icon"
          className="absolute lg:right-96 lg:top-10 object-cover w-[220px] h-[300px] opacity-20"
        />
        <img
          src={Two}
          alt="Icon"
          className="absolute lg:-bottom-40 lg:left-60 object-cover w-[250px] h-[250px] opacity-20"
        />
        <img
          src={Three}
          alt="Icon"
          className="absolute lg:top-40 lg:left-20 object-cover w-[300px] h-[300px] opacity-20"
        />
        <img
          src={Six}
          alt="Icon"
          className="absolute lg:top-[50%] lg:right-[50%] object-cover w-[300px] h-[300px] opacity-20"
        />
        <img
          src={Seven}
          alt="Icon"
          className="absolute lg:top-[50%] lg:right-0 object-cover w-[200px] h-[200px] opacity-20"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-32">
        <div className="flex-col items-start text-start lg:text-center md:text-left p-5 lg:p-0">
          <h2 className="text-black text-4xl md:text-6xl xl:text-8xl italic mb-5">
            Cataloghi
          </h2>
          <p className="text-black text-nowrap text-2xl md:text-3xl xl:text-4xl flex items-center justify-start lg:justify-center">
            Catalogo Completo
            <RiDownloadLine
              onClick={() => downloadCatalog("catalogo-completo.pdf")} 
              className="ms-3 inline-block text-4xl cursor-pointer"
            />
          </p>
        </div>
        <div className="flex justify-end items-start w-full md:w-2/3 px-5 lg:px-0">
          <div className="flex flex-col w-full max-w-2xl">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-row justify-between w-full border-b-2 border-black mb-3 py-5"
              >
                <div className="flex flex-col w-1/2 justify-start items-start">
                  <p className="text-black text-2xl md:text-3xl xl:text-5xl">
                    {category.name}
                  </p>
                </div>
                <div className="flex flex-col w-1/2 justify-end items-end">
                  <RiDownloadLine
                    onClick={() => downloadCatalog(category.fileName)}
                    className="ms-3 inline-block text-4xl cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center w-full md:w-1/3">
          <div className="absolute bottom-10 flex flex-col space-y-5">
            <div className="border-2 border-black text-center py-3 px-5 md:px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
              <a href="/company" className="uppercase text-lg md:text-2xl">
                {t("company")}
              </a>
            </div>
            <div className="border-2 border-black text-center py-3 px-5 md:px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-300 ease-in-out">
              <a href="/contacts" className="uppercase text-lg md:text-2xl">
                {t("contacts")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogForm;
