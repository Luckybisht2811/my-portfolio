import React, { useEffect, useRef, useState } from "react";
import EarthCanvas from "./Earth";

const LazyEarth = () => {
  const ref = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full">
      {hasLoaded ? <EarthCanvas /> : null}
    </div>
  );
};

export default LazyEarth;