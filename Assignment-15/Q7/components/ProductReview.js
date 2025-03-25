import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProductReview.module.css";

// ProductReview Component
const ProductReview = ({ name, image, description, initialRating }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    text: "",
    rating: initialRating,
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (
      newReview.text.trim() &&
      newReview.rating >= 1 &&
      newReview.rating <= 5
    ) {
      setReviews([
        ...reviews,
        {
          id: Date.now(),
          text: newReview.text,
          rating: newReview.rating,
        },
      ]);
      // Reset form
      setNewReview({ text: "", rating: initialRating });
    }
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className={styles.productReviewContainer}>
      <div className={styles.productDetails}>
        <img src={image} alt={name} className={styles.productImage} />
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productDescription}>{description}</p>
      </div>

      <div className={styles.reviewSection}>
        <h3>Customer Reviews</h3>

        {/* Review Submission Form */}
        <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
          <textarea
            value={newReview.text}
            onChange={(e) =>
              setNewReview({
                ...newReview,
                text: e.target.value,
              })
            }
            placeholder="Write your review here"
            className={styles.reviewTextarea}
          />
          <div className={styles.ratingInput}>
            <label>Rating: </label>
            <input
              type="number"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={(e) =>
                setNewReview({
                  ...newReview,
                  rating: parseInt(e.target.value),
                })
              }
              className={styles.ratingInputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit Review
          </button>
        </form>

        {/* Existing Reviews */}
        <div className={styles.existingReviews}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewItem}>
              <p>{review.text}</p>
              <div className={styles.reviewRating}>
                {renderStars(review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Prop Validation
ProductReview.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  initialRating: PropTypes.number,
};

ProductReview.defaultProps = {
  initialRating: 3,
};

export default ProductReview;
