import React, { useState, useEffect } from "react";
import One from "../assets/images/icons/1.png";
import Two from "../assets/images/icons/2.png";
import Three from "../assets/images/icons/3.png";
import Four from "../assets/images/icons/4.png";
import Five from "../assets/images/icons/5.png";
import Six from "../assets/images/icons/6.png";
import Seven from "../assets/images/icons/7.png";

const isMobile = () => window.innerWidth < 768;

const getInitialPositions = () => {
  if (isMobile()) {
    return [
      { top: "5%", left: "40%" },
      { top: "auto", bottom: "10px", left: "10%" },
      { top: "55%", bottom: "10px", left: "70%" }, 
    ];
  } else if (window.innerWidth >= 2440) {
    return [
      { top: "180px", left: "-250px" }, 
      { top: "auto", bottom: "100px", left: "400px" },
      { top: "auto", bottom: "-50px", left: "1200px" },
      { top: "auto", bottom: "50px", left: "1800px" },
      { top: "-260px", left: "700px" },
      { top: "-310px", left: "1600px" },
      { top: "290px", left: "1400px" },
    ];
  } else if (window.innerWidth >= 1920) {
    return [
      { top: "130px", left: "-200px" }, 
      { top: "auto", bottom: "80px", left: "300px" },
      { top: "auto", bottom: "-40px", left: "900px" },
      { top: "auto", bottom: "40px", left: "1500px" },
      { top: "-210px", left: "500px" },
      { top: "-260px", left: "1200px" },
      { top: "240px", left: "900px" },
    ];
  }  else if (window.innerWidth >= 768) {
    return [
      { top: "110px", left: "-160px" },
      { top: "auto", bottom: "30px", left: "240px" },
      { top: "auto", bottom: "-30px", left: "640px" },
      { top: "auto", bottom: "30px", left: "1200px" },
      { top: "-150px", left: "400px" },
      { top: "-190px", left: "800px" },
      { top: "190px", left: "720px" },
    ];
  }
};

const BackgroundAnimation = () => {
  const [positions, setPositions] = useState(getInitialPositions());

  useEffect(() => {
    const handleResize = () => {
      setPositions(getInitialPositions());
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        const firstPosition = newPositions.shift();
        newPositions.push(firstPosition);
        return newPositions;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [One, Two, Three, Four, Five, Six, Seven];
  const displayedImages = isMobile() ? images.slice(0, 3) : images;
  
  return (
    <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 text-secondary opacity-100 z-0">
      {displayedImages.map((src, index) => {
        const isSeven = index === 6; 
        const isOne = index === 0;
        const baseHeight = isSeven ? 200 - 125 : isOne ? 350 : 200; // 150px per "Seven", 200px per le altre
  
        return (
          <img
            key={index}
            src={src}
            alt={`Icon ${index + 1}`}
            className={`
              h-[${baseHeight}px] w-[200px] 
              sm:h-[${baseHeight}px] sm:w-[200px] 
              md:h-[${baseHeight + 50}px] md:w-[250px] 
              lg:h-[${baseHeight + 100}px] lg:w-[300px] 
              fh:h-[${baseHeight + 150}px] fh:w-[350px] 
              2xl:h-[${baseHeight + 150}px] 2xl:w-[350px] 
              text-primary absolute transition-all duration-1000 ease-in-out
            `}
            style={positions[index]}
          />
        );
      })}
    </div>
  );
  
  
};

export default BackgroundAnimation;