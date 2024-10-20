import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PetCard from "../components/PetCard";
import ProductCard from "../components/ProductCard";
import Button from "../components/Buttons";
import petsImage from "../assests/Images/image1.png"; // Use your local image
import rec2 from "../assests/Images/Rectangle 3.svg"; // Import rec2 SVG
import { FaRegCirclePlay } from "react-icons/fa6";
import Labels from "../components/Label";
import Banner from "../components/Banner";
import mainHeroImage from "../assests/Images/image2.svg";
import down from "../assests/Images/downRec.png";
import alone from "../assests/Images/alone.png";
import coupleback from "../assests/Images/coupleback.png";
import couplefront from "../assests/Images/couplefront.png";
import blue from "../assests/Images/blue.png";
import berge from "../assests/Images/berge.png";
import image11 from "../assests/Images/image11.png";
import image22 from "../assests/Images/image22.png";
import image3 from "../assests/Images/image3.png";
import image4 from "../assests/Images/image4.png";
import image5 from "../assests/Images/image5.png";
import image6 from "../assests/Images/image6.png";
import image7 from "../assests/Images/image7.png";
import leg from "../assests/Images/leg.png";
import chicken1 from "../assests/Images/chicken1.png";
import chicken2 from "../assests/Images/chicken2.png";
import fontisto_paw from "../assests/Images/fontisto_paw.svg";
import Dog1 from "../assests/Images/dog3.png";
import Dog2 from "../assests/Images/dog2.png";
import Dog3 from "../assests/Images/dog1.png";

function HomePage() {
  const articles = [
    {
      image: Dog1,
      category: "Pet knowledge",
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      description:
        "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circ...",
    },
    {
      image: Dog2,
      category: "Pet knowledge",
      title: "Dog Diet You Need To Know",
      description:
        "Dividing a dog’s diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet...",
    },
    {
      image: Dog3,
      category: "Pet knowledge",
      title:
        "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
      description:
        "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog...",
    },
  ];
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching pets: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setPets(data))
      .catch((error) => console.error("Error fetching data:", error));

    fetch("https://monitor-backend-rust.vercel.app/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching products: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <section className="hero-section bg-[linear-gradient(102.87deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] py-0 max-h-[101.9vh] relative z-0 overflow-hidden rounded-b-[40px] rounded-tl-none rounded-tr-none">
        <Header />
        <div className="absolute left-[calc(50%+50px)] top-[66px] transform -translate-x-1/2">
          <img src={alone} />
        </div>
        <div className="absolute left-[calc(50%+20px)] top-[120px] transform -translate-x-1/2">
          <img src={coupleback} />
        </div>
        <div className="absolute left-[calc(50%+15px)] top-[129px] transform -translate-x-1/2">
          <img src={couplefront} />
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left Column - Text */}
          <div className="md:w-1/2 mt-[-150px] relative text-center md:text-left">
            <div className="relative">
              {/* Back Rectangle */}
              <div
                className="absolute animate-slide-left left-[552px] hidden md:block"
                style={{
                  width: "635px",
                  height: "635px",
                  top: "120px",
                  borderRadius: "99px 120px 120px 120px",
                  backgroundColor: "#003459",
                  transform: "rotate(10.35deg)",
                }}
              ></div>

              {/* Front Rectangle */}
              <div
                className="absolute animate-slide-left delay-200 left-[620px] hidden md:block"
                style={{
                  width: "635px",
                  height: "635px",
                  top: "100px",
                  borderRadius: "99px 99px 20px 10px",
                  backgroundColor: "#F7DBA7",
                  transform: "rotate(25.23deg)",
                }}
              ></div>

              {/* rec2 - added after back and front */}
              <img
                src={rec2}
                alt="Background shape"
                className="absolute -top-1 left-[15px] z-0 w-[75.1px] h-[75.1px]"
              />
            </div>

            <div className="ml-0 md:ml-[25px]">
              {/* Heading should come first */}
              <h1 className="text-[36px] md:text-[60px] font-extrabold mb-2 md:mb-4 text-[#002A48] font-gilroy leading-[44px] md:leading-[68px] relative z-10 mt-[160px] md:mt-0">
                One More Friend
              </h1>
              <h2 className="text-[28px] md:text-[46px] text-[#002A48] mb-2 md:mb-4 font-gilroy leading-[36px] md:leading-[60px] relative z-10 mt-[40px] md:mt-0">
                Thousands More Fun!
              </h2>

              {/* Description should come after */}
              <p className="text-sm md:text-lg text-[#242B33] mb-4 md:mb-6 font-gilroy-medium relative z-10 w-[300px] md:w-[450px] mx-auto md:mx-0 mt-[30px] md:mt-0">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>

              <div className="flex space-x-4 justify-center md:justify-start relative z-10 mt-[50px] md:mt-0">
                <Button
                  text="View Intro"
                  variant="transparent"
                  icon={<FaRegCirclePlay />}
                />
                <Button text="Explore Now" variant="secondary" />
              </div>
              <div className="absolute top-[500px] hidden md:block">
                <img src={down} />
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
            <img
              src={petsImage}
              alt="Person with Dog"
              className="w-[320px] h-[400px] md:w-[944px] md:h-[680px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CSS Keyframe Animations */}
      <style jsx>{`
        @keyframes slideLeft {
          0% {
            right: -250px;
          }
          100% {
            right: 50px;
          }
        }

        .animate-slide-left {
          animation: slideLeft 1s forwards ease-in-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>

      {/* Main Content */}
      <main className="flex flex-col items-center mr-[-75px] mt-3 ml-[-70px]">
        <section className="w-3/4">
          <Labels
            subheading="What’s New?"
            heading="Take A Look At Some Of Our Pets"
            buttonText="View More"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {pets.length > 0 ? (
              pets.map((pet) => <PetCard key={pet.id} pet={pet} />)
            ) : (
              <p>No pets available.</p>
            )}
          </div>

          <div className="ml-[60px] hidden md:block">
            <Banner
              backgroundSvg1={blue}
              backgroundSvg2={berge}
              mainImage={mainHeroImage} // Pass the main image here
              title="One More Friend"
              subtitle="Thousands More Fun!"
              description="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
              buttonText1="View Intro"
              buttonText2="Explore Now"
              backgroundColor="#003459"
            />
          </div>
          <Labels
            subheading="Hard to choose the right products for your pets?"
            heading="Our Products"
            buttonText="View More"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[75px]">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  isClickable={false}
                />
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>

          <div className="mt-[60px] mb-[60px] ml-[2px]">
            <Labels
              subheading="Proud to be part of"
              heading="Pet Sellers"
              buttonText="View all our sellers"
              variant="inline"
            />
          </div>

          <div className="flex flex-row gap-[85px] p-4 justify-center ml-[25px] hidden md:flex">
            <img src={image11} alt="Image 1" className="w-[88px] h-[64px]" />
            <img
              src={image22}
              alt="Image 2"
              className="w-[114px] h-[114px] mt-[-20px]"
            />
            <img src={image3} alt="Image 3" className="w-[104px] h-[46px]" />
            <img src={image4} alt="Image 4" className="w-[92px] h-[64px]" />
            <img src={image5} alt="Image 5" className="w-[92px] h-[92px]" />
            <img src={image6} alt="Image 6" className="w-[130px] h-[56px]" />
            <img src={image7} alt="Image 7" className="w-[116px] h-[72px]" />
          </div>

          <div className="ml-[60px] hidden md:block">
            <Banner
              backgroundSvg1={chicken1}
              backgroundSvg2={chicken2}
              mainImage={leg}
              title="Adoption"
              subtitle="We Need Help. So Do They."
              description={
                <>
                  Adopt a pet and give it a home,
                  <br />
                  it will love you back unconditionally.
                </>
              }
              buttonText1="View Intro"
              buttonText2="Explore Now"
              leftContent={true} // Optional to change the layout
              backgroundColor="#FFB775" // Custom background color
              svgIcon={fontisto_paw}
            />
          </div>

          <Labels
            subheading="You already know ?"
            heading="Useful Pet Knowledge"
            buttonText="View More"
          />
        </section>

        <section>
          <div className="container mx-auto py-8">
            <div className="flex flex-wrap justify-between w-full ml-0 mt-[-50px]">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-4"
                >
                  {/* Full width on mobile, 1/2 on medium screens, 1/3 on large screens */}
                  <div className="bg-white shadow-md rounded-lg overflow-hidden pt-[8px] pr-[8px] pl-[8px] flex flex-col h-[450px]">
                    <div className="flex justify-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-[243px] object-cover rounded-[10px]"
                      />
                    </div>
                    <div className="p-2 flex flex-col flex-grow mt-2">
                      <div className="bg-[#00A7E7] rounded-[28px] w-[89px] h-[25px] pt-[5px] pr-[10px] pl-[10px] pb-[4px] mb-2">
                        <h3 className="text-[10px] text-center font-gilroy text-[#FDFDFD]">
                          {article.category}
                        </h3>
                      </div>
                      <h3 className="text-[16px] font-gilroy text-gray-900">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-[14px] text-[#242B33] font-gilroymedium flex-grow">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
