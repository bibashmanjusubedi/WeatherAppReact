import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TodayWeather from "./components/TodayWeather";
import { fetchWeatherBundle } from "./services/weatherApi";
import OtherDaysList from "./components/OtherDaysList";
import "./App.css";

export default function WeatherApp(){
    const[city,setCity] = useState("");
    const[weather,setWeather] = useState(null);
    // const[loading,setLoading] = useState(false);
    const[error,setError] = useState("");

    async function handleSearch(cityName){
        setCity(cityName);
        console.log("Searching:", cityName);
        const data = await fetchWeatherBundle(cityName);
        console.log(data);

        setWeather(data);
    }

    const otherDays = weather ? [weather.yesterday, ...weather.nextDays] :[];

    return (
        <>
            {/* <div>
                <SearchBar onSearch={handleSearch} />
                <h2>Selected city: {city}</h2>
            </div>
            <div>
                <TodayWeather city={city} weather={weather?.today}/>
            </div>

            <OtherDaysList days={otherDays} loading={!weather} error={null}/>  */}
            <div className="weather-page">
                <div className="weather-overlay">
                    <SearchBar onSearch={handleSearch} />
                    <TodayWeather city={city} weather={weather?.today} loading={!weather} error={error} /> 
                    <OtherDaysList days={otherDays} /> 
                </div>
            </div>
        </>
    );
}