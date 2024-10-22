import React, { useEffect, useState } from "react";

const Comunications = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      id="comunications"
      className={`h-screen w-screen bg-secondary ${animate ? "slide-in" : ""}`}
    >
      <div className="h-screen w-screen bg-secondary flex items-center justify-center">
        <p className="text-6xl text-white">To be defined</p>
      </div>
    </div>
  );
};

export default Comunications;
