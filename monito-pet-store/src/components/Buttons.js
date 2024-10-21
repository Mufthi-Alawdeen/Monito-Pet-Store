import React from "react";

function Button({
  text,
  onClick,
  type = "primary", // Primary button type by default
  icon = null,
  className = "",
  variant = "default", // New prop for button variant
  size = "medium", // New prop for button size
  width, // Dynamically passed width
  height, // Dynamically passed height
  borderWeight = "2", // Default border weight, can be customized
  rightIcon = true, // New prop to control whether icon appears after text (default: true)
}) {
  // Base class for the button
  const baseClass = `flex items-center justify-center rounded-[57px] transition duration-300 ${className}`;

  // Button classes based on type and variant
  const buttonClass = (() => {
    switch (variant) {
      case "transparent":
        return `bg-transparent text-[#003459] text-[16px] border border-[#003459] hover:bg-blue-50 px-4 py-2 font-gilroymedium ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} w-[161px] h-[48px] rounded-[57px] opacity-100 gap-[10px]`;
      case "secondary":
        return `bg-[#003459] text-[#FDFDFD] text-[16px] hover:bg-[#00243A] px-4 py-2 font-gilroymedium ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} w-[163px] h-[48px] rounded-[57px] opacity-100 gap-[10px]`;
      case "primary":
        return `bg-[#003459] text-[#FDFDFD] text-[16px] hover:bg-[#00243A] px-4 py-2 font-gilroy ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} w-[203px] h-[44px] rounded-[57px] opacity-100 gap-[10px]`;
      case "transparent2":
        return `bg-transparent text-[#003459] text-[16px] border-${borderWeight} border-[#003459] hover:bg-blue-50 px-4 py-2 font-gilroymedium ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} ${width ? `w-[${width}]` : "w-[250px]"} ${
          height ? `h-[${height}]` : "h-[48px]"
        } rounded-[57px] opacity-100 gap-[10px]`;
      case "rightcontent":
        return `bg-transparent border border-[#FDFDFD] hover:bg-[#fff] text-[#FDFDFD] text-[16px] px-4 py-2 font-gilroymedium ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} w-[161px] h-[48px] rounded-[57px] opacity-100 gap-[10px] hover:bg-opacity-20`;
      case "rightcontent2":
        return `bg-[#FDFDFD] text-[#003459] text-[16px] hover:bg-[#FFB775] px-4 py-2 font-gilroymedium w-[163px] h-[48px] rounded-[57px] opacity-100 gap-[10px]`;
      case "primary2":
        return `bg-[#003459] text-[#FDFDFD] text-[16px] hover:bg-[#00243A] px-4 py-2 font-gilroy ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} w-[133px] h-[44px] rounded-[57px] opacity-100 gap-[10px]`;
      case "transparent3":
        return `bg-transparent text-[#003459] text-[16px] border-2 border-[#003459] hover:bg-blue-50 px-4 py-2 font-gilroy ${
          size === "16px" ? "font-medium" : "font-normal"
        } ${baseClass} w-[250px] h-[48px] rounded-[57px] opacity-100 gap-[10px]`;
      default:
        return `bg-[#003459] text-white hover:bg-[#00243A] px-4 py-2 font-gilroy ${baseClass}`;
    }
  })();

  return (
    <button className={buttonClass} onClick={onClick}>
      {/* Conditionally display icon before or after text based on rightIcon prop */}
      {rightIcon ? (
        <>
          {text} {/* Display the text first */}
          {icon && (
            <span className="h-6 w-6">
              {React.cloneElement(icon, { className: "h-6 w-6" })}
            </span>
          )}
        </>
      ) : (
        <>
          {icon && (
            <span className="ml-2 mt-[2px] h-6 w-6">
              {React.cloneElement(icon, { className: "h-6 w-6" })}
            </span>
          )}
          <span className="font-gilroy text-[16px] mr-[10px]">{text}</span>
        </>
      )}
    </button>
  );
}

export default Button;
