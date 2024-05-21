import React from 'react'

const sizeClasses = {
    small: "px-3 py-0 h-9 text-sm h-10",
    medium: "px-5 py-0 h-12",
    big: "px-10 py-0 h-14",
  };
  

const CustomButton = ({
    title,
    btnType,
    containerStyle,
    size = 'medium',
    handleClick,
    ...rest
  }) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-button ${containerStyle} ${sizeClasses[size]} `}
      onClick={handleClick}
     {...rest}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton
