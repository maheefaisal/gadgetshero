import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./Cards/ProductCard";
import { addToDb } from "../utils/fakeDB";

const Shop = () => {
  const products = useLoaderData();
  const handleAddToCart = (id) => {
    console.log(id);
    addToDb(id)
  };
  return (
    <div className="product-container">
      {products.map((product, i) => (
        <ProductCard handleAddToCart={handleAddToCart} product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
