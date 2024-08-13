import React from "react";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-weak hover:bg-blue-strong text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
    >
      {children}
    </button>
  );
};

export default Button;
