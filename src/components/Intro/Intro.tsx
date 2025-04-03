import React from "react";

type IntroProps = {
  title: string;
};

const Intro = ({ title }: IntroProps) => {
  return (
    <div className="text-center mb-10 space-y-2">
      <h1 className="text-[#092F43] text-4xl font-bold">{title}</h1>
      <p className="text-[#717171]">
        See the temperature in your location
        <br /> or favorite places!
      </p>
    </div>
  );
};

export default Intro;
