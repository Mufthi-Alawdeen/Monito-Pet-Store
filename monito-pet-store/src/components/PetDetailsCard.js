import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Health from '../assests/Images/Pet-Health.svg';
import Gurantee from '../assests/Images/Group.svg';
import Share from '../assests/Images/share.svg';
import Button from './Buttons';
import Chat from '../assests/Images/chat.png';
import Facebook from '../assests/Images/Facebook.svg';
import Twitter from '../assests/Images/Twitter.svg';
import Youtube from '../assests/Images/YouTube.svg';
import Instagram from '../assests/Images/Instagram.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Function to replace commas with dots in the price
function commaintodotbyPrice(price) {
  if (!price) return '';
  return price.toString().replace(/,/g, '.');
}

function PetDetailsCard() {
  const location = useLocation();
  const { pet } = location.state || {}; // Get the 'pet' object passed from PetCard

  const [currentImage, setCurrentImage] = useState(0);

  const images = pet.image
    ? [pet.image, ...Array(5).fill('https://placehold.co/94')]
    : Array(6).fill('https://placehold.co/94');

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  if (!pet) {
    return <p>Pet not found</p>;
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-12 w-full max-w-[1255px] rounded-[20px] border border-[#EBEEEF] mt-6 lg:mt-10">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Section - Main Image and Thumbnails */}
        <div className="w-full lg:w-1/2 relative">
          {/* Main Image with arrows */}
          <div className="relative">
            <img
              src={images[currentImage]}
              alt={pet.breed}
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF66] p-2 rounded-full"
            >
              <FiChevronLeft size={30} color="white" />
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FFFFFF66] p-2 rounded-full"
            >
              <FiChevronRight size={30} color="white" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-x-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentImage(idx)}
                className={`w-[94px] h-auto rounded-lg overflow-hidden cursor-pointer ${currentImage === idx ? 'border-4 border-[#F1D092]' : ''}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Pet Information */}
        <div className="w-full lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-[#667479] mb-4 text-sm md:text-base">
            <a href="/" className="hover:text-gray-700">Home</a>
            <svg className="h-3.5 w-3.5 text-gray-500 mx-1 lg:mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
            </svg>
            <a href="/" className="hover:text-gray-700">Dog</a>
            <svg className="h-3.5 w-3.5 text-gray-500 mx-1 lg:mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
            </svg>
            <span>{pet.breed}</span>
          </div>

          {/* Pet Title and Price */}
          <p className="text-sm text-[#99A2A5] font-gilroymedium">SKU #{pet.id}</p>
          <h1 className="text-2xl text-[#00171F] font-gilroy mb-2">{pet.breed}</h1>
          <p className="text-xl text-[#002A48] font-gilroy mb-4">{commaintodotbyPrice(pet.price)}</p>

          {/* Action Buttons */}
    <div className="flex flex-nowrap space-x-4 mb-6 w-full">
  <Button
    text="Contact us"
    variant="primary2"
    className="w-auto md:w-auto"
  />
  <Button
    text="Chat with Monito"
    variant="transparent2"
    width={160}
    height={40}
    borderWeight="2"
    icon={<img src={Chat} className="w-5 h-5" />}
    rightIcon={false}
    className="w-auto md:w-auto"
  />
</div>





          {/* Pet Attributes */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm md:text-[14px] text-[#00171F] border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">SKU:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: #{pet.id}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Gender:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6 ">: {pet.gender}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Age:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.age}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Size:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.size || 'Undefined'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Color:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.color || 'Undefined'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Vaccinated:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.vaccinated ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Dewormed:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.dewormed ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Cert:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.certification ? 'Yes (MKA)' : 'No'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Microchip:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.microchip ? 'Yes' : 'No'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Location:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.location || 'Undefined'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Published Date:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.publishedDate || 'Undefined'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-gilroymedium pr-2 text-[#667479] py-2 w-32 md:w-40">Additional Information:</td>
                  <td className="font-gilroymedium text-[#667479] py-2 pl-6">: {pet.additionalInfo || 'Undefined'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Health Guarantee and Icons */}
      <div className="flex justify-between items-center bg-[#FCEED5] p-4 rounded-lg shadow-lg mt-8 w-full lg:w-[580px]">
  <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
    <div className="flex items-center">
      <img src={Health} className="w-6 h-6" />
      <span className="text-[#003459] text-[14px] font-gilroy ml-2">
        100% health guarantee for pets
      </span>
    </div>
    <div className="flex items-center">
      <img src={Gurantee} className="w-6 h-6 mr-2" />
      <span className="text-[#003459] text-[14px] font-gilroy">
        100% guarantee of pet identification
      </span>
    </div>
  </div>
</div>


      {/* Share Section */}
      <div className="flex items-center mt-6 lg:mt-10">
        <img src={Share} className="w-6 h-6 mr-2" />
        <span className="text-[#003459] font-gilroy mr-4">Share:</span>
        <a href="/" className="text-[#003459] mx-2">
          <img src={Facebook} />
        </a>
        <a href="/" className="text-[#003459] mx-2">
          <img src={Twitter} />
        </a>
        <a href="/" className="text-[#003459] mx-2">
          <img src={Instagram} />
        </a>
        <a href="/" className="text-[#003459] mx-2">
          <img src={Youtube} />
        </a>
      </div>
    </div>
  );
}

export default PetDetailsCard;
