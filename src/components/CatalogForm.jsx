import { RiDownloadLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { colorIcons } from "../data/colorIcons";
import "react-toastify/dist/ReactToastify.css";
import CompleteCatalog from "../assets/pdf/catalogo_completo.pdf";
import LanceCatalog from "../assets/pdf/catalogo_lance.pdf";
import GettiCatalog from "../assets/pdf/catalogo_getti.pdf";
import UgelliCatalog from "../assets/pdf/catalogo_ugelli.pdf";
import ComandiCatalog from "../assets/pdf/catalogo_comandi.pdf";
import MasottiCatalog from "../assets/pdf/catalogo_masotti.pdf";
import InovelCatalog from "../assets/pdf/catalogo_inovel.pdf";

const CatalogForm = () => {
  const { t } = useTranslation();

  const categories = [
    { name: "Lance", fileName: LanceCatalog },
    { name: "Getti", fileName: GettiCatalog },
    { name: "Ugelli", fileName: UgelliCatalog },
    { name: "Comandi", fileName: ComandiCatalog },
    { name: "Masotti", fileName: MasottiCatalog },
    { name: "Inovel", fileName: InovelCatalog },
  ];

  const downloadCatalog = (file) => {
    try {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop();
      link.click();
      toast.success(
        `${t("The")} ${link.download
          .replace(".pdf", "")
          .replace(/_/g, " ")} ${t("downloaded successfully!")}`
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
      <div className="hidden lg:flex absolute inset-0 -z-50">
        {colorIcons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            className={icon.className}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-32">
        <div className="w-full md:w-1/4 fh:w-2/3 flex-col items-start text-start lg:text-center md:text-left p-5 lg:p-0">
          <h2 className="text-black text-4xl md:text-5xl fh:text-8xl italic mb-5">
            Cataloghi
          </h2>
          <p className="text-black text-nowrap text-xl fh:text-4xl flex items-center justify-start lg:justify-center">
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
                  <RiDownloadLine
                    onClick={() => downloadCatalog(category.fileName)}
                    className="ms-3 inline-block text-2xl fh:text-4xl cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center w-full md:w-1/3 fh:w-2/3">
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
