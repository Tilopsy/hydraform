import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-4 text-red-700 md:pl-16">Follow Us</h2>
          <div className="flex justify-center space-x-10">
            <a href="https://web.facebook.com/people/Vincecole-Ventures/61570410250402/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <FaFacebook size={28} />
            </a>
            <a href="https://www.tiktok.com/@vincecole.ventures?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <FaTiktok size={28} />
            </a>
            <a href="https://www.instagram.com/vincecoleventures1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <FaInstagram size={28} />
            </a>
            <a href="https://www.linkedin.com/in/vincecole-ventures-941456340/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <FaLinkedin size={28} />
            </a>
            {/* <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
              <FaWhatsapp size={28} />
            </a> */}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start md:pl-16">
          <h2 className="text-2xl font-bold mb-4 text-red-700 md:pl-16">Contact Us</h2>
          <p className="flex items-center space-x-3 mb-2">
            <FaEnvelope />
            <span className="text-lg">hydraform2024@gmail.com</span>
          </p>
          <p className="flex items-center space-x-3 md:pl-9">
            <FaPhone />
            <span className="text-lg">+233-54-506-1734</span>
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center md:items-start md:pl-24">
          <h2 className="text-2xl font-bold mb-4 text-red-700 md:pl-16">Our Location</h2>
          <p className="flex items-center space-x-3">
            <FaMapMarkerAlt />
            <span className="text-lg">Takoradi-Western Region, Ghana</span>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-blue-400 pt-6 text-white">
        <p>© 2024 Vincecole Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
