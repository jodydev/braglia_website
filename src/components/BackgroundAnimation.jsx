import React, { useState, useEffect } from "react";
import One from "../assets/images/icons/1.png";
import Two from "../assets/images/icons/2.png";
import Three from "../assets/images/icons/3.png";
import Four from "../assets/images/icons/4.png";
import Five from "../assets/images/icons/5.png";
import Six from "../assets/images/icons/6.png";
import Seven from "../assets/images/icons/7.png";

const getInitialPositions = () => {
  if (window.innerWidth >= 2440) {
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
  } else if (window.innerWidth >= 768) {
    return [
      { top: "110px", left: "-160px" },
      { top: "auto", bottom: "30px", left: "240px" },
      { top: "auto", bottom: "-30px", left: "640px" },
      { top: "auto", bottom: "30px", left: "1200px" },
      { top: "-150px", left: "400px" },
      { top: "-190px", left: "800px" },
      { top: "190px", left: "720px" },
    ];
  } else if (window.innerWidth >= 640) {
    return [
      { top: "30px", left: "-40px" },
      { top: "auto", bottom: "8px", left: "80px" },
      { top: "auto", bottom: "-8px", left: "200px" },
      { top: "auto", bottom: "8px", left: "300px" },
      { top: "-50px", left: "120px" },
      { top: "-90px", left: "240px" },
      { top: "70px", left: "180px" },
    ];
  } else {
    return [
      { top: "10px", left: "-20px" },
      { top: "auto", bottom: "4px", left: "40px" },
      { top: "auto", bottom: "-4px", left: "100px" },
      { top: "auto", bottom: "4px", left: "150px" },
      { top: "-30px", left: "60px" },
      { top: "-50px", left: "120px" },
      { top: "30px", left: "90px" },
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

  return (
    <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4 text-secondary opacity-100 z-0">
      <img
        src={One}
        alt="Icon 1"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[0]}
      />
      <img
        src={Two}
        alt="Icon 2"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[1]}
      />
      <img
        src={Three}
        alt="Icon 3"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[2]}
      />
      <img
        src={Four}
        alt="Icon 4"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[3]}
      />
      <img
        src={Five}
        alt="Icon 5"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute rotate-45 transition-all duration-1000 ease-in-out"
        style={positions[4]}
      />
      <img
        src={Six}
        alt="Icon 6"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[5]}
      />
      <img
        src={Seven}
        alt="Icon 7"
        className="h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[6]}
      />
    </div>
  );
};

export default BackgroundAnimation;
