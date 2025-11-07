import React from "react";

const SampleButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default SampleButton;
