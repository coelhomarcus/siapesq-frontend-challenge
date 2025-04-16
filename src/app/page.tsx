"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import React from "react";
import { WeatherData, WeatherApiResponse } from "../types/weather";
import Image from "next/image";

//Components
import Day from "../components/Day/Day";
import QuickInfo from "../components/QuickInfo/QuickInfo";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

//Icons
import { FaWind } from "react-icons/fa6";
import { IoRainySharp } from "react-icons/io5";
import { RiDropFill } from "react-icons/ri";
import { IoIosArrowDropdown } from "react-icons/io";

//Coordenadas de teste
const city = [
  { name: "Marabá", lat: -5.3806, lon: -49.1325 },
  { name: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { name: "New York", lat: 40.73061, lon: -73.935242 },
  { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
  { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "London", lat: 51.5074, lon: -0.1278 },
];

const getNextFiveDays = () => {
  const formatter = new Intl.DateTimeFormat("en", { weekday: "long" });

  return Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return formatter.format(date);
  });
};

const week = getNextFiveDays();

const Page = () => {
  const [data, setData] = React.useState<WeatherApiResponse>();
  const [dataPrev, setDataPrev] = React.useState<WeatherData>();
  const [bg, setBg] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);

  const [index, setIndex] = React.useState(0);
  const selectedCity = React.useMemo(() => city[index], [index]);

  React.useEffect(() => {
    if (!selectedCity) return;
    const { lat, lon } = selectedCity;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);

        if (!response.ok) {
          throw new globalThis.Error(`Erro na requisição: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
      } catch {
        setError("Erro ao buscar dados. Tente novamente mais tarde.");
      }
    };

    fetchData();
  }, [selectedCity]);

  React.useEffect(() => {
    if (!selectedCity) return;
    const { lat, lon } = selectedCity;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/weatherPrev?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
          throw new globalThis.Error(`Erro na requisição: ${response.status}`);
        }
        const result = await response.json();
        setDataPrev(result);
      } catch {
        setError("Erro ao buscar dados. Tente novamente mais tarde.");
      }
    };

    fetchData();
  }, [selectedCity]);

  React.useEffect(() => {
    if (!data) return;

    const weatherType = data.weather[0].main;

    switch (weatherType) {
      case "Thunderstorm":
        setBg("thunderstorm.png");
        break;
      case "Drizzle":
        setBg("drizzle.png");
        break;
      case "Rain":
        setBg("rain.png");
        break;
      case "Snow":
        setBg("snow.png");
        break;
      case "Clouds":
        setBg("clouds.png");
        break;
      case "Atmosphere":
      case "Clear":
        setBg("clear.png");
        break;
      default:
        setBg("sun.png");
    }
  }, [data]);

  return error ? (
    <Error />
  ) : data && dataPrev ? (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center">
      <Image
        src={`/bg/${bg}`}
        alt="Background"
        fill
        priority
        className="bg-cover bg-center bg-no-repeat blur-sm opacity-50"
      />

      <div className="relative *:text-center w-full px-5 space-y-5 my-10 md:w-[650px]">
        <Menu>
          <MenuButton className="text-white text-center w-full cursor-pointer">
            <div className="flex items-center justify-center gap-2">
              {data.name} <IoIosArrowDropdown />
            </div>
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="mt-3 px-15 py-5 bg-black/40 backdrop-blur-lg border border-white/30 space-y-5 rounded-2xl *:cursor-pointer *:text-white grid justify-center"
          >
            {city.map((item, index) => {
              return (
                <MenuItem key={item.name}>
                  <button
                    className="block hover:underline"
                    onClick={() => {
                      setIndex(index);
                    }}
                  >
                    {item.name}
                  </button>
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>
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
              day={week[0]}
              temp={dataPrev.list[0].main.temp}
              rain={(dataPrev.list[0].pop * 100).toFixed() + "%"}
            />
            <Day
              day={week[1]}
              temp={dataPrev.list[8].main.temp}
              rain={(dataPrev.list[8].pop * 100).toFixed() + "%"}
            />
            <Day
              day={week[2]}
              temp={dataPrev.list[16].main.temp}
              rain={(dataPrev.list[16].pop * 100).toFixed() + "%"}
            />
            <Day
              day={week[3]}
              temp={dataPrev.list[24].main.temp}
              rain={(dataPrev.list[24].pop * 100).toFixed() + "%"}
            />
            <Day
              day={week[4]}
              temp={dataPrev.list[32].main.temp}
              rain={(dataPrev.list[32].pop * 100).toFixed() + "%"}
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
