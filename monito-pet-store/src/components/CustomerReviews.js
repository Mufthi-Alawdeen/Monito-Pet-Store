import React, { useState } from 'react';

function CustomerReviews({ customers }) {
  const [activeIndex, setActiveIndex] = useState(0); // Index for pagination

  const handlePaginationClick = (index) => {
    setActiveIndex(index); // Update the active index when pagination is clicked
  };

  return (
    <div className="mt-[100px] mb-16 text-left">
      <h3 className="text-[24px] font-gilroy mb-6 text-[#00171F] ml-[30px] lg:ml-[122px] text-left">
        Our Lovely Customer
      </h3>


      {/* Customer images container */}
      <div className="overflow-hidden max-w-[100%] w-[83%] mx-auto">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${activeIndex * 260}px)`,
    }}
  >
    {customers.map((customer, index) => (
      <div
        key={index}
        className={`flex-none w-[267px] h-[355px] bg-white rounded-lg shadow-md overflow-hidden `}
        style={{
          marginRight: index === customers.length - 1 ? '0px' : '10px',
        }}
      >
        <img
          src={customer.image}
          alt={`Customer ${index + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</div>


      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        {customers.map((_, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              index === activeIndex
                ? 'w-6 h-3 bg-[#003459] rounded-full'
                : 'w-3 h-3 bg-[#CCD1D2] rounded-full'
            } mx-1`}
            onClick={() => handlePaginationClick(index)} // Handle pagination click
          ></div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviews;
