import React from "react";
import styles from "./ProfileCard.module.css";
import "./ProfileCard.css";

const ProfileCard = ({ name, age, location, bio, avatar }) => {
  // Validate age is a positive number
  if (typeof age !== "number" || age < 0) {
    throw new Error("Age must be a positive number");
  }

  // Inline styles for specific elements
  const avatarStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid white",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <div className={styles.profileCard}>
      <div className="avatar-container">
        <img src={avatar} alt={`${name}'s avatar`} style={avatarStyle} />
      </div>

      <div className={styles.profileContent}>
        <h2 className={styles.name}>{name}</h2>

        <div className={styles.details}>
          <p className="age-detail">
            <span className={styles.label}>Age:</span> {age}
          </p>
          <p className="location-detail">
            <span className={styles.label}>Location:</span> {location}
          </p>
        </div>

        <p className={styles.bio}>{bio}</p>

        <div className={styles.socialLinks}>
          <button className={styles.socialButton}>Follow</button>
          <button className={styles.socialButton}>Message</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
