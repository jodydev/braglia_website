import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import Cube from "../assets/images/icons/cube.png";
import Goccia from "../assets/images/icons/goccia.png";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const { t } = useTranslation();

  const companyTypeOptions = [
    { id: "1", label: t("manufacturer") },
    { id: "2", label: t("distribution company") },
    { id: "3", label: t("retailer") },
    { id: "4", label: t("Import Export") },
    { id: "5", label: t("othes") },
  ];

  const companyContacts = [
    { id: "1", label: t("sales italy") },
    { id: "2", label: t("export department") },
  ];

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    companyType: {
      manufacturer: false,
      distributionCompany: false,
      retailer: false,
      importExport: false,
      othes: false,
    },
    businessContacts: {
      salesItaly: false,
      exportDepartment: false,
    },
    subject: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    if (type === "checkbox") {
      const keys = name.split(".");
      if (keys.length > 1) {
        setFormData((prevData) => ({
          ...prevData,
          [keys[0]]: {
            ...prevData[keys[0]],
            [keys[1]]: checked,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isAtLeastOneCompanyTypeChecked = Object.values(
      formData.companyType
    ).some((checked) => checked);
    const isAtLeastOneContactChecked = Object.values(
      formData.businessContacts
    ).some((checked) => checked);

    if (!isAtLeastOneCompanyTypeChecked) {
      toast.error(t("please select at least one company type"));
      return;
    }

    if (!isAtLeastOneContactChecked) {
      toast.error(t("please select at least one company contact"));
      return;
    }

    console.log("Invio riuscito con successo:", formData);
    // const emailParams = {
    //   name: formData.name,
    //   surname: formData.surname,
    //   email: formData.email,
    //   companyType: Object.keys(formData.companyType)
    //     .filter((key) => formData.companyType[key])
    //     .join(", "),
    //   businessContacts: Object.keys(formData.businessContacts)
    //     .filter((key) => formData.businessContacts[key])
    //     .join(", "),
    //   subject: formData.subject,
    //   privacy: formData.privacy ? "Yes" : "No",
    // };

    // emailjs
    //   .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams, "YOUR_USER_ID")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <section
      id="contact-form"
      className="flex flex-col h-auto w-full px-5 fh:p-20"
    >
      <ToastContainer
        style={{ position: "absolute", bottom: "-100%", right: "5%" }}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="z-50 flex flex-col md:flex-row justify-between h-auto w-full">
        <div className="absolute top-[10%] left-[-10%] lg:-left-20 lg:top-40 inset-0 -z-50">
          <img
            src={Cube}
            alt="Background"
            className="object-cover w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] opacity-20"
          />
        </div>
        <div className="absolute top-[70%] left-[55%] lg:left-[67%] lg:right-0 lg:top-60 inset-0 -z-50">
          <img
            src={Goccia}
            alt="Background"
            className="object-cover w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] opacity-20"
          />
        </div>
        <div className="flex-col mb-0">
          <h2 className="text-black text-4xl md:text-6xl fh:text-8xl italic w-full my-10 md:my-0">
            {t("contacts")}
          </h2>
        </div>
        <div className="md:mb-20 flex flex-col items-center md:items-start md:w-1/3">
          <form
            className="flex flex-col items-start w-full max-w-2xl"
            onSubmit={handleSubmit}
          >
            <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
              {t("company")}*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 md:p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />
            <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
              {t("mr/miss")}*
            </label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full p-2 md:p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />

            <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
              Email*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 md:p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />

            <div className="mb-4">
              <div className="flex flex-col">
                <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
                  {t("company type")}*
                </label>

                {companyTypeOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center text-sm md:text-lg fh:text-xl mb-4"
                  >
                    <input
                      type="checkbox"
                      name={`companyType.option${option.id}`}
                      checked={formData.companyType[`option${option.id}`]}
                      onChange={handleChange}
                      className="hover:cursor-pointer mr-2 w-4 h-4 md:w-6 md:h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
                {t("company contacts")}*
              </label>

              {companyContacts.map((contact) => (
                <label
                  key={contact.id}
                  className="flex items-center text-sm md:text-lg fh:text-xl mb-4"
                >
                  <input
                    type="checkbox"
                    name={`businessContacts.contact${contact.id}`}
                    checked={formData.businessContacts[`contact${contact.id}`]}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-4 h-4 md:w-6 md:h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  {contact.label}
                </label>
              ))}
            </div>

            <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
              {t("object")}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full h-32 p-2 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />

            <label className="text-black text-base md:text-2xl fh:text-3xl mb-4">
              {t("Privacy")}*
            </label>
            <div className="flex items-start  mb-4">
              <input
                type="checkbox"
                name="privacy"
                checked={formData.privacy}
                onChange={handleChange}
                required
                className="hover:cursor-pointer mr-2 w-4 h-4 md:w-6 md:h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
              />
              <span className="text-black text-sm md:text-lg fh:text-xl">
                {t("privacy policy")}*
              </span>
            </div>

            <button
              type="submit"
              className="bg-black text-white py-2 px-5 md:py-4 md:px-8 text-base md:text-xl rounded-none w-full mt-6"
            >
              {t("send")}
            </button>
          </form>
        </div>
        <div className="flex flex-col items-start md:items-center w-full md:w-1/3 h-full mt-10 lg:mt-0">
          <div className="flex flex-col justify-start items-start text-black">
            <h3 className="text-xl md:text-3xl fh:text-4xl uppercase italic font-semibold">
              Braglia s.r.l
            </h3>
            <p className="text-lg md:text-xl fh:text-3xl">
              {t("street")} Martin Lutero, 4
            </p>
            <p className="text-lg md:text-xl fh:text-3xl">42122</p>
            <p className="text-lg md:text-xl fh:text-3xl">
              Reggio Emilia, Italy (UE)
            </p>
            <p className="text-lg md:text-xl fh:text-3xl uppercase">
              Vat no. 00443530357
            </p>
            <p className="text-lg md:text-xl fh:text-3xl my-10 md:my-5 fh:my-10">
              +39 0522 340648
            </p>
            <p className="text-lg md:text-xl fh:text-3xl font-semibold">
              {t("general information")}:
            </p>
            <p className="text-lg md:text-xl fh:text-3xl mb-10">
              info@braglia.it
            </p>
            <p className="text-lg md:text-xl fh:text-3xl font-semibold">
              {t("Orders")}
            </p>
            <p className="text-lg md:text-xl fh:text-3xl">orders@braglia.it</p>
          </div>

          <div className="hidden-mobile lg:flex flex-col space-y-5 absolute w-1/4 top-[50%] md:top-[75%] md:right-20">
            <Link
              to="/company"
              className="uppercase text-lg md:text-2xl border-2 border-black text-center py-3 px-5 md:px-20 text-black hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-700 ease-in-out "
            >
              {t("company")}
            </Link>

            <Link
              to="/contacts"
              className="uppercase text-lg md:text-2xl border-2 border-black bg-black text-center py-3 px-10 md:px-20 text-white 
            transition-all duration-1000 ease-in-out cursor-not-allowed"
            >
              {t("contacts")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
