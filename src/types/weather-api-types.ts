export type Forecast = {
  weather: {
    cod: string;
    message: number;
    cnt: number;
    list: forecast_list[];
    city: {
      id: number;
      name: string;
      coord: { lat: number; lon: number };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    };
  };
};

export type forecast_list = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: weather[];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
};

type weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};
