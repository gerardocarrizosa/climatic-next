import Image from "next/image";
import WeatherForecast from "@/components/WeatherForecast";
import CopyrightFooter from "@/components/Copyright-footer";
import { fetchWeather } from "../lib/BE_client";

export default async function Home() {
  const weather = await fetchWeather();
  return (
    <main className="bg-light-subtle">
      <div className="container d-flex flex-column justify-content-between vh-100">
        <div className="d-flex justify-content-center">
          <Image
            src={"climatic-primary.svg"}
            alt="Climatic logo"
            width={"100"}
            height={"70"}
          />
        </div>
        <div>
          <WeatherForecast weather={weather} />
        </div>
        <footer>
          <CopyrightFooter />
        </footer>
      </div>
    </main>
  );
}
