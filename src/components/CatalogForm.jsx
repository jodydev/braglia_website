import { RiDownloadLine } from "react-icons/ri";

const CatalogForm = () => {
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
    <section id="catalog" className="flex-row h-100 w-screen md:p-20">
      <div className="flex-col">
        <h2 className="text-black md:text-6xl xl:text-8xl italic w-full -z-50 mb-10">
          Cataloghi
        </h2>
        <p className="text-black text-4xl ms-3">
          Catalogo Completo
          <RiDownloadLine
            onClick={() => downloadCatalog(category.fileName)}
            className="ms-3 inline-block text-4xl cursor-pointer"
          />
        </p>
      </div>
      <div className="flex flex-row justify-between mt-20 xl:mt-0">
        <div className="flex justify-end items-start w-2/3">
          <div className="flex flex-col w-full max-w-2xl">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-row w-full border-b-2 border-black mb-3 py-5"
              >
                <div className="flex flex-col w-1/2 justify-start items-start">
                  <p className="text-black text-5xl">{category.name}</p>
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

export default CatalogForm;
