import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProductFilter.module.css";

// Initial product data
const initialProducts = [
  { id: 1, name: "Smartphone", price: 599, category: "Electronics" },
  { id: 2, name: "Laptop", price: 1299, category: "Electronics" },
  { id: 3, name: "Wireless Earbuds", price: 199, category: "Electronics" },
  { id: 4, name: "T-Shirt", price: 29, category: "Clothing" },
  { id: 5, name: "Jeans", price: 79, category: "Clothing" },
  { id: 6, name: "Hoodie", price: 49, category: "Clothing" },
  { id: 7, name: "Throw Pillow", price: 39, category: "Home Decor" },
  { id: 8, name: "Wall Clock", price: 59, category: "Home Decor" },
  { id: 9, name: "Area Rug", price: 199, category: "Home Decor" },
];

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <span className={styles.categoryTag}>{product.category}</span>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

// Product Filter Component
const ProductFilter = () => {
  const [products] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className={styles.productFilterContainer}>
      <h1>E-commerce Product Filter</h1>

      {/* Category Filter Buttons */}
      <div className={styles.categoryFilter}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.activeCategory : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noProducts}>
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
