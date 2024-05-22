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
  medium: "h-14",
  big: "h-24",
};

const CustomTextArea = ({
  inputClassName,
  containerStyle,
  label,
  placeholder,
  header,
  name,
  error,
  variant = "normal",
  dimension = "big",
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
      <div className="relative flex  items-stretch">
        {header && (
          <span className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] ">
            {header}
          </span>
        )}

        <textarea
          id={name}
          name={name}
          className={`flex w-full ${
            error && "border-red-600 shadow-sm shadow-red-500 "
          } appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0 ${inputClassName} ${
            variantClasses[variant]
          } ${sizeClasses[dimension]} `}
          placeholder={placeholder}
          autoFocus={false}
          {...rest}
        />
      </div>
      {error && <p className="text-xs mt-1 text-red-600">{error}</p>}
    </div>
  );
};

export default CustomTextArea;
