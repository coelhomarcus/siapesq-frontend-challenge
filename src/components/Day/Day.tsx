import React from "react";

type DayProps = {
  day: string;
  temp: number;
  rain: string | number | undefined;
};

import { RiDropFill } from "react-icons/ri";
import { FaThermometerHalf } from "react-icons/fa";

const Day = ({ day, temp, rain }: DayProps) => {
  return (
    <div>
      <p className="capitalize">{day}</p>
      <div className="flex gap-4 *:gap-2 justify-center items-center *:flex *:items-center">
        <div>
          <FaThermometerHalf />
          <p className="w-12 text-start">{temp.toFixed() + "°"}</p>
        </div>
        <div>
          <RiDropFill />
          <p className="w-12 text-start">{rain}</p>
        </div>
      </div>
    </div>
  );
};

export default Day;
