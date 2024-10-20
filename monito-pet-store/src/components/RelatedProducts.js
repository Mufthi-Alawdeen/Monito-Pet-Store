import React from 'react';
import PetCard from './PetCard'; // Reuse the PetCard component
import Labels from './Label';

function RelatedProducts({ pets }) {
  return (
    <div className="mt-8 flex justify-center">
      <div className="max-w-7xl w-full">
        <Labels 
          subheading="What’s New?" 
          heading="See More Puppies" 
          variant="textOnly"
        />
        
        {/* Grid container for pets, only showing 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {pets.slice(0, 4).map((pet) => ( // Limiting to the first 4 pets
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
