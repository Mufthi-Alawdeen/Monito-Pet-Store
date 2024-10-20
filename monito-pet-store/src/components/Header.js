import React from 'react'; 
import Button from './Buttons';
import { FiSearch } from 'react-icons/fi';
import { ReactComponent as Logo } from '../assests/Images/monito.svg'; // Adjust the path as necessary
import { ReactComponent as Rec1 } from '../assests/Images/Rectangle 9.svg';
import { ReactComponent as DropdownIcon } from '../assests/Images/dropdown.svg'; // Adjust the path to your dropdown SVG
import { ReactComponent as Star } from '../assests/Images/star.svg'; // Adjust the path to your star SVG if needed

function Header({ variant = 'default' }) {
  return (
    <header
      className={`${
        variant === 'transparent'
          ? 'bg-transparent'  // Transparent background
          : 'bg-[linear-gradient(102.87deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)]'  // Gradient background
      } py-4 relative z-10 px-[130px]`} 
    >
      {variant !== 'transparent' && (  // Only render Rec1 if variant is not transparent
        <Rec1 className="absolute top-0 left-0 right-0 h-auto max-w-[60%] z-0" />
      )}

      <div className="container mx-auto flex justify-between items-center mt-4 relative z-10">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        
        {/* Navigation Links */}
        <nav className="ml-12 hidden md:flex space-x-[60px] font-gilroy text-[18px] leading-[24px]">
          <a href="/" className="text-[#003459] hover:text-blue-500">Home</a>
          <a href="/Category" className="text-[#003459] hover:text-blue-500">Category</a>
          <a href="#" className="text-[#003459] hover:text-blue-500">About</a>
          <a href="#" className="text-[#003459] hover:text-blue-500">Contact</a>
        </nav>

        {/* Right Side - Search, Button, Currency, and Dropdown */}
        <div className="flex items-center space-x-2 ml-8"> {/* Space between items */}
          <div className="relative flex-grow">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              className="border rounded-full py-2 pl-10 pr-6 w-[320px] h-[44px] placeholder:font-gilroymedium"
              placeholder="Search something here!"
            />
          </div>

          {/* Button first */}
          <Button text="Join the community" variant="primary" />

          {/* Currency and Dropdown */}
          <div className="flex items-center space-x-1 text-[#003459]"> {/* Adjust space between currency and dropdown */}
            <Star className="h-[21px] w-[21px]" />
            <span className="font-gilroy text-[16px]  leading-[24px]">VND</span>
            <DropdownIcon className="h-[24px] w-[24px]" /> {/* Adjust size as necessary */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
