"use client";

import React from "react";
import Day from "../components/Day/Day";
import QuickInfo from "../components/QuickInfo/QuickInfo";
import Loading from "../components/Loading/Loading";
import { WeatherData, WeatherApiResponse } from "../types/weather";

//Icones
import { FaWind } from "react-icons/fa6";
import { IoRainySharp } from "react-icons/io5";
import { RiDropFill } from "react-icons/ri";

const Page = () => {
  const [data, setData] = React.useState<WeatherApiResponse>();
  const [dataPrev, setDataPrev] = React.useState<WeatherData>();

  //New York
  const lat = 40.73061;
  const lon = -73.935242;
  //Marabá
  // const lat = -5.3806;
  // const lon = -49.1325;

  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_SECRET}&units=metric`
    )
      .then((j) => j.json())
      .then((b) => {
        setData(b);
      });

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_SECRET}&units=metric`
    )
      .then((j) => j.json())
      .then((b) => {
        setDataPrev(b);
      });
  }, [lat, lon]);

  const getNextFiveDays = () => {
    const formatter = new Intl.DateTimeFormat("en", { weekday: "long" });

    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return formatter.format(date);
    });
  };

  const Week = getNextFiveDays();

  return data && dataPrev ? (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center">
      {/* Wallpaper */}
      <div
        className={`absolute inset-0 bg-[url(/bg/rain.png)] bg-cover bg-center bg-no-repeat blur-sm opacity-50`}
      ></div>

      {/* Conteúdo principal */}
      <div className="relative *:text-center w-full px-5 space-y-5 my-10 md:w-[650px]">
        <p className="text-white">{data.name}</p>
        <h1 className=" text-white text-9xl font-bold">
          {data.main.temp.toFixed()}
        </h1>
        <p className="text-white">{data.weather[0].main}</p>
        <div className="p-5 bg-white/20 backdrop-blur-sm border border-white/30 text-white w-full rounded-2xl ">
          <div className="flex justify-between">
            <QuickInfo icon={<RiDropFill />} value={data.main.humidity + "%"} />
            <QuickInfo icon={<FaWind />} value={data.wind.speed + " km/h"} />
            <QuickInfo
              icon={<IoRainySharp />}
              value={dataPrev.list[0].pop * 100 + "%"}
            />
          </div>
        </div>
        <div className="p-5 bg-white/20 backdrop-blur-sm border border-white/30 text-white w-full rounded-2xl">
          <div className="grid space-y-5 *:flex *:justify-between">
            <Day
              day={Week[0]}
              temp={dataPrev.list[0].main.temp}
              rain={dataPrev.list[0].pop * 100 + "%"}
            />
            <Day
              day={Week[1]}
              temp={dataPrev.list[8].main.temp}
              rain={dataPrev.list[8].pop * 100 + "%"}
            />
            <Day
              day={Week[2]}
              temp={dataPrev.list[16].main.temp}
              rain={dataPrev.list[16].pop * 100 + "%"}
            />
            <Day
              day={Week[3]}
              temp={dataPrev.list[24].main.temp}
              rain={dataPrev.list[24].pop * 100 + "%"}
            />
            <Day
              day={Week[4]}
              temp={dataPrev.list[32].main.temp}
              rain={dataPrev.list[32].pop * 100 + "%"}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Page;
