import React from "react";

const Input = ({
  label = "",
  type = "text",
  name = "",
  inputClassName = "",
  className = "",
  isRequired = true,
  placeholder = "",
  value='',
  onChange = () => {},
}) => {
  return (
    <div className={`w-1/2 ${className}`}>
      <label
        // htmlFor={name}
        className="block text-sm font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id="first-name"
        className={` outline-none bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:rounded-lg focus:border-blue-500 block w-full p-2.5 ${inputClassName}`}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
