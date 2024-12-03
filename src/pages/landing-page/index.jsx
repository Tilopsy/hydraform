import React from 'react';
import {
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF,
  FaTwitter, FaGoogle, FaPinterestP, FaShoppingCart
} from 'react-icons/fa';
import logo from '../../assets/images/logo-orig.png';
import backgroundImage from '../../assets/images/background3.jpg';
import workersImage from '../../assets/images/who-we.jpg';
import serviceImage1 from '../../assets/images/l-news-1.jpg';
import serviceImage2 from '../../assets/images/l-news-2.jpg';
import serviceImage3 from '../../assets/images/l-news-3.jpg';
import aboutUsImage from '../../assets/images/construction1.webp';
import blogImage1 from '../../assets/images/brickwall1.jpg';
import blogImage2 from '../../assets/images/construction2.jpg';
import blogImage3 from '../../assets/images/brickwall2.jpg';
import blogImage4 from '../../assets/images/entrepreneur1.jpeg';
import blogImage5 from '../../assets/images/brickhouse.jpeg';
import blogImage6 from '../../assets/images/entrepreneurswithblocks.jpeg';

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
              <span>1234 Ghana, West Africa</span>
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
        <div className="relative bg-cover bg-center h-dvh" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="bg-white w-full opacity-90">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-20" />
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
            <img src={workersImage} alt="Workers" className="max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={serviceImage1} alt="Service 1" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Service 1</h3>
                <p className="text-gray-700 mt-2">Description of service 1.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={serviceImage2} alt="Service 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Service 2</h3>
                <p className="text-gray-700 mt-2">Description of service 2.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={serviceImage3} alt="Service 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Service 3</h3>
                <p className="text-gray-700 mt-2">Description of service 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img src={aboutUsImage} alt="About Us" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 font-semibold ml-4">
                We are dedicated to providing the best service in the industry. Our team of experts is here to help you with any questions or concerns you may have. We believe in building strong relationships with our clients and providing top-notch customer service. <br />
                We are dedicated to providing the best service in the industry. Our team of experts is here to help you with any questions or concerns you may have. We believe in building strong relationships with our clients and providing top-notch customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage1} alt="Blog Post 1" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 1</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 1.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage2} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 2</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 2.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage3} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 3</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 3.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage4} alt="Blog Post 4" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 4</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 4.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage5} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 5</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 5.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage6} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 6</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 6.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Us Section */}
      <section id="contact" className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2"
                      rows="4"
                      placeholder="Enter your message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-700 text-white rounded-lg px-4 py-2 hover:bg-yellow-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Contact Information</h3>
                <p className="text-gray-700">Feel free to get in touch with us through any of the methods below:</p>
                <div className="mt-4">
                  <p className="flex items-center space-x-2">
                    <FaPhoneAlt />
                    <span>(233) - 545061734</span>
                  </p>
                  <p className="flex items-center space-x-2 mt-2">
                    <FaMapMarkerAlt />
                    <span>1234 Ghana, West Africa</span>
                  </p>
                  <p className="flex items-center space-x-2 mt-2">
                    <FaClock />
                    <span>Open 24/7</span>
                  </p>
                </div>
                <div className="mt-4 flex space-x-4">
                  <FaFacebookF className="text-xl" />
                  <FaTwitter className="text-xl" />
                  <FaGoogle className="text-xl" />
                  <FaPinterestP className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Vincecole Ventures. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-yellow-600">Privacy Policy</a>
            <a href="#" className="text-white hover:text-yellow-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
