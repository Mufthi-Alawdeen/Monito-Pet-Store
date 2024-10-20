import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Rec5 from "../assests/Images/Rectangle 5.png"; // Adjust path
import Puppies from "../assests/Images/puppies.png"; // Adjust path
import PetCard from "../components/PetCard"; // Assuming PetCard component exists
import "swiper/css";
import "swiper/css/pagination";
import Pagination from "../components/Pagination";

function Category() {
  const [pets, setPets] = useState([]); // Set initial state as an empty array
  const [filters, setFilters] = useState({
    gender: "",
    color: "",
    breed: "",
    priceMin: "",
    priceMax: "",
  });
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 28;

  const incrementValue = (field) => {
    setFilters((prev) => ({
      ...prev,
      [field]: (parseFloat(prev[field]) || 0) + 1,
    }));
  };

  const decrementValue = (field) => {
    setFilters((prev) => ({
      ...prev,
      [field]: Math.max(0, (parseFloat(prev[field]) || 0) - 1),
    }));
  };

  useEffect(() => {
    // Fetch pets data from the API
    const fetchPets = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://monitor-backend-rust.vercel.app/api/pets"
        );
        if (!response.ok) {
          throw new Error(`Error fetching pets: ${response.status}`);
        }
        const data = await response.json();

        // Check if data structure is correct
        console.log("Fetched pets data:", data);

        // Assuming the data contains an array of pets directly or within a nested object
        if (Array.isArray(data)) {
          setPets(data); // If the array is at the root level
        } else if (data.pets && Array.isArray(data.pets)) {
          setPets(data.pets); // If pets array is nested inside `data.pets`
        } else {
          setPets([]); // In case the structure is unexpected
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Logic to fetch data for the new page can go here
  };

  // Apply filters on the pets data
  useEffect(() => {
    let updatedPets = [...pets];

    // Filter by gender
    if (filters.gender) {
      updatedPets = updatedPets.filter((pet) => pet.gender === filters.gender);
    }

    // Filter by color
    if (filters.color) {
      updatedPets = updatedPets.filter((pet) => pet.color === filters.color);
    }

    // Filter by breed
    if (filters.breed) {
      updatedPets = updatedPets.filter((pet) => pet.breed === filters.breed);
    }

    // Filter by price range
    if (filters.priceMin || filters.priceMax) {
      updatedPets = updatedPets.filter((pet) => {
        const petPrice = parseFloat(pet.price.replace(/,/g, ""));
        const min = filters.priceMin ? parseFloat(filters.priceMin) : 0;
        const max = filters.priceMax ? parseFloat(filters.priceMax) : Infinity;
        return petPrice >= min && petPrice <= max;
      });
    }

    setFilteredPets(updatedPets);
  }, [pets, filters]);

  // Handler to update filters
  const updateFilters = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  // Function to dynamically calculate the number of filtered pets
  const getPetCount = () => {
    return filteredPets.length;
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Transparent Header */}
      <Header variant="transparent" />

      <div className="flex flex-wrap items-center space-x-2 text-gray-500 ml-[20px] md:ml-[125px] mt-6 -mb-2 md:space-x-3 space-x-1 text-sm md:text-base">
        <a
          href="/"
          className="hover:text-gray-700 text-[#667479] font-gilroymedium"
        >
          Home
        </a>
        <svg
          className="h-3.5 w-3.5 text-gray-500 mx-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <a
          href="/"
          className="hover:text-gray-700 text-[#667479] font-gilroymedium"
        >
          Dog
        </a>
        <svg
          className="h-3.5 w-3.5 text-gray-500 mx-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span className="text-[#667479] font-medium font-gilroymedium">
          Small Dog
        </span>
      </div>

      {/* Banner Section */}
      <div className="flex flex-col items-center justify-center flex-grow">
        <Banner
          backgroundSvg1={Rec5}
          mainImage={Puppies}
          title="One More Friend"
          subtitle="Thousands More Fun!"
          description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
          buttonText1="View Intro"
          buttonText2="Explore Now"
          rightContent={true}
          backgroundColor="#FFB775"
        />
      </div>

      {/* Category content with Filter and Pet Cards */}
      <main className="container mx-auto py-8 bg-[#FDFDFD] mr-[75px]">
        <div className="flex space-x-8">
          {/* Filter Section */}
          <aside className="w-1/4 mt-1">
            <h3 className="text-[24px] font-gilroy mb-4 text-[#003459]  w-[282px]">
              Filter
            </h3>
            {/* Gender Filter */}
            <div className="mb-4 shadow-[0_0.5px_0px_rgba(0,0,0,0.1)]  w-[282px]">
              <h4 className="font-gilroy text-[16px] text-[#00171F] mb-4 ">
                Gender
              </h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Male"
                    onChange={() => updateFilters("gender", "Male")}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]" // Customize border and check color
                  />
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Male
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-4">
                  <input
                    type="checkbox"
                    value="Female"
                    onChange={() => updateFilters("gender", "Female")}
                    className="mb-4 appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]" // Customize border and check color
                  />
                  <span className="text-[#00171F] mb-4 text-[14px] font-gilroymedium">
                    Female
                  </span>
                </label>
              </div>
            </div>

            {/* Color Filter */}
            <div className="mb-4 shadow-[0_0.5px_0px_rgba(0,0,0,0.1)]  w-[282px]">
              <h4 className="font-gilroy text-[16px] text-[#00171F] mb-2">
                Color
              </h4>
              <div className="flex flex-col space-y-2">
                {/* Red */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Red"
                    onChange={(e) => updateFilters("color", e.target.value)}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                  />
                  <span className="w-4 h-4 rounded-full bg-[#FF4D4D]"></span>{" "}
                  {/* Small red circle */}
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Red
                  </span>
                </label>

                {/* Apricot */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Apricot"
                    onChange={(e) => updateFilters("color", e.target.value)}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                  />
                  <span className="w-4 h-4 rounded-full bg-[#FFCC80]"></span>{" "}
                  {/* Small apricot circle */}
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Apricot
                  </span>
                </label>

                {/* Black */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Black"
                    onChange={(e) => updateFilters("color", e.target.value)}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                  />
                  <span className="w-4 h-4 rounded-full bg-[#2F2F2F]"></span>{" "}
                  {/* Small black circle */}
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Black
                  </span>
                </label>

                {/* Black & White */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Black & White"
                    onChange={(e) => updateFilters("color", e.target.value)}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                  />
                  <span className="w-4 h-4 rounded-full bg-white border border-gray-400 relative">
                    {/* Half Black */}
                    <span className="absolute left-0 top-0 w-2 h-4 bg-black rounded-l-full"></span>
                  </span>
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Black & White
                  </span>
                </label>

                {/* Silver */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Silver"
                    onChange={(e) => updateFilters("color", e.target.value)}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                  />
                  <span className="w-4 h-4 rounded-full bg-[#C0C0C0]"></span>{" "}
                  {/* Small silver circle */}
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Silver
                  </span>
                </label>

                {/* Tan */}
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Tan"
                    onChange={(e) => updateFilters("color", e.target.value)}
                    className="mb-4 appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                  />
                  <span className="mb-4 w-4 h-4 rounded-full bg-[#FFF1CE]"></span>{" "}
                  {/* Small tan circle */}
                  <span className="mb-4 text-[#00171F] text-[14px] font-gilroymedium">
                    Tan
                  </span>
                </label>
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8 shadow-[0_0.5px_0px_rgba(0,0,0,0.1)] w-[282px] mt-6">
              <h4 className="font-gilroy text-[16px] text-[#00171F] mb-2">
                Price
              </h4>
              <div className="flex space-x-3 shadow-[0_0.5px_0px_rgba(0,0,0,0.1)]">
                {/* Min Price with Stepper */}
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Min"
                    className="placeholder:font-gilroymedium placeholder-[#242B33] shadow-[0_0.5px_0px_rgba(0,0,0,0.1)] text-[background: #242B33] appearance-none w-[135px] h-[40px] pl-4 pr-10 checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                    onChange={(e) => updateFilters("priceMin", e.target.value)}
                  />
                  {/* Custom Increment/Decrement Arrows */}
                  <div className="absolute inset-y-0 right-2 flex flex-col justify-center -mt-7">
                    <button
                      type="button"
                      onClick={() => incrementValue("priceMin")}
                      className="focus:outline-none"
                    >
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#242B33"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => decrementValue("priceMin")}
                      className="focus:outline-none -mt-1"
                    >
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#242B33"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Max Price with Stepper */}
                <div className="relative mb-8 shadow-[0_0.5px_0px_rgba(0,0,0,0.1)] w-[250px]">
                  <input
                    type="number"
                    placeholder="Max"
                    className="placeholder:font-gilroymedium placeholder-[#242B33] shadow-[0_0.5px_0px_rgba(0,0,0,0.1)] text-[background: #242B33] appearance-none w-[135px] h-[40px] pl-4 pr-10 checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]"
                    onChange={(e) => updateFilters("priceMax", e.target.value)}
                  />
                  {/* Custom Increment/Decrement Arrows */}
                  <div className="absolute inset-y-0 right-2 flex flex-col justify-center">
                    <button
                      type="button"
                      onClick={() => incrementValue("priceMax")}
                      className="focus:outline-none"
                    >
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#242B33"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={() => decrementValue("priceMax")}
                      className="focus:outline-none -mt-1"
                    >
                      <svg
                        width="14"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#242B33"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Breed Filter */}
            <div className="mb-4 shadow-[0_0.5px_0px_rgba(0,0,0,0.1)] w-[282px]">
              <h4 className="font-gilroy text-[16px] text-[#00171F] mb-4">
                Breed
              </h4>
              <div className="flex flex-col space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Male"
                    onChange={() => updateFilters("gender", "Male")}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]" // Customize border and check color
                  />
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Small
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    value="Male"
                    onChange={() => updateFilters("gender", "Male")}
                    className="appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]" // Customize border and check color
                  />
                  <span className="text-[#00171F] text-[14px] font-gilroymedium">
                    Medium
                  </span>
                </label>
                <label className="flex items-center space-x-3 mb-4">
                  <input
                    type="checkbox"
                    value="Female"
                    onChange={() => updateFilters("gender", "Female")}
                    className="mb-4 appearance-none h-5 w-5 border-2 border-[#CCD1D2] rounded checked:bg-[#003459] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#003459]" // Customize border and check color
                  />
                  <span className="text-[#00171F] mb-4 text-[14px] font-gilroymedium">
                    Large
                  </span>
                </label>
              </div>
            </div>
          </aside>

          {/* Pet Cards Section */}
          <section className="w-3/4 ">
            {/* Title and Count */}
            <div className="flex justify-between items-center mb-3 -ml-[35px]">
              <div className="flex items-end space-x-3">
                <h2 className="text-[24px] font-gilroy text-[#003459] ">
                  Small Dog
                </h2>
                <p className="text-[#667479] text-[14px] font-gilroymedium leading-none mb-2">
                  {getPetCount()} puppies
                </p>
              </div>

              <div className="relative w-[175px] h-[40px] mr-[20px] mb-2">
                <select className="border rounded-[20px] font-gilroymedium text-[#667479] mr-[45px] p-[6px] pl-[15px] border-2 border-[#CCD1D2] w-[175px] h-full appearance-none bg-transparent">
                  <option className="text-[14px] text-[#667479] font-gilroymedium">
                    Sort by: Popular
                  </option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none pr-[4px] mt-[4px] mr-[1px]">
                  {/* Custom arrow icon */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#667479"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 -ml-[35px]">
              {loading ? (
                <p>Loading...</p>
              ) : filteredPets.length > 0 ? ( // Use filteredPets for rendering
                filteredPets.map((pet) => (
                  <PetCard
                    key={pet.id}
                    pet={pet} // Pass the pet object directly to PetCard
                  />
                ))
              ) : (
                <p>No pets found</p>
              )}
            </div>

            <div className="mt-[60px] flex justify-center">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Category;
