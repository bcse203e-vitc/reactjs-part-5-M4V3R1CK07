import React from "react";
import ProductCatalog from "./components/ProductCatalog";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99, available: true },
    { id: 2, name: "Smartphone", price: 599.5, available: false },
    { id: 3, name: "Headphones", price: 199.99, available: true },
  ];

  return (
    <div>
      <ProductCatalog products={products} />
    </div>
  );
}

export default App;
