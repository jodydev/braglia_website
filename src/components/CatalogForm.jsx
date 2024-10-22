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
    { name: "Lancie", fileName: "catalogo-lancie.pdf" },
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
    <section id="catalog" className="flex-row h-screen w-screen md:p-10">
      <div className="h-screen w-screen absolute inset-0 -z-50">
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
      <div className="flex flex-row justify-between gap-32">
        <div className="flex-col">
          <h2 className="text-black md:text-6xl xl:text-8xl italic w-full -z-50 mb-10">
            Cataloghi
          </h2>
          <p className="text-black text-nowrap lg:text-3xl xl:text-4xl ms-3">
            Catalogo Completo
            <RiDownloadLine
              onClick={() => downloadCatalog(category.fileName)}
              className="ms-3 inline-block text-4xl cursor-pointer"
            />
          </p>
        </div>
        <div className="flex justify-end items-start w-2/3">
          <div className="flex flex-col w-full max-w-2xl">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-row w-full border-b-2 border-black mb-3 py-5"
              >
                <div className="flex flex-col w-1/2 justify-start items-start">
                  <p className="text-black lg:text-3xl xl:text-5xl">
                    {category.name}
                  </p>
                </div>
                <div className="flex flex-col w-1/2 justify-end items-end">
                  <RiDownloadLine
                    onClick={category.downloadFunction}
                    className="ms-3 inline-block text-4xl cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3 ">
          <div className="absolute bottom-72 flex-col space-y-5">
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/company" className="uppercase text-2xl">
                {t("company")}
              </a>
            </div>
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a
                href="/contacts"
                className="uppercase text-2xl"
              >
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
