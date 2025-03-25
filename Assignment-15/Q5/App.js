import React from "react";
import TaskTracker from "./components/TaskTracker";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "20px",
      }}
    >
      <TaskTracker />
    </div>
  );
}

export default App;
