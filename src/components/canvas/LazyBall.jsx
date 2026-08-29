import React, { useEffect, useRef, useState } from "react";
import BallCanvas from "./Ball";

const LazyBall = ({ icon }) => {
  const ref = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.disconnect(); // ← ek baar dikhne ke baad observe karna band
        }
      },
      { threshold: 0.1, rootMargin: "200px" } // rootMargin = thoda pehle hi load kar do, smooth lage
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {hasLoaded ? (
        <BallCanvas icon={icon} />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-tertiary animate-pulse" />
        </div>
      )}
    </div>
  );
};

export default LazyBall;