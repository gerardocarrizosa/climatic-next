import axios from "axios";

export async function fetchWeather() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?lat=25.686613&lon=-100.316116&appid=44b81114cf9fdb8f0d8bed2f3e7e6f30&units=metric"
  );
  return response.data;
}
