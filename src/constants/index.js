// ================= IMAGE & VIDEO IMPORTS =================
// Vite ke liye src/assets ke andar ki files IMPORT karni padti hain,
// string path ("/projects/xyz.png") sirf public/ folder ke liye kaam karta hai.

import dpiDashboard from "../assets/projects/dpi-dashboard.png";

import websiteBuilderImg from "../assets/projects/website.png";
import websiteBuilderVideo from "../assets/projects/Website_generate.mp4";

import shoppingImg from "../assets/projects/Shopping.png";
import shoppingVideo from "../assets/projects/Shopping.mp4";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: "/icons/html5.png",
  },
  {
    name: "CSS 3",
    icon: "/icons/css.png",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.png",
  },
  {
    name: "React JS",
    icon: "/icons/R.png",
  },
  {
    name: "Express",
    icon: "/icons/express.png",
  },
  {
    name: "Node JS",
    icon: "/icons/node.png",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.png",
  },
  {
    name: "Python",
    icon: "/icons/python.png",
  },
  {
    name: "Django",
    icon: "/icons/dj.png",
  },
  {
    name: "NextJS",
    icon: "/icons/nextjs.png",
  },
     {
    name: "Tailwind",
    icon: "/icons/tailwind.png",
  },
  {
    name: "Typescript",
    icon: "/icons/typescript.png",
  },
  {
    name: "AWS",
    icon: "/icons/aws.png",
  },
     {
    name: "Docker",
    icon: "/icons/docker.png",
  },
  {
    name: "Azure",
    icon: "/icons/azure.png",
  },
  {
    name: "SQL",
    icon: "/icons/sql.png",
  },
  {
    name: "Git",
    icon: "/icons/git1.png",
  },
];

export const experiences = [
  // Experience section abhi intentionally empty hai.
  // Future mein actual experience yahan add karenge.
];

export const testimonials = [];

export const projects = [
  {
    name: "DPI Network Platform",
    description:
      "Real-time Deep Packet Inspection system that captures live network traffic, extracts hostnames from encrypted HTTPS via TLS SNI parsing, and actively blocks domains at the OS level by injecting TCP RST packets — similar to how ISPs and enterprise firewalls filter traffic. Built from scratch to understand DPI, TLS, and network-layer enforcement.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: dpiDashboard,
    video: null,
    source_code_link: "https://github.com/Luckybisht2811/dpi-network-platform",
    live_demo_link: null,
  },

  {
    name: "Unicorn.ai — AI Website Builder",
    description:
      "An AI-powered website builder that lets users generate complete, ready-to-use websites from a simple text prompt. Built on the MERN stack with a React drag-and-drop-style editor on the frontend and a Node/Express API that handles AI-driven content and layout generation, with results persisted to MongoDB so users can revisit and edit their generated sites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: websiteBuilderImg,
    video: websiteBuilderVideo,
    source_code_link: "https://github.com/Luckybisht2811/Website_Builder",
    live_demo_link: "https://website-builder-1-2gqr.onrender.com/",
  },

  {
    name: "ShoppingLyx — eCommerce with AI Chat Assistant",
    description:
      "A full-stack Django eCommerce platform where users browse products across categories, manage their cart, checkout with Cash on Delivery or Razorpay online payments, and track order history. Includes an integrated AI shopping assistant to help users find products, plus an admin dashboard for managing inventory and orders.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "razorpay",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingImg,
    video: shoppingVideo,
    source_code_link: "https://github.com/Luckybisht2811/shopping-website-django",
    live_demo_link: "https://lucky-store28.onrender.com/",
  },
];