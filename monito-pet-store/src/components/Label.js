import React from "react";
import Button from "./Buttons"; // Ensure the path to Button component is correct
import { ReactComponent as Next } from "../assests/Images/next.svg";

function Labels({
  subheading,
  heading,
  buttonText,
  variant, // New prop for variant
}) {
  return (
    <section className="container mx-auto my-10 flex flex-col md:flex-row justify-between items-center ml-0">
      {/* Render content based on variant */}
      {variant === "inline" ? (
        <div className="flex flex-col md:flex-row items-center text-left w-full md:w-[1300px]">
          {" "}
          {/* Flex container for inline variant */}
          <h3 className="text-[16px] text-[#000] mb-2 md:mb-0 -ml-[50px] font-gilroymedium">
            {subheading}
          </h3>
          <h2 className="text-[24px] text-[#003459] mb-1 -ml-[50px] font-gilroy ml-0 md:ml-2">
            {heading}
          </h2>
        </div>
      ) : (
        <div className="text-left">
          {" "}
          {/* Text aligned to the left for default and textOnly variants */}
          <h3 className="text-[16px] font-semibold text-[#000] mb-2 -ml-[50px] font-gilroymedium">
            {subheading}
          </h3>
          <h2 className="text-[24px] text-[#003459] -ml-[50px] mb-6 font-gilroy">
            {heading}
          </h2>
        </div>
      )}

      {/* Only show the button for default and inline variants, skip for textOnly */}
      {variant !== "textOnly" && (
        <div
          className={`mt-4 md:mt-0 md:mr-[-90px] ${
            variant === "inline" ? "mb-[12px]" : "mb-[20px]"
          }`}
        >
          <Button
            text={buttonText} // Use the buttonText prop
            variant={variant === "inline" ? "transparent2" : "transparent"} // Set variant based on condition
            icon={<Next className="h-5 w-5 ml-2" />} // Right arrow icon with margin
          />
        </div>
      )}
    </section>
  );
}

export default Labels;
