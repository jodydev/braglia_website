import { useTranslation } from "react-i18next";
import Logo from "../assets/images/loghi/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary flex flex-col sm:flex-row text-white py-6 px-4">
      <div className="w-full flex flex-col items-start justify-start">
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <div className="text-start mb-4 sm:mb-0">
            <p className="font-bold italic mb-2 text-xl md:text-2xl">Braglia s.r.l</p>
            <p className="font-light text-xs sm:text-sm leading-relaxed">
              <span className="font-semibold">T:</span> +39 0522 340648{" "}
              <span className="font-semibold mx-2">•</span>
              <span className="font-bold">E:</span> braglia@braglia.it{" "}
              <span className="font-semibold mx-2">•</span>
              <span className="font-semibold">PEC:</span> braglia@legalmail.it{" "}
              <span className="font-semibold mx-2">•</span>
              <span className="font-bold">Fax:</span> +39 0522 340897
            </p>
            <p className="text-xs sm:text-sm mt-2">
              Via Martin Lutero, 4 - 42122 - Reggio Emilia, Italy (UE)
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
            <img src={Logo} alt="Logo" className="hidden md:block h-12 sm:h-16" />
          </div>
        </div>
        <div className="mt-4 w-full h-[1px] bg-white"></div>
        <div className="text-center mt-2">
          <p className="text-xs sm:text-sm my-2">
            C.F./P.Iva/Reg.Imp. RE/VAT NO. 00443530357 • {t("share capital")} €
            98.000.00 i.v.
          </p>
        </div>
        <div className="my-2 w-full h-[1px] bg-white"></div>
      </div>
    </footer>
  );
};

export default Footer;
