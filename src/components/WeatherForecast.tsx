import React from "react";
import { Forecast } from "@/types/weather-api-types";
import ForecastPill from "./ForecastPill";

export default function WeatherForecast(data: Forecast) {
  return (
    <div className="border border-warning p-4 rounded bg-white">
      <div>{data.weather.list[0].weather[0].description}</div>
      <div>
        <p className="display-1">{`${data.weather.list[0].main.temp}°`}</p>
      </div>
      <hr className="solid" />
      <div className="d-flex justify-content-between">
        <p>Min. {data.weather.list[0].main.temp_min}</p>
        <p>Max. {data.weather.list[0].main.temp_max}</p>
      </div>
      <hr className="solid" />
      <div>
        <p className="fw-medium">
          Pronóstico de {data.weather.city.name}, {data.weather.city.country}
        </p>
        <p>
          <small>Próximas 9 horas</small>
        </p>
      </div>
      <div>
        {data.weather.list.map((e, i: number) => {
          if (i === 0 || i > 3) return;
          return <ForecastPill {...e} />;
        })}
      </div>
    </div>
  );
}
