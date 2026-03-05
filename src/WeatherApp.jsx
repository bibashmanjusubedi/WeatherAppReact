import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TodayWeather from "./components/TodayWeather";
import { fetchWeatherBundle } from "./services/weatherApi";

export default function WeatherApp(){
    const[city,setCity] = useState("");
    const[weather,setWeather] = useState(null);

    async function handleSearch(cityName){
        setCity(cityName);
        console.log("Searching:", cityName);
        const data = await fetchWeatherBundle(cityName);
        console.log(data);

        setWeather(data.today);
    }

    return (
        <>
            <div>
                <SearchBar onSearch={handleSearch} />
                <h2>Selected city: {city}</h2>
            </div>
            <div>
                <TodayWeather city={city} weather={weather}/>
            </div>  
        </>
    );
}