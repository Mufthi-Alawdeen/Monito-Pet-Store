import React from 'react';
import { Link } from 'react-router-dom';

// Function to replace commas with dots in the price
function commaintodotbyPrice(price) {
  if (!price) return '';
  return price.toString().replace(/,/g, '.');
}

function PetCard({ pet }) {
  // Calculate the dynamic width based on the length of the breed name
  const dynamicWidth = pet.breed.length < 15 ? 'w-[240px]' : pet.breed.length < 25 ? 'w-[290px]' : 'w-[280px]';

  return (
    <Link to={`/pet/${pet.id}`} state={{ pet }} className="block">
      <div className={`bg-[#FDFDFD] shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-l rounded-[12px] p-[8px] 
        ${dynamicWidth} h-[380px] lg:h-[445px]`}>
        
        {/* Pet Image */}
        <img
          src={pet.image}
          alt={pet.name}
          className="flex justify-center w-full sm:h-[160px] md:h-[240px] lg:h-[264px] object-cover rounded-[8px]"
        />
        
        <div className="p-4">
          {/* Breed name - dynamically adjusting font size for longer names */}
          <h3 className="text-lg text-[14px] md:text-[16px] text-[#00171F] font-gilroy whitespace-nowrap overflow-hidden">
            {`${pet.id} - ${pet.breed}`}
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
          <p className="mt-6 text-[16px] font-gilroy text-[#00171F]">
            {commaintodotbyPrice(pet.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PetCard;
