import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
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
      contact1: false,
      contact2: false,
    },
    subject: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name.startsWith("companyType")) {
        const option = name.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          companyType: {
            ...prev.companyType,
            [option]: checked,
          },
        }));
      } else if (name.startsWith("businessContacts")) {
        const contact = name.split(".")[1];
        setFormData((prev) => ({
          ...prev,
          businessContacts: {
            ...prev.businessContacts,
            [contact]: checked,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: checked,
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <section
      id="contact-form"
      className="flex-row h-100 w-screen bg-white relative md:p-20"
    >
      <div className="flex-col">
        <h2 className="text-black md:text-6xl xl:text-8xl italic w-full -z-50 mb-20">Contatti</h2>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center w-2/3">
          <form
            className="flex flex-col items-start justify-center w-full max-w-2xl"
            onSubmit={handleSubmit}
          >
            <label className="text-black text-2xl mb-4">Azienda*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />
            <label className="text-black text-2xl mb-4">Sig*</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="w-full p-4 mb-4 border-2 border-black focus:border-black focus:ring-0"
            />

            <label className="text-black text-2xl mb-4">Email*</label>
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
                <label className="text-black text-2xl mb-4">
                  Tipo Azienda*
                </label>

                <label className="flex items-center text-xl mb-4">
                  <input
                    type="checkbox"
                    name="companyType.option1"
                    checked={formData.companyType.option1}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  Costruttore
                </label>
                <label className="flex items-center text-xl mb-4">
                  <input
                    type="checkbox"
                    name="companyType.option2"
                    checked={formData.companyType.option2}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  Azienda di distribuzione
                </label>
                <label className="flex items-center text-xl mb-4">
                  <input
                    type="checkbox"
                    name="companyType.option3"
                    checked={formData.companyType.option3}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  Rivenditore
                </label>
                <label className="flex items-center text-xl mb-4">
                  <input
                    type="checkbox"
                    name="companyType.option4"
                    checked={formData.companyType.option4}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  Import Export
                </label>
                <label className="flex items-center text-xl">
                  <input
                    type="checkbox"
                    name="companyType.option5"
                    checked={formData.companyType.option5}
                    onChange={handleChange}
                    className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                  />
                  Altro
                </label>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-black text-2xl mb-4">
                Contatti Aziendali*
              </label>

              <label className="flex items-center text-xl mb-4">
                <input
                  type="checkbox"
                  name="businessContacts.contact1"
                  checked={formData.businessContacts.contact1}
                  onChange={handleChange}
                  className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                />
                Commerciale Italia
              </label>
              <label className="flex items-center text-xl mb-4">
                <input
                  type="checkbox"
                  name="businessContacts.contact2"
                  checked={formData.businessContacts.contact2}
                  onChange={handleChange}
                  className="hover:cursor-pointer mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                />
                Export Department
              </label>
            </div>

            <label className="text-black text-2xl mb-4">Oggetto</label>
            <textarea
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-10 mb-4 border-2 border-black focus:border-black focus:ring-0"
            ></textarea>

            <div className="flex flex-col">
              <h3 className="text-black text-2xl font-semibold mb-2">
                Privacy*
              </h3>
              <p className="text-black text-lg font-normal mb-4">
                Il sottoscritto prende dell’informativa ai sensi dell’art. 13
                del D.Lgs. 196/2003 e dell’art. 13 del Regolamento UE 2016/679 e
                acconsente al trattamento dei propri dati personali possano
                essere trattati per gli scopi indicati ed essere oggetto di
                comunicazione ai soggetti e per le finalità dichiarate.
              </p>
              <label className="flex items-center text-xl mb-4">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mr-2 w-6 h-6 border-2 border-black rounded-none focus:ring-0 checked:bg-black"
                />
                Acconsento
              </label>
            </div>

            <div className="flex items-center justify-end mt-10 w-full">
              <button
                type="submit"
                className="flex flex-row border-2 border-black text-center py-3 px-10 hover:cursor-pointer transition-all duration-1000 ease-in-out"
              >
                <span className="uppercase text-2xl flex items-center">
                  Invia
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center w-1/3 ">
          <div className="flex flex-col justify-start items-start text-black">
            <h3 className="text-4xl uppercase italic font-semibold">
              Braglia s.r.l
            </h3>
            <p className="text-3xl">via Martin Lutero, 4</p>
            <p className="text-3xl">42122</p>
            <p className="text-3xl">Reggio Emilia, Italy (UE)</p>
            <p className="text-3xl uppercase">Vat no. 00443530357</p>
            <p className="text-3xl my-10">+39 0522 340648</p>
            <p className="text-3xl font-semibold">Informazioni generali:</p>
            <p className="text-3xl mb-10">info@braglia.it</p>
            <p className="text-3xl font-semibold">Ordini</p>
            <p className="text-3xl">orders@braglia.it</p>
          </div>
          <div className="sticky mt-40 flex-col space-y-5">
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/company" className="uppercase text-2xl">
                Azienda
              </a>
            </div>
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/comunications" className="uppercase text-2xl">
                Comunicazione
              </a>
            </div>
            <div className="border-2 border-black text-center py-3 px-20 text-black hover:bg-gray-200 hover:cursor-pointer transition-all duration-1000 ease-in-out">
              <a href="/contacts" className="uppercase text-2xl">
                Contatti
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
