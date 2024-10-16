import React, { useState, useEffect } from "react";
import { FaDroplet, FaCircle, FaSquareFull } from "react-icons/fa6";
import { RiEqualFill } from "react-icons/ri";
import { TbMedicalCrossFilled } from "react-icons/tb";

const getInitialPositions = () => {
  if (window.innerWidth >= 2440) {
    // 2xl breakpoint
    return [
      { top: "200px", left: "-250px" },
      { top: "auto", bottom: "50px", left: "400px" },
      { top: "auto", bottom: "-50px", left: "1000px" },
      { top: "auto", bottom: "50px", left: "1800px" },
      { top: "-250px", left: "700px" },
      { top: "-300px", left: "1500px" },
      { top: "300px", left: "1200px" },
    ];
  } else if (window.innerWidth >= 1920) {
    // xl breakpoint
    return [
      { top: "150px", left: "-200px" },
      { top: "auto", bottom: "40px", left: "300px" },
      { top: "auto", bottom: "-40px", left: "800px" },
      { top: "auto", bottom: "40px", left: "1500px" },
      { top: "-200px", left: "500px" },
      { top: "-250px", left: "1000px" },
      { top: "250px", left: "900px" },
    ];
  } else if (window.innerWidth >= 768) {
    // md breakpoint
    return [
      { top: "120px", left: "-160px" },
      { top: "auto", bottom: "30px", left: "240px" },
      { top: "auto", bottom: "-30px", left: "640px" },
      { top: "auto", bottom: "30px", left: "1200px" },
      { top: "-160px", left: "400px" },
      { top: "-200px", left: "800px" },
      { top: "200px", left: "720px" },
    ];
  } else if (window.innerWidth >= 640) {
    // sm breakpoint
    return [
      { top: "40px", left: "-40px" },
      { top: "auto", bottom: "8px", left: "80px" },
      { top: "auto", bottom: "-8px", left: "200px" },
      { top: "auto", bottom: "8px", left: "300px" },
      { top: "-40px", left: "120px" },
      { top: "-80px", left: "240px" },
      { top: "80px", left: "180px" },
    ];
  } else {
    // default for smaller screens
    return [
      { top: "20px", left: "-20px" },
      { top: "auto", bottom: "4px", left: "40px" },
      { top: "auto", bottom: "-4px", left: "100px" },
      { top: "auto", bottom: "4px", left: "150px" },
      { top: "-20px", left: "60px" },
      { top: "-40px", left: "120px" },
      { top: "40px", left: "90px" },
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
      <FaDroplet
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[0]}
      />
      <FaCircle
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[1]}
      />
      <RiEqualFill
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[600px] 2xl:w-[600px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[2]}
      />
      <FaCircle
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[3]}
      />
      <FaSquareFull
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[400px] 2xl:w-[400px] text-primary absolute rotate-45 transition-all duration-1000 ease-in-out"
        style={positions[4]}
      />
      <TbMedicalCrossFilled
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[600px] 2xl:w-[600px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[5]}
      />
      <FaCircle
        className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:w-[350px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[500px] text-primary absolute transition-all duration-1000 ease-in-out"
        style={positions[6]}
      />
    </div>
  );
};

export default BackgroundAnimation;