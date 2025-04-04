import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Image
        src={"/blob.png"}
        alt="Erro - Logo"
        width={100}
        height={100}
        priority
        className="animate-bounce"
      />
      <h1 className="text-2xl font-semibold mt-4">
        Oops! Something went wrong...
      </h1>
      <p className="text-lg text-gray-600 mt-2 max-sm:text-[0.8rem]">
        It looks like our servers are temporarily unavailable.
      </p>
      <p className="text-lg text-gray-600 max-sm:text-[0.8rem]">
        We are working to resolve this as quickly as possible.
      </p>
      <p className="text-lg text-blue-700 mt-4 max-sm:text-[0.9rem]">
        Please try again in a few minutes!
      </p>
    </div>
  );
};

export default Error;
