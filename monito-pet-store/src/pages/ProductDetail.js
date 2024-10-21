import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductInfo from "../components/ProductInfo";
import ImageCarousel from "../components/ImageCarousel";
import CustomerReviews from "../components/CustomerReviews";
import RelatedProducts from "../components/RelatedProducts";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [customerReviews, setCustomerReviews] = useState([]);

  useEffect(() => {
    if (!product) {
      navigate("/");
      return;
    }

    // Fetch related products (more puppies) from More Puppies API
    fetch("https://monitor-backend-rust.vercel.app/api/pet")
      .then((response) => response.json())
      .then((data) => setRelatedProducts(data))
      .catch((error) =>
        console.error("Error fetching related products:", error)
      );

    // Fetch customer reviews (images) from Customers API
    fetch("https://monitor-backend-rust.vercel.app/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomerReviews(data))
      .catch((error) =>
        console.error("Error fetching customer reviews:", error)
      );
  }, [product, navigate]);

  if (!product) {
    return null; // Or display a loading screen
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ImageCarousel images={product.images || [product.image]} />
          <ProductInfo product={product} />
        </div>
        <CustomerReviews customers={customerReviews} />
        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default ProductDetail;
