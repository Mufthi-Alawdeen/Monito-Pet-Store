import React from 'react';
import { Link } from 'react-router-dom';

// Function to replace commas with dots in the price
function commaintodotbyPrice(price) {
  if (!price) return '';
  return price.toString().replace(/,/g, '.');
}

function PetCard({ pet }) {
  return (
    <Link to={`/pet/${pet.id}`} state={{ pet }} className="block">
      <div className="bg-[#FDFDFD] shadow-lg overflow-hidden transition-shadow w-[280px] h-[420px] duration-300 hover:shadow-l rounded-[12px] pt-[8px] pr-[8px] pl-[8px] leading-[8px]">
        <img
          src={pet.image}
          alt={pet.name}
          className="flex justify-center w-[264px] h-[264px] object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg text-[16px] text-[#00171F] font-gilroy">
            {pet.id} - {pet.breed}
          </h3>

          {/* Flex container for gender and age */}
          <div className="flex items-center mt-[15px] mb-[20px]">
            <p className="text-[12px] font-gilroymedium text-[#667479]">
              Gender: <span className="font-gilroy text-[#667479]">{pet.gender}</span>
            </p>
            <span className="mx-4">•</span>
            <p className="text-[12px] font-gilroymedium text-[#667479]">
              Age: <span className="font-gilroy text-[#667479]">{pet.age}</span>
            </p>
          </div>

          {/* Price formatted using the function */}
          <p className="mt-6 text-[14px] font-gilroy text-[#00171F]">
            {commaintodotbyPrice(pet.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
