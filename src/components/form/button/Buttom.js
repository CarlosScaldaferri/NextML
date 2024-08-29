import React from "react";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-4 shadow          
        bg-button-background 
        border-button-border
        text-button-text
        hover:bg-button-hoverBackground
        hover:text-button-text"e`}
    >
      {children}
    </button>
  );
};

export default Button;
