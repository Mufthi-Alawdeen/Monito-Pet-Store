import React from "react";

function ProductInfo({ product }) {
  return (
    <div className="p-4">
      <h2 className="text-3xl  mb-4">{product.name}</h2>
      <p className="text-xl  text-blue-600 mb-4">{product.price}</p>
      <ul className="mb-4">
        <li>
          <strong>SKU:</strong> {product.id}
        </li>
        <li>
          <strong>Gender:</strong> {product.gender}
        </li>
        <li>
          <strong>Age:</strong> {product.age}
        </li>
        <li>
          <strong>Size:</strong> {product.size}
        </li>
        <li>
          <strong>Color:</strong> {product.color}
        </li>
        <li>
          <strong>Vaccinated:</strong> {product.vaccinated ? "Yes" : "No"}
        </li>
        <li>
          <strong>Dewormed:</strong> {product.dewormed ? "Yes" : "No"}
        </li>
        <li>
          <strong>Cert:</strong> {product.cert ? "Yes" : "No"}
        </li>
        <li>
          <strong>Microchip:</strong> {product.microchip ? "Yes" : "No"}
        </li>
        <li>
          <strong>Location:</strong> {product.location}
        </li>
        <li>
          <strong>Published Date:</strong> {product.publishedDate}
        </li>
        <li>
          <strong>Additional Information:</strong> {product.additionalInfo}
        </li>
      </ul>
    </div>
  );
}

export default ProductInfo;
