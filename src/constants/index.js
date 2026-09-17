// ================= IMAGE & VIDEO IMPORTS =================
// Vite ke liye src/assets ke andar ki files IMPORT karni padti hain,
// string path ("/projects/xyz.png") sirf public/ folder ke liye kaam karta hai.

import dpiDashboard from "../assets/projects/dpi-dashboard.png";

import aiBuddyImg from "../assets/projects/AI_Interview_buddy.png";
import aiBuddyVideo from "../assets/projects/AI_Interview_buddy.mp4";

import websiteBuilderImg from "../assets/projects/website.png";
import websiteBuilderVideo from "../assets/projects/Website_generate.mp4";

import expenceTrackerVideo from "../assets/projects/SMS_expence.mp4";
import expenceTrackerImg from "../assets/projects/sms.png";

import shoppingImg from "../assets/projects/Shopping.png";
import shoppingVideo from "../assets/projects/Shopping.mp4";
import concentrixLogo from "../assets/company/cnx.png";
import PlacemantraLogo from "../assets/company/p.jpeg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience"
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
  { title: "Analyst",
    company_name: "Concentrix Technology India Private Limited",
    icon: concentrixLogo,
    iconBg: "#E6DEDD",
    date: "July 2025 - January 2026",
    points: [
      "Analyzed data and processes to identify patterns and improve operational efficiency, working with structured datasets and reporting tools in a fast-paced corporate environment.",
      "Collaborated with cross-functional teams and communicated findings clearly, building strong professional and problem-solving habits applicable to real-world software projects.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Placemantra",
    icon: PlacemantraLogo,
    iconBg: "#383E56",
    date: "March 2025 - May 2025",
    points: [
      "Worked on data analysis and machine learning projects using Python, gaining hands-on experience with data cleaning, visualization, and building predictive models.",
      "Strengthened problem-solving and analytical thinking skills that translate directly into writing efficient, logic-driven code as a developer.",
    ],
  }

];

export const testimonials = [];

export const projects = [
  {
    name: "DPI Network Platform",
    description:
      "Real-time Deep Packet Inspection system that captures live network traffic, extracts hostnames from encrypted HTTPS via TLS SNI parsing, and actively blocks domains at the OS level by injecting TCP RST packets — similar to how ISPs and enterprise firewalls filter traffic. Built from scratch to understand DPI, TLS, and network-layer enforcement.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "redis", color: "pink-text-gradient" },
    ],
    image: dpiDashboard,
    video: null,
    source_code_link: "https://github.com/Luckybisht2811/dpi-network-platform",
    live_demo_link: null,
  },
  {
    name: "AI Interview-Buddy",
    description:
    "AI-powered mock interview platform that simulates real interview experiences, generates personalized questions, analyzes responses, and provides detailed performance feedback to help users improve their interview skills.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "Firebase", color: "red-text-gradient" },
      { name: "OpenRouter", color: "yellow-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: aiBuddyImg,
    video: aiBuddyVideo,
    source_code_link: "https://github.com/Luckybisht2811/ai-interview-buddy",
    live_demo_link: "https://ai-interview-buddy-kappa.vercel.app/",
  },

  {
    name: "Unicorn.ai — AI Website Builder",
    description:
      "An AI-powered website builder that lets users generate complete, ready-to-use websites from a simple text prompt. Built on the MERN stack with a React drag-and-drop-style editor on the frontend and a Node/Express API that handles AI-driven content and layout generation, with results persisted to MongoDB so users can revisit and edit their generated sites.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
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
      { name: "django", color: "blue-text-gradient" },
      { name: "razorpay", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: shoppingImg,
    video: shoppingVideo,
    source_code_link: "https://github.com/Luckybisht2811/shopping-website-django",
    live_demo_link: "https://lucky-store28.onrender.com/",
  },

  {
    name: "Ledgerly — Auto Expense Tracker from SMS/Email",
    description:
      "A full-stack MERN expense tracker that eliminates manual expense logging by parsing real bank/UPI transaction SMS and emails through a custom regex extraction engine, then auto-categorizing each transaction with a rule-based system that learns from user corrections — a category fix on one transaction is remembered for every future transaction from that merchant. Includes a merchant-grouping algorithm that detects recurring subscriptions by analyzing charge-amount consistency and interval patterns between transactions, per-category budget alerts, and a live dashboard driven by MongoDB aggregation pipelines for spending trends and category breakdowns.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "red-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
    ],
    image: expenceTrackerImg,
    video: expenceTrackerVideo,
    source_code_link: "https://github.com/Luckybisht2811/ledgerly",
    live_demo_link: "https://ledgerly-seven-inky.vercel.app/",
  },
];