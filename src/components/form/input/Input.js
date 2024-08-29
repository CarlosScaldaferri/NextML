import React from "react";

const Input = ({ label, type, name, value, onChange, className }) => {
  return (
    <div className="flex flex-grow flex-col">
      {label && (
        <label htmlFor={name} className="mb-1">
          {label}
        </label>
      )}
      <input
        className={
          "p-2 border border-Input-border focus:outline-none focus:ring-Input-focusBorder text-Input-text bg-Input-background" +
          className
        }
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
