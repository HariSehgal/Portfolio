import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      window.dispatchEvent(
        new CustomEvent("sectionChange", { detail: sectionId })
      );
    }
  };

  return (
    <footer className="text-white py-4 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Hari Sehgal</h2>
        <nav className="flex flex-nowrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://www.facebook.com/hari.sehgal.37/",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/harisehgal4568/",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/hari_sehgal4568",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/HariSehgal",
            },
            {
              icon: <FaTelegram />,
              link: "https://t.me/Hari_Sehgal",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Hari Sehgal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
