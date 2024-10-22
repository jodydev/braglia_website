import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Contents from "./Contents";

const CompanyContent = () => {
  const { t } = useTranslation();

  return (
    <section id="contact-form" className="flex-row h-100 w-screen md:p-20">
      <div className="flex flex-row justify-between">
        <div className="flex-col">
          <h2 className="text-black md:text-6xl lg:text-7xl xl:text-8xl w-full -z-50 mb-5">
            Braglia <br /> {t("company")}
          </h2>
          <p className="text-black md:text-4xl xl:text-6xl w-full flex items-center">
          {t("company profile")} <BsArrowDown className="ml-2" />
          </p>
        </div>
        <div className="flex justify-center items-start w-1/3">
          <p className="text-2xl">
           {t("company content")}
          </p>
        </div>
        <div className="flex flex-col items-center w-1/3 ">
          <img
            src="https://picsum.photos/400/600"
            alt=""
            className="shadow-lg"
          />
        </div>
      </div>

      <div className="my-20">
        <Contents isCompanyPage={true} />
      </div>
    </section>
  );
};

export default CompanyContent;
