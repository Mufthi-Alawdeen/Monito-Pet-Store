import React from 'react';
import PetCard from './PetCard'; // Reuse the PetCard component
import Labels from './Label';

function RelatedProducts({ pets }) {
  return (
    <div className="mt-8 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Labels only visible for large screens and up */}
        <div className="hidden lg:block">
          <Labels 
            subheading="What’s New?" 
            heading="See More Puppies" 
            variant="textOnly"
          />
        </div>

        {/* Grid container for pets */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-8">
          {pets.slice(0, 4).map((pet) => (
            <div key={pet.id} className="flex justify-center items-center">
              <PetCard pet={pet} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
