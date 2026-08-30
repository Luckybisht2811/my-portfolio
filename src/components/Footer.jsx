import React from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import { navLinks } from "../constants";

const EMAIL = "lalitsinghbisht282002@gmail.com";

const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
  "Portfolio Contact",
)}`;
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050816] border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* ================= BRAND ================= */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
              <p className="text-white text-[18px] font-bold">
                <span className="text-[#72a1de]">Lalit</span>
                Code
                <span className="text-[#72a1de]">.dev</span>
              </p>
            </Link>

            <p className="mt-4 text-secondary text-[14px] leading-6">
              Software Engineer focused on building backend systems, data
              pipelines, and full-stack web applications. Always learning,
              always shipping.
            </p>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className="text-secondary hover:text-white text-[14px] transition-colors"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONNECT ================= */}
          <div>
            <h4 className="text-white font-semibold text-[16px] mb-4">
              Connect
            </h4>

            <div className="flex items-center gap-5 mb-4">
              <a
                href="https://github.com/luckybisht2811"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-secondary hover:text-white text-2xl transition-all hover:scale-110"
              >
                <i className="bx bxl-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/lalitsinghbisht28/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-secondary hover:text-white text-2xl transition-all hover:scale-110"
              >
                <i className="bx bxl-linkedin-square"></i>
              </a>

              <a
                href="https://x.com/lalit28112002"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="text-secondary hover:text-white text-2xl transition-all hover:scale-110"
              >
                <i className="bx bxl-twitter"></i>
              </a>

              <a
                href={gmailComposeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="text-secondary hover:text-white text-2xl transition-all hover:scale-110"
              >
                <i className="bx bxs-envelope"></i>
              </a>
            </div>

            <a
              href={gmailComposeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[14px] transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-secondary text-[13px]">
            © {year} Lalit Singh Bisht. All rights reserved.
          </p>
          <p className="text-secondary text-[13px]">
            Let's work and build something great together
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
