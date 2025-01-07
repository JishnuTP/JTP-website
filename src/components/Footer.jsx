import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-0 md:flex-row md:space-x-6">
          <img src="/logo/jtp-logo.png" alt="Your Logo" className="w-16 h-10" />
          <div className="flex space-x-4">
            <a
              href="https://github.com/jishnuttp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Information and Copyright */}
        <div className="flex flex-col items-center md:items-end text-sm space-y-4 md:space-y-0">
          <p className="text-center md:text-right">
            © 2025 Jishnu T P. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <FaLocationArrow className="mr-2" />
              <span>Kerala, Malappuram district, India</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+91-9037731597</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>tpjishnu5@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;