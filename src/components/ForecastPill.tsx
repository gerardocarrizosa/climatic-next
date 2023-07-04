import { forecast_list } from "@/types/weather-api-types";
import React from "react";

export default function ForecastPill(item: forecast_list) {
  return (
    <div className="border rounded d-flex justify-content-between p-1 m-1">
      <div>
        <small>Min. {item.main.temp_min}</small>
      </div>
      <div>
        <small>{item.weather[0].description}</small>
      </div>
      <div>
        <small>Max. {item.main.temp_max}</small>
      </div>
    </div>
  );
}
