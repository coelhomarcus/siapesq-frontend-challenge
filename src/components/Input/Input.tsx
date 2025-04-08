import React from "react";

type InputProps = {
  type: string;
  placeholder: string;
  className: string;
};

const Input = ({ type, placeholder, className }: InputProps) => {
  return (
    <input
      type={type}
      className={
        className + " border-2 border-[#BAABAB] bg-[#F3F3F3] rounded w-full p-3"
      }
      placeholder={placeholder}
    />
  );
};

export default Input;
