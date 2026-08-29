import React, { useEffect, useRef } from "react";
import "./StarsBackground.css";

/**
 * Renders a full-screen twinkling starfield.
 * Place this ONCE, near the top of your App (outside Navbar/Hero),
 * with fixed positioning so it sits behind everything.
 *
 * Usage:
 *   <StarsBackground count={150} />
 */
const StarsBackground = ({ count = 150 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear any existing stars (avoids duplicates on hot-reload)
    container.innerHTML = "";

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";

      // Random position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Random size (1px - 3px)
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random twinkle duration & delay so they don't blink in sync
      star.style.animationDuration = `${2 + Math.random() * 3}s, ${15 + Math.random() * 20}s`;
      star.style.animationDelay = `${Math.random() * 5}s, ${Math.random() * 10}s`;

      // Random drift direction/distance for movement
      const driftX = (Math.random() - 0.5) * 200; // -100px to 100px
      const driftY = (Math.random() - 0.5) * 200;
      star.style.setProperty("--drift-x", `${driftX}px`);
      star.style.setProperty("--drift-y", `${driftY}px`);

      fragment.appendChild(star);
    }

    container.appendChild(fragment);
  }, [count]);

  return <div ref={containerRef} className="stars-container" aria-hidden="true" />;
};

export default StarsBackground;