import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
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
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
    },
    businessContacts: {
      option1: false,
      option2: false,
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
      toast.error(t("please select at least one company type")); // Messaggio di avviso
      return; // Ferma l'invio del modulo
    }

    if (!isAtLeastOneContactChecked) {
      toast.error(t("please select at least one company contact")); // Messaggio di avviso
      return; // Ferma l'invio del modulo
    }

    const emailParams = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      companyType: Object.keys(formData.companyType)
        .filter((key) => formData.companyType[key])
        .join(", "),
      businessContacts: Object.keys(formData.businessContacts)
        .filter((key) => formData.businessContacts[key])
        .join(", "),
      subject: formData.subject,
      privacy: formData.privacy ? "Yes" : "No",
    };

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact-form" className="flex-row h-100 w-screen p-10 xl:p-20">
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
      <div className="flex flex-row justify-between h-100">
        <div className="flex-col h-100">
          <h2 className="text-black lg:text-6xl xl:text-8xl italic w-full -z-50 mb-20">
            {t("contacts")}
          </h2>
        </div>
        <div className="flex justify-center items-center w-1/3 h-100">
          <form
            className="flex flex-col items-start justify-center w-full max-w-2xl"
            onSubmit={handleSubmit}
          >
            <label className="text-black lg:text-2xl xl:text-3xl mb-4">{t("company")}*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />
            <label className="text-black lg:text-2xl xl:text-3xl mb-4">{t("mr/miss")}*</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />

            <label className="text-black lg:text-2xl xl:text-3xl mb-4">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />

            <div className="mb-4">
              <div className="flex flex-col">
                <label className="text-black lg:text-2xl xl:text-3xl mb-4">
                  {t("company type")}*
                </label>

                {companyTypeOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center text-xl mb-4"
                  >
                    <input
                      type="checkbox"
                      name={`companyType.option${option.id}`}
                      checked={formData.companyType[`option${option.id}`]}
                      onChange={handleChange}
                      className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col mb-4">
              <label className="text-black lg:text-2xl xl:text-3xl mb-4">
                {t("company contacts")}*
              </label>

              {companyContacts.map((contact) => (
                <label
                  key={contact.id}
                  className="flex items-center text-xl mb-4"
                >
                  <input
                    type="checkbox"
                    name={`businessContacts.contact${contact.id}`}
                    checked={formData.businessContacts[`contact${contact.id}`]}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  {contact.label}
                </label>
              ))}
            </div>

            <label className="text-black lg:text-2xl xl:text-3xl mb-4"> {t("object")}</label>
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-10 mb-4 border-2 border-black focus:border-black focus:ring-0"
            ></textarea>

            <div className="flex flex-col">
              <h3 className="text-black lg:text-2xl xl:text-3xl font-semibold mb-2">
                Privacy*
              </h3>
              <p className="text-black text-lg font-normal mb-4">
                {t("privacy policy")}
              </p>
              <label className="flex items-center lg:text-xl xl:text-2xl mb-4">
                <input
                  type="checkbox"
                  name="privacy"
                  required
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                />
                {t("accept")}
              </label>
            </div>

            <div className="flex items-center justify-end mt-10 w-full">
              <button
                type="submit"
                className="flex flex-row border-2 border-black text-center py-3 px-10 hover:cursor-pointer transition-all duration-1000 ease-in-out"
              >
                <span className="uppercase lg:text-xl xl:text-2xl flex items-center">
                  {t("send")}
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center w-1/3 h-100">
          <div className="flex flex-col justify-start items-start text-black">
            <h3 className="lg:text-3xl xl:text-4xl uppercase italic font-semibold">
              Braglia s.r.l
            </h3>
            <p className="lg:text-xl xl:text-3xl">{t("street")} Martin Lutero, 4</p>
            <p className="lg:text-xl xl:text-3xl">42122</p>
            <p className="lg:text-xl xl:text-3xl">Reggio Emilia, Italy (UE)</p>
            <p className="lg:text-xl xl:text-3xl uppercase">Vat no. 00443530357</p>
            <p className="lg:text-xl xl:text-3xl my-10">+39 0522 340648</p>
            <p className="lg:text-xl xl:text-3xl font-semibold">
              {t("general information")}:
            </p>
            <p className="lg:text-xl xl:text-3xl mb-10">info@braglia.it</p>
            <p className="lg:text-xl xl:text-3xl font-semibold">{t("Orders")}</p>
            <p className="lg:text-xl xl:text-3xl">orders@braglia.it</p>
          </div>
          <div className="sticky mt-40 flex-col space-y-5">
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/company" className="uppercase text-2xl">
                {t("company")}
              </a>
            </div>
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/comunications" className="uppercase text-2xl">
                {t("comunications")}
              </a>
            </div>
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/contacts" className="uppercase text-2xl">
                {t("contacts")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
