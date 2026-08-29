import React, { useEffect, useState } from "react";
import { logo } from "../assets";

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <img
      src={logo}
      alt=""
      className="fixed pointer-events-none z-[9999] w-10 h-10 object-contain"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-5px, -5px)",
      }}
    />
  );
};

export default CustomCursor;