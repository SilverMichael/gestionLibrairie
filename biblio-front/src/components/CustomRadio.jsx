import React from "react";

const CustomRadio = ({
  label,
  name,
  id,
  containerStyle,
  radioStyle,
  dimension = "medium",
  error,
  ...rest
}) => {
  return (
    <div className={`mt-2 ${containerStyle} `}>
      <div className="flex items-center ">
        {/* <label className="text-sm font-medium text-green-900 block relative cursor-pointer mb-3 pl-9 top-2 left-2 w-2 h-2 rounded-full bg-white ">
                {label}
                <input className="absolute checked:block cursor-pointer hover:bg-green-300 " id={id} name={name} type="radio" />
                <span className="absolute top-0 left-0 h-6 w-6 rounded-full bg-white hover:bg-green-300  after:absolute after:hidden after:top-2 after:left-2 after:w-2 after:h-2 after:rounded-full after:bg-white"></span>
            </label> */}
        <input
          id={id}
          name={name}
          type="radio"
          className="w-5 h-5 mx-2 "
          {...rest}
        />
        <label htmlFor={id} className=" text-sm font-medium text-green-900">
          {label}
        </label>
      </div>
      {error && <p className="text-xs mt-1 text-red-600">{error}</p>}
    </div>
  );
};

export default CustomRadio;
