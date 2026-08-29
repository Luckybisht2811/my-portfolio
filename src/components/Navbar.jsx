import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const EMAIL = "lalitsinghbisht282002@gmail.com";

// Gmail web compose link — "To" field pre-filled, opens in a new tab.
// Works reliably in browsers even when no default mail app is set up.
const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
  "Portfolio Contact"
)}`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-5">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="boy.png"
            className="w-11 h-11 object-contain bg-[#050816]"
          />

          <p className="text-white text-[18px] font-bold cursor-pointer">
            <span className="text-[#72a1de]">Lalit</span>
            Singh
            <span className="text-[#72a1de]">Bisht</span>
          </p>
        </Link>


        {/* ================= DESKTOP NAV ================= */}

        <ul className="hidden sm:flex items-center gap-8">

          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`relative cursor-pointer text-[16px] font-medium transition-all duration-300 ${
                active === nav.title
                  ? "text-white"
                  : "text-secondary hover:text-white"
              }`}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>

              {active === nav.title && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#72a1de]" />
              )}
            </li>
          ))}

        </ul>


        {/* ================= SOCIAL ICONS ================= */}

        <div className="hidden sm:flex items-center gap-4">

          <a
            href="https://github.com/luckybisht2811"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="text-secondary hover:text-white text-xl transition-all duration-300 hover:scale-110"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/lalitsinghbisht28/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="text-secondary hover:text-white text-xl transition-all duration-300 hover:scale-110"
          >
            <i className="bx bxl-linkedin-square"></i>
          </a>

          <a
            href="https://x.com/lalit28112002"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            title="Twitter / X"
            className="text-secondary hover:text-white text-xl transition-all duration-300 hover:scale-110"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href={gmailComposeLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            title="Email"
            className="text-secondary hover:text-white text-xl transition-all duration-300 hover:scale-110"
          >
            <i className="bx bxs-envelope"></i>
          </a>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <div className="sm:hidden flex items-center">

          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

        </div>


        {/* ================= MOBILE MENU ================= */}

        {toggle && (
          <div className="absolute top-[80px] right-5 w-[230px] p-5 rounded-2xl bg-[#050816]/95 backdrop-blur-xl border border-white/10 shadow-xl">

            <ul className="flex flex-col gap-5">

              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[17px] font-medium ${
                    active === nav.title
                      ? "text-white"
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}

              {/* Mobile Social Icons */}

              <div className="flex gap-5 pt-4 border-t border-white/10">

                <a
                  href="https://github.com/luckybisht2811"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-secondary hover:text-white text-xl"
                >
                  <i className="bx bxl-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/lalitsinghbisht28/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-secondary hover:text-white text-xl"
                >
                  <i className="bx bxl-linkedin-square"></i>
                </a>

                <a
                  href="https://x.com/lalit28112002"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="text-secondary hover:text-white text-xl"
                >
                  <i className="bx bxl-twitter"></i>
                </a>

                <a
                  href={gmailComposeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="text-secondary hover:text-white text-xl"
                >
                  <i className="bx bxs-envelope"></i>
                </a>

              </div>

            </ul>

          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;