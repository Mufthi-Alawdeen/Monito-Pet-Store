import React from "react";
import Button from "./Buttons"; // Adjust the path to your Button component
import { FaRegCirclePlay } from "react-icons/fa6"; // Import icon for the button

const Banner = ({
  backgroundSvg1,
  backgroundSvg2,
  mainImage,
  title,
  subtitle,
  description,
  buttonText1,
  buttonText2,
  leftContent = false, // Prop to control left layout
  rightContent = false, // Prop to control right layout
  svgIcon, // Pass the svg icon as a prop
}) => {
  // Set the background color conditionally based on leftContent and rightContent
  const bannerBackground = rightContent
    ? "bg-gradient-to-r from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA]"
    : leftContent
    ? "bg-[#FFB775]"
    : "bg-[#003459]";

  const marginLeft = rightContent ? "ml-[20px]" : "ml-[-60px]";

  return (
    <section
      className={`relative flex items-center justify-between w-[1250px] h-[378px] ${marginLeft} py-10 overflow-hidden rounded-[20px] mt-10 ${bannerBackground}`}
    >
      {/* Conditional Background SVGs */}
      {leftContent ? (
        <>
          <img
            src={backgroundSvg2}
            alt="Background Shape 2"
            className="absolute left-0 top-0"
          />
          <img
            src={backgroundSvg1}
            alt="Background Shape 1"
            className="absolute right-0 top-[70px]"
          />
        </>
      ) : rightContent ? (
        <>
          <img
            src={backgroundSvg1}
            alt="Background Shape 1"
            className="absolute right-0 top-[0px]"
          />
        </>
      ) : (
        <>
          <img
            src={backgroundSvg1}
            alt="Background Shape 1"
            className="absolute top-[60px] left-0"
          />
          <img
            src={backgroundSvg2}
            alt="Background Shape 2"
            className="absolute right-0"
          />
        </>
      )}

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
        {/* Conditionally order content and image based on leftContent or rightContent */}
        {leftContent ? (
          <>
            {/* Left Column - Text */}
            <div className="md:w-1/2 text-left ml-16">
              {/* Title with SVG icon */}
              <div className="flex items-center mb-2">
                <h1 className="text-[52px]  text-[#003459] font-gilroy">
                  {title}
                </h1>
                {svgIcon && (
                  <img
                    src={svgIcon}
                    alt="SVG Icon"
                    className="ml-3 h-[50px] w-[50px]"
                  />
                )}
              </div>
              <h2 className="text-[36px]  text-[#003459] font-gilroy mb-4">
                {subtitle}
              </h2>
              <p className="text-[12px] text-[#242B33] font-gilroymedium mb-6">
                {description}
              </p>
              <div className="flex space-x-4 justify-start">
                <Button text={buttonText2} variant="secondary" />
                <Button
                  text={buttonText1}
                  variant="transparent"
                  icon={<FaRegCirclePlay />}
                />
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="">
              <img
                src={mainImage}
                alt="Hero"
                className="h-[382px] w-[513px] object-cover"
              />
            </div>
          </>
        ) : rightContent ? (
          <>
            {/* Left Column - Image */}
            <div className="md:w-1/2 flex justify-center mt-10 mb-[10px]">
              <img
                src={mainImage}
                alt="Hero"
                className="h-[350px] w-auto max-w-[790px] object-contain ml-[220px]"
              />
            </div>

            {/* Right Column - Text */}
            <div className="md:w-1/2 text-right mr-[150px]">
              {/* Title with SVG icon */}
              <div className="flex items-center justify-end mb-2">
                <h1 className="text-[52px] font-extrabold text-[#FDFDFD] font-gilroy">
                  {title}
                </h1>
                {svgIcon && (
                  <img
                    src={svgIcon}
                    alt="SVG Icon"
                    className="ml-3 h-[50px] w-[50px]"
                  />
                )}
              </div>
              <h2 className="text-[36px] font-bold text-[#FDFDFD] font-gilroy mb-4">
                {subtitle}
              </h2>
              <div className="ml-[166px] w-[400px] h-[100px]">
                <p className="text-[12px] text-[#CCD1D2] font-gilroymedium mb-0">
                  {description}
                </p>
              </div>
              <div className="flex space-x-4 justify-end mt-[-20px]">
                <Button
                  text={buttonText1}
                  variant="rightcontent"
                  icon={<FaRegCirclePlay />}
                />
                <Button text={buttonText2} variant="rightcontent2" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Default layout (image on left, text on right) */}
            <div className="md:w-1/2 flex justify-center mt-10 mb-8 md:mb-0">
              <img
                src={mainImage}
                alt="Hero"
                className="h-[382px] w-[513px] object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="md:w-1/2 text-right mr-16">
              {/* Title with SVG icon */}
              <div className="flex items-center justify-end mb-2">
                <h1 className="text-[52px] font-extrabold text-[#003459] font-gilroy">
                  {title}
                </h1>
                {svgIcon && (
                  <img
                    src={svgIcon}
                    alt="SVG Icon"
                    className="ml-3 h-[50px] w-[50px]"
                  />
                )}
              </div>
              <h2 className="text-[36px] font-bold text-[#003459] font-gilroy mb-4">
                {subtitle}
              </h2>
              <div className="ml-[190px] w-[400px] h-[100px]">
                <p className="text-[12px] text-[#242B33] font-gilroymedium mb-2">
                  {description}
                </p>
              </div>
              <div className="flex space-x-4 justify-end mt-[-15px]">
                <Button
                  text={buttonText1}
                  variant="transparent"
                  icon={<FaRegCirclePlay />}
                />
                <Button text={buttonText2} variant="secondary" />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Banner;
