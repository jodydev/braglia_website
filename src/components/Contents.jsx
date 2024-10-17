import { contentsData } from "../data/contentsData";

const Contents = () => {
  return (
    <div className="container mx-auto 2xl:px-60 py-8">
      {contentsData.map((content, index) => (
        <div
          key={content.id}
          className={`flex flex-col md:flex-row items-center gap-10 mb-20 2xl:mb-60 ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="md:w-1/2 p-4">
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-auto hover:scale-105 transition-all duration-500 ease-in-out shadow-lg rounded-2xl"
            />
          </div>
          <div className={`${index === 0 || 2 ? "" : ""} md:w-1/2 p-5`}>
            <h3 className="title-animation text-6xl 2xl:text-8xl font-bold mb-4">
              {content.title}
            </h3>
            <p className="italic mt-10 2xl:text-2xl">{content.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
