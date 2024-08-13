import React from "react";

const Imput = ({ type, name, value, onChange, className }) => {
  return (
    <>
      <input
        className={className}
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Imput;
