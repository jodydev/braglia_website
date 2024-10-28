import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Contents from "./Contents";

const CompanyContent = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-form" className="flex flex-col h-auto w-full p-10 lg:p-10 2xl:p-20">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start mb-5 md:mb-0">
          <h2 className="text-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl w-full mb-5">
            Braglia <br /> {t("company")}
          </h2>
          <p className="text-black text-2xl md:text-4xl xl:text-6xl flex items-center">
            {t("company profile")} <BsArrowDown className="ml-2" />
          </p>
        </div>
        <div className="flex justify-center items-start w-full md:w-1/3 mb-5 md:mb-0">
          <p className="text-lg lg:text-2xl xl:text-3xl">
            {t("company content")}
          </p>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/3 mt-5 lg:mt-0 animate-fadeInRight">
          <img
            src="https://picsum.photos/400/600"
            alt=""
            className="shadow-lg w-full h-auto max-w-xs md:max-w-sm"
          />
        </div>
      </div>

      <div className="my-10 lg:my-20">
        <Contents isCompanyPage={true} />
      </div>
    </section>
  );
};

export default CompanyContent;
