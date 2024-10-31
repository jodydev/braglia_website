import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BackButton from "./BackButton";
import Contents from "./Contents";
import { imageHome } from "../data/contentsData";

const CompanyContent = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact-form"
      className="flex flex-col h-auto w-full p-10 lg:p-10 fh:p-20"
    >
      <div className="flex flex-col md:flex-row justify-between h-full gap-x-5">
        <div className="flex flex-col items-start mb-5 md:mb-0 ">
          <h2 className="text-black text-4xl md:text-4xl lg:text-5xl fh:text-8xl w-full mb-5 italic">
            <BackButton />
            Braglia <br /> {t("company")}
          </h2>
          <p className="text-black text-2xl md:text-3xl lg:text-4xl fh:text-6xl flex items-center">
            {t("company profile")} <BsArrowDown className="ml-2" />
          </p>
        </div>
        <div className="flex justify-center items-start w-full md:w-1/3 mb-5 md:mb-0 ">
          <p className="text-lg lg:text-2xl fh:text-3xl">
            {t("company content")}
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/3 mt-5 lg:mt-0">
          <img
            src={imageHome}
            alt="Braglia Company"
            className="shadow-lg w-full h-full fh:h-[650px] 2xl:h-[850px] 2xl:w-[600px] "
          />
        </div>
        <div className="z-50 hidden-mobile lg:flex flex-col space-y-5 absolute w-1/4 top-[50%] md:top-[75%] md:right-20">
          <Link
            to="/company"
            className="uppercase text-lg md:text-2xl border-2 border-black bg-black text-center py-3 px-10 md:px-20 text-white cursor-not-allowed transition-all duration-1000 ease-in-out"
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

      <div className="my-10 lg:my-20">
        <Contents isCompanyPage={true} />
      </div>
    </section>
  );
};

export default CompanyContent;
