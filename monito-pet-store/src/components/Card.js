// Card.js
import React from 'react';

const Card = ({ image, category, title, description }) => {
  return (
    <div className="w-[320px] h-[424px] rounded-lg overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-56 object-cover" src={image} alt={title} />
      <div className="p-6">
        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-2">
          {category}
        </span>
        <h2 className="text-xl font-gilroy text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
