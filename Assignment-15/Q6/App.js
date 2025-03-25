import React from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Calculator />
    </div>
  );
}

export default App;
