import React from "react";
import ProductCard from "./ProductCard";

const ProductCatalog = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          available={product.available}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;
