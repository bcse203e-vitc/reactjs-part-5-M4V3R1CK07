import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  const userProfile = {
    name: "John Doe",
    age: 28,
    location: "San Francisco, CA",
    bio: "Software Developer passionate about React and innovative technologies.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <ProfileCard
        name={userProfile.name}
        age={userProfile.age}
        location={userProfile.location}
        bio={userProfile.bio}
        avatar={userProfile.avatar}
      />
    </div>
  );
}

export default App;
