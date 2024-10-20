import PetDetailsCard from "../components/PetDetailsCard";
import CustomerReviews from "../components/CustomerReviews";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RelatedProducts from "../components/RelatedProducts"; // Change this to RelatedPets
import Footer from '../components/Footer';
import { FiChevronLeft, FiInfo } from 'react-icons/fi'; // Add icons from react-icons
import Header from "../components/Header";

function PetDetails() {
  const [relatedPets, setRelatedPets] = useState([]); // Changed to relatedPets
  const [customerReviews, setCustomerReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch related pets (more puppies) from More Puppies API
    fetch('https://monitor-backend-rust.vercel.app/api/pets') // Ensure correct API endpoint
      .then(response => response.json())
      .then(data => setRelatedPets(data)) // Changed to relatedPets
      .catch(error => console.error('Error fetching related pets:', error));

    // Fetch customer reviews (images) from Customers API
    fetch('https://monitor-backend-rust.vercel.app/api/customers')
      .then(response => response.json())
      .then(data => setCustomerReviews(data))
      .catch(error => console.error('Error fetching customer reviews:', error));
  }, [navigate]);

  return (
    <div>
      {/* Header for large screens */}
      <div className="hidden lg:block">
        <Header variant="transparent" />
      </div>

      {/* Icons for mobile screens */}
      <div className="lg:hidden relative">
        <button
          className="absolute top-4 left-4 bg-[#FFFFFF66] p-2 rounded-full z-10"
          onClick={() => navigate(-1)} // Navigate back when left arrow clicked
        >
          <FiChevronLeft size={24} color="white" />
        </button>

        <button
          className="absolute top-4 right-4 bg-[#FFFFFF66] p-2 rounded-full z-10"
        >
          <FiInfo size={24} color="white" />
        </button>
      </div>

      {/* Pet Details */}
      <div>
        <PetDetailsCard />
      </div>

      {/* Customer Reviews */}
      <div>
        <CustomerReviews customers={customerReviews} />
      </div>

      {/* Related Products */}
      <div className="mt-8 flex justify-center">
        <RelatedProducts pets={relatedPets} /> {/* Changed to pets */}
      </div>

      {/* Footer */}
      <div className="mt-[90px]">
        <Footer />
      </div>
    </div>
  );
}

export default PetDetails;
