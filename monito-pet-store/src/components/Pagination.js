import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Using FontAwesome icons for arrows

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const generatePageNumbers = () => {
    let pages = [];

    if (totalPages <= 5) {
      // If total pages are less than or equal to 5, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // If more than 5 pages, add ellipsis and keep first, last, and nearby pages visible
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex items-center space-x-4">
      {/* Left Arrow */}
      <button
        className={`p-2 rounded-[15px] ${
          currentPage === 1
            ? "text-[#003459] cursor-not-allowed"
            : "text-[#003459]"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaArrowLeft />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 font-gilroy rounded-[8px] text-[18px] ${
            page === currentPage
              ? "bg-[#003459] text-[#FDFDFD]"
              : "text-[#003459] hover:bg-gray-200"
          }`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

      {/* Right Arrow */}
      <button
        className={`p-2 rounded-[8px] ${
          currentPage === totalPages
            ? "text-[#FDFDFD] cursor-not-allowed"
            : "text-[#003459]"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
