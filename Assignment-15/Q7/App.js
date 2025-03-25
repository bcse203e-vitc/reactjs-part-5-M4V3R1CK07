import React from "react";
import ProductReview from "./components/ProductReview";

function App() {
  return (
    <div className="App">
      <ProductReview
        name="Smart Wireless Headphones"
        image="/api/placeholder/400/300"
        description="High-quality wireless headphones with noise cancellation and 20-hour battery life."
        initialRating={4}
      />
    </div>
  );
}

export default App;
