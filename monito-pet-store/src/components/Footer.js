import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { ReactComponent as Logo } from "../assests/Images/monito.svg"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#FCEED5] py-10 rounded-t-[40px] mt-6">
      <div className="container mx-auto px-4 mt-8">
        {/* Registration Section */}
        <div className="bg-[#003459] text-white py-8 px-8 rounded-[20px] flex flex-col lg:flex-row justify-between items-center mb-8">
          <h3 className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[36px] text-center lg:text-left font-gilroy mb-4 lg:mb-0">
            Register Now So You Don’t Miss{" "}
            <span className="block">Our Programs</span>
          </h3>

          <div className="bg-white p-4 rounded-lg shadow-lg flex items-center flex-col lg:flex-row w-full lg:w-[707px]">
            <input
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-2 rounded-lg flex-1 mb-4 lg:mb-0 lg:mr-4 focus:outline gap-2"
            />
            <button className="bg-[#003459] text-white font-gilroy px-6 py-2 rounded-lg w-full lg:w-auto">
              Subscribe Now
            </button>
          </div>
        </div>

        {/* Horizontal container for nav links and social icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Navigation Links */}
          <div className="flex justify-center space-x-8 lg:space-x-10 text-[#003459] font-gilroymedium mb-6 lg:mb-0">
            <a href="/" className="hover:text-gray-600">
              Home
            </a>
            <a href="/" className="hover:text-gray-600">
              Category
            </a>
            <a href="/" className="hover:text-gray-600">
              About
            </a>
            <a href="/" className="hover:text-gray-600">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-8 lg:space-x-10">
            <a href="/" className="text-[#003459] hover:text-gray-600">
              <FaFacebook size={24} />
            </a>
            <a href="/" className="text-[#003459] hover:text-gray-600">
              <FaTwitter size={24} />
            </a>
            <a href="/" className="text-[#003459] hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
            <a href="/" className="text-[#003459] hover:text-gray-600">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-neutral-200 mb-8"></div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Side - Text */}
          <div className="text-center lg:text-left text-[#667479] text-gilroymedium mb-6 lg:mb-0">
            <p>© 2022 Monito. All rights reserved.</p>
          </div>

          {/* Center - Logo */}
          <div className="text-center mb-6 lg:mb-0">
            <Logo className="w-[150px] h-auto" />
          </div>

          {/* Right Side - Links */}
          <div className="text-center lg:text-right text-[#667479] text-gilroymedium">
            <a href="/" className="hover:text-gray-600 mx-2">
              Terms of Service
            </a>
            <a href="/" className="hover:text-gray-600 mx-2">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
