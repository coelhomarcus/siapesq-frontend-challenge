import React from "react";
import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
};

const Button = ({ text, href }: ButtonProps) => {
  return (
    <Link
      className="bg-[#436BFE] text-[#FDFDFD] rounded w-full p-3 text-center"
      href={href}
    >
      {text}
    </Link>
  );
};

export default Button;
