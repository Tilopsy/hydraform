import React from 'react';
import {
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF,
  FaTwitter, FaGoogle, FaPinterestP, FaShoppingCart
} from 'react-icons/fa';

const LandingPage = () => {
  return (
    <>
      <header>
        {/* Top bar */}
        <div className="bg-gray-900 text-white flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4 ml-9">
            <div className="flex items-center space-x-1">
              <FaPhoneAlt />
              <span>(233) - 545061734</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt />
              <span>1234 West Africa, Ghana</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaClock />
              <span>Open 24/7</span>
            </div>
          </div>
          <div className="flex space-x-4 mr-9">
            <FaFacebookF />
            <FaTwitter />
            <FaGoogle />
            <FaPinterestP />
          </div>
        </div>

        {/* Main navbar */}
        <div className="relative bg-cover bg-center h-dvh" style={{ backgroundImage: "url('src/assets/images/background3.jpg')" }}>
          <div className="bg-white w-full opacity-90">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
              <div className="flex items-center space-x-2">
                <img src="src/assets/images/logo-orig..png" alt="Logo" className="h-20" />
              </div>
              <nav className="ml-auto space-x-6">
                <a href="#home" className="text-red-700 font-semibold hover:text-yellow-600">HOME</a>
                <a href="#services" className="text-sky-950 font-semibold hover:text-red-700">SERVICES</a>
                <a href="#about" className="text-sky-950 font-semibold hover:text-red-700">ABOUT US</a>
                <a href="#blog" className="text-sky-950 font-semibold hover:text-red-700">BLOG</a>
                <a href="#contact" className="text-sky-950 font-semibold hover:text-red-700">CONTACT</a>
                <a href="#testimonials" className="text-sky-950 font-semibold hover:text-red-700">TESTIMONIALS</a>
              </nav>
              <div className="relative ml-4">
                <button className="text-sky-950 relative">
                  <FaShoppingCart className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-red-700 mb-4">WHO WE ARE?</h2>
            <p className="text-gray-700 font-semibold">
              We are Vincecole Ventures, specialized in Hydrafoam Block Technology; a kind of technology that involves the inoculation of seaweed ashes, cement and clay to form bricks for building. <br />
              Motto: <br /> Seaweed Interlocking Bricks, Environmentally-Friendly Building Material Our Concern!!! <br />
              Mission: <br /> To produce durable, affordable and environmentally-friendly building material for construction. <br />
              Vision: <br /> To produce affordable and durable real estate Houses for individuals and retired workers.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="src/assets/images/workers1.jpeg" alt="Workers" className="" />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <p className="text-center">Services section content goes here.</p>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center">About Us section content goes here.</p>
        </div>
      </section>

      <section id="blog" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
          <p className="text-center">Blog section content goes here.</p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <p className="text-center">Contact Us section content goes here.</p>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <p className="text-center">Testimonials section content goes here.</p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
