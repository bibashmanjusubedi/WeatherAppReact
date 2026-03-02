import { useState } from "react";
import SearchBar from "./components/SearchBar";


export default function WeatherAp(){
    const[city,setCity] = useState("");

    function handleSearch(cityName){
        setCity(cityName);
        console.log("Searching:", cityName);
    }

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <h2>Selected city: {city}</h2>
        </div>
    );
}