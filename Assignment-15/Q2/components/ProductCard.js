import React from "react";

const ProductCard = ({ name, price, available }) => {
  // Validate price is a number
  if (typeof price !== "number") {
    throw new Error("Price must be a number");
  }

  // Inline styles with dynamic background based on availability
  const cardStyle = {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: available ? "#e6f2e6" : "#f2e6e6",
    transition: "transform 0.3s ease",
  };

  const titleStyle = {
    color: available ? "green" : "red",
    marginBottom: "10px",
  };

  const priceStyle = {
    fontSize: "1.2em",
    fontWeight: "bold",
    color: available ? "#333" : "#999",
  };

  const availabilityStyle = {
    marginTop: "10px",
    fontStyle: "italic",
    color: available ? "green" : "red",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2 style={titleStyle}>{name}</h2>
      <p style={priceStyle}>${price.toFixed(2)}</p>
      <p style={availabilityStyle}>{available ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
};

export default ProductCard;
