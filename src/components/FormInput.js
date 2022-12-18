import React from "react";

const FormInput = ({ type, placeholder, name, icon, value, handleChange }) => {
  return (
    <div className="form-row">
      <input
        type={type}
        name={name}
        value={value}
        className="form-input"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <span>{icon}</span>
    </div>
  );
};

export default FormInput;
