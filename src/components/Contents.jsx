import React from "react";

const contentsData = [
  {
    id: 1,
    title: "Innovazione e tecnologia",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunctincidunt nunc nec, fermentum nunc.",
    image:
      "https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Qualità e sicurezza",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunctincidunt nunc nec, fermentum nunc.",
    image:
      "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Organizzazione e risorse",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunctincidunt nunc nec, fermentum nunc.",
    image:
      "https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Creatività, ricerca e sviluppo",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunc, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur us sodales, tincidunt nunc nec, fermentum nunctincidunt nunc nec, fermentum nunc.",
    image:
      "https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Contents = () => {
  return (
    <div className="container mx-auto py-8">
      {contentsData.map((content, index) => (
        <div
          key={content.id}
          className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
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
          <div className="md:w-1/2 p-5">
            <h3 className="title-animation text-6xl font-bold mb-4">
              {content.title}
            </h3>
            <p className="italic mt-10">{content.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
