import React from 'react';
import {
  FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebookF,
  FaTwitter, FaGoogle, FaPinterestP, FaShoppingCart
} from 'react-icons/fa';
import { StarIcon, QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../../assets/images/hydraform.png';
import backgroundImage from '../../assets/images/hero-bg.jpg';
import videoFile from '../../assets/videos/video-process.mp4';
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
import { FaWhatsapp } from 'react-icons/fa6';


const LandingPage = () => {
  return (
    <>
      <header>

        {/* Main navbar */}
        <div className="relative bg-cover bg-center h-dvh" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="bg-white w-full opacity-90 fixed left-0 top-0">
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
            </div>
          </div>
        </div>
       
      </header>

      {/* Who We Are Section/Video */}
      <section id="home" className="py-20">
  <div className="container mx-auto px-4 flex flex-wrap items-center">
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-red-700 mb-4">WHO WE ARE?</h2>
      <p className="text-gray-700 font-semibold">
        We are Vincecole Ventures, specialized in Hydraform Seaweed Interlock Brick Technology; a kind of technology that involves the inoculation of seaweed ashes, cement and clay to form bricks for building. <br />
        Motto: <br /> Seaweed Interlocking Bricks, Environmentally-Friendly Building Material Our Concern!!! <br />
        Mission: <br /> To produce durable, affordable and environmentally-friendly building material for construction. <br />
        Vision: <br /> To produce affordable and durable real estate Houses for individuals and retired workers.
      </p>
    </div>
    <div className="w-full md:w-1/2 flex justify-center md:pl-36">
      <video controls className="w-full h-auto max-w-full">
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  </div>
</section>

      {/* <section id="home" className="py-20">
    <div className="container mx-auto px-4 flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-red-700 mb-4">WHO WE ARE?</h2>
        <p className="text-gray-700 font-semibold">
          We are Vincecole Ventures, specialized in Hydraform Seaweed Interlock Brick Technology; a kind of technology that involves the inoculation of seaweed ashes, cement and clay to form bricks for building. <br />
          Motto: <br /> Seaweed Interlocking Bricks, Environmentally-Friendly Building Material Our Concern!!! <br />
          Mission: <br /> To produce durable, affordable and environmentally-friendly building material for construction. <br />
          Vision: <br /> To produce affordable and durable real estate Houses for individuals and retired workers.
        </p>
      </div>
      <div className=" md:w-1/2 flex justify-center pl-36">
        <video controls className="h-auto">
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </div>
  </section> */}

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
                <img src={blogImage4} alt="Blog Post 4" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 1</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 1.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage5} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 2</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 2.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage6} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 3</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 3.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage1} alt="Blog Post 1" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 4</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 4.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage2} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 5</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 5.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage3} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 6</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 6.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage4} alt="Blog Post 4" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 7</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 7.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage5} alt="Blog Post 2" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 8</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 8.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img src={blogImage6} alt="Blog Post 3" className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-xl font-semibold text-red-700 mt-4">Blog Post 9</h3>
                <p className="text-gray-700 mt-2">Excerpt of blog post 9.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 font-semibold">"This is an awesome product! I recommend it to anyone looking for durability."</p>
                <div className="flex items-center mt-4">
                  <img src={aboutUsImage} alt="Customer 1" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="text-red-700 font-semibold">Customer 1</h4>
                    <p className="text-gray-700">Job Title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 font-semibold">"Fantastic service and great product. I will definitely be a repeat customer."</p>
                <div className="flex items-center mt-4">
                  <img src={aboutUsImage} alt="Customer 2" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="text-red-700 font-semibold">Customer 2</h4>
                    <p className="text-gray-700">Job Title</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-700 font-semibold">"Excellent quality and customer service. Highly recommend to everyone!"</p>
                <div className="flex items-center mt-4">
                  <img src={aboutUsImage} alt="Customer 3" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="text-red-700 font-semibold">Customer 3</h4>
                    <p className="text-gray-700">Job Title</p>
                  </div>
                </div>
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
            <div className="w-full md:w-1/2 p-20">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-700 mb-4">Contact Information</h3>
                <p className="text-gray-700">Feel free to get in touch with us through any of the methods below:</p>
                <div className="mt-4">
                  <p className="flex items-center space-x-2">
                    <FaPhoneAlt />
                    <span>(233) - 545061734/542877882 </span>
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
                  <FaWhatsapp className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
