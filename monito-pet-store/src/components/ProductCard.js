import React from 'react';
import { Link } from 'react-router-dom';
import { FaGift } from 'react-icons/fa'; // Importing an icon for the free toy indicator
import { ReactComponent as Gift } from '../assests/Images/Gift.svg'


function commaintodotbyPrice(price) {
  if (!price) return '';
  return price.toString().replace(/,/g, '.');
}


function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} state={{ product }} className="block">
      <div className="bg-[#FDFDFD] w-[285px] h-[490px] shadow-lg rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-l p-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-[270px] h-[264px] object-cover rounded-[10px]" // Fixed height for consistency
        />
        <h3 className="mt-7 text-lg font-gilroy text-[#00171F]">{product.name}</h3>
        <div className="flex items-center mt-3 mb-3">
        <p className="text-[12px] font-gilroymedium text-[#667479]">Product: <span className="font-gilroy text-[#667479]">{product.product}  </span> </p>
        <span className="mx-4 mt-[-3px]">•</span>
        <p className="text-[12px] font-gilroymedium text-[#667479]">Size: <span className="font-gilroy text-[#667479]"> {product.size} </span> </p>
        </div>
        <p className="mt-2 text-[14px] font-gilroy text-[#00171F]">{commaintodotbyPrice(product.price)}</p>
        
        {/* Free Toy or Free Cat Food Indicator */}
        <div className="flex items-center mt-2 bg-[#FCEED5] w-[260px] h-[36px] rounded-[5px]">
      
      <Gift className="text-red-500 ml-5" />
      <span className="text-[#003459]text-xl mx-2">•</span> {/* Dot before the text */}
      <span className="text-[14px] ml-1 font-gilroy text-[#002A48]">Free Toy & Free Shaker</span>
    </div>
      </div>
    </Link>
  );
}

export default ProductCard;
