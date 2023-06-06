import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./ChangingStyles.css";

const ChangingStyles = () => {
  return (
    <button
    data-testid="delete-button"
    className="changing-styles"
  >
    Delete item
  </button>
  );
};

export default ChangingStyles