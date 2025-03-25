import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  // Validate number input
  const validateNumber = (num) => {
    return !isNaN(num) && isFinite(num);
  };

  // Handle number button click
  const handleNumberClick = (number) => {
    setDisplay((prev) => (prev === "0" ? number.toString() : prev + number));
  };

  // Handle operator button click
  const handleOperatorClick = (op) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(display));
      setOperator(op);
      setDisplay("0");
    } else {
      calculateResult(op);
    }
  };

  // Calculate result
  const calculateResult = (nextOperator = null) => {
    const current = parseFloat(display);

    if (!validateNumber(current) || !validateNumber(previousValue)) {
      setDisplay("Error");
      return;
    }

    let result;
    switch (operator) {
      case "+":
        result = previousValue + current;
        break;
      case "-":
        result = previousValue - current;
        break;
      case "*":
        result = previousValue * current;
        break;
      case "/":
        result = current !== 0 ? previousValue / current : "Divide by 0 Error";
        break;
      default:
        result = current;
    }

    setDisplay(result.toString());
    setPreviousValue(result);
    setOperator(nextOperator);
  };

  // Clear display
  const clearDisplay = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
  };

  // Button style template
  const getButtonStyle = (type) => {
    const baseStyle = {
      width: "50px",
      height: "50px",
      fontSize: "18px",
      margin: "5px",
      cursor: "pointer",
      border: "none",
      borderRadius: "5px",
      transition: "transform 0.1s",
    };

    const typeStyles = {
      number: {
        ...baseStyle,
        backgroundColor: "#e0e0e0",
        color: "black",
        ":hover": { backgroundColor: "#d0d0d0" },
      },
      operator: {
        ...baseStyle,
        backgroundColor: "#f0ad4e",
        color: "white",
        ":hover": { backgroundColor: "#ec971f" },
      },
      clear: {
        ...baseStyle,
        backgroundColor: "#d9534f",
        color: "white",
        ":hover": { backgroundColor: "#c9302c" },
      },
      equals: {
        ...baseStyle,
        backgroundColor: "#5cb85c",
        color: "white",
        ":hover": { backgroundColor: "#449d44" },
      },
    };

    return typeStyles[type];
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {/* Number Buttons */}
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
          <button
            key={num}
            style={getButtonStyle("number")}
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}

        {/* Operator Buttons */}
        {["+", "-", "*", "/"].map((op) => (
          <button
            key={op}
            style={getButtonStyle("operator")}
            onClick={() => handleOperatorClick(op)}
          >
            {op}
          </button>
        ))}

        {/* Special Buttons */}
        <button style={getButtonStyle("clear")} onClick={clearDisplay}>
          C
        </button>
        <button
          style={getButtonStyle("equals")}
          onClick={() => calculateResult()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
