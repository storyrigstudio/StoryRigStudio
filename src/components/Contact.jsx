import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Ensure you've initialized emailjs with the correct user ID
    emailjs
      .sendForm(
        'service_1mutnkb',  // Replace with your service ID
        'template_a0wwqda',  // Replace with your template ID
        formRef.current,  // Reference to the form
        'RcOgWhFYYvusi0B23'  // Replace with your user/public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="from_name"
              value={form.from_name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="from_email"
              value={form.from_email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
         {/* Social Media Section */}
         <div className="mt-10 flex justify-center gap-6">
         <a href="https://wa.me/916384821366" target="_blank" rel="noopener noreferrer">
            <IoLogoWhatsapp size={30} className="text-white hover:text-green-600 transition" />
          </a>
          <a href="https://www.instagram.com/storyrig_studio/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-white hover:text-pink-500 transition" />
          </a>
          <a href="https://www.youtube.com/@StoryRigStudio" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} className="text-white hover:text-red-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ajith-s-357385325" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-white hover:text-blue-600 transition" />
          </a>
          <a href="https://www.facebook.com/share/19RGgwNtLu/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="text-white hover:text-blue-500 transition" />
          </a>
          <a href="https://x.com/galaxia_fx?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter  size={30} className="text-white hover:text-gray-400 transition" />
          </a>
        </div>
      </motion.div>

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
