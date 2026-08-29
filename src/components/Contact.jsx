import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// TODO: EmailJS dashboard (emailjs.com) se ye 3 values daalo
const SERVICE_ID = "service_l7vuoka";
const TEMPLATE_ID = "template_3i90q5i";
const PUBLIC_KEY = "jvj5SIFFafJJxtML_";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | "success" | "error"
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
 
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setStatus("error");
      });
  };
 
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
 
      {/* Contact Form */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
 
        <h2 className={styles.sectionHeadText}>
          Contact.
        </h2>
 
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
 
          {/* Name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
 
            <input
              type="text"
              name="name"
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
 
          {/* Email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
 
            <input
              type="email"
              name="email"
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
 
          {/* Message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
            </span>
 
            <textarea
              rows="7"
              name="message"
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
              required
            />
          </label>
 
          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#1d1740] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
 
          {/* Status feedback */}
          {status === "success" && (
            <p className="text-green-400 font-medium">
              ✓ Message sent successfully! I'll get back to you soon.
            </p>
          )}
 
          {status === "error" && (
            <p className="text-red-400 font-medium">
              ✗ Something went wrong. Please try again or email me directly.
            </p>
          )}
 
        </form>
      </motion.div>
 
      {/* Earth Canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
 
    </div>
  );
};
 
export default SectionWrapper(Contact, "contact");
 