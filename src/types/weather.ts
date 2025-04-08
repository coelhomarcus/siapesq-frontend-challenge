export type {
  WeatherData,
  WeatherEntry,
  WeatherApiResponse,
  MainWeather,
  WeatherDescription,
  Clouds,
  Wind,
  Rain,
  RainHourly,
  Sys,
  City,
  Coordinates,
};

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherEntry[];
  city: City;
}

interface WeatherEntry {
  dt: number;
  main: MainWeather;
  weather: WeatherDescription[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface WeatherApiResponse {
  coord: Coordinates;
  weather: WeatherDescription[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  rain?: RainHourly;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
  humidity: number;
  temp_kf?: number;
}

interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h"?: number;
}

interface RainHourly {
  "1h": number;
}

interface Sys {
  type?: number;
  id?: number;
  pod?: string;
  country: string;
  sunrise: number;
  sunset: number;
}

interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coordinates {
  lat: number;
  lon: number;
}
