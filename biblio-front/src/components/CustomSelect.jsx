import React from "react";

const variantClasses = {
  normal:
    "bg-gray-100 border border-border-base rounded focus:shadow focus:bg-light focus:border-accent",
  solid:
    "bg-gray-100 border border-border-100 rounded focus:bg-light focus:border-accent",
  outline: "border border-border-base rounded focus:border-accent",
  line: "ltr:pl-0 rtl:pr-0 border-b border-border-base rounded-none focus:border-accent",
};

const sizeClasses = {
  small: "text-sm h-9",
  medium: "h-12",
  big: "h-14",
};

const CustomSelect = ({
  label,
  name,
  error,
  containerStyle,
  selectStyle,
  dimension = "medium",
  variant = "normal",
  value,
  definition,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 text-sm font-medium text-green-900"
        >
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className={`flex w-full  items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 ${variantClasses[variant]}  ${sizeClasses[dimension]} ${selectStyle} `}
        {...rest}
      >
        {definition && <option disabled value="">{definition}</option>}
        {value?.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
