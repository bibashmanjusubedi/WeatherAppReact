// export async function fetchWeather(city){
//     console.log("API call for:",city);s
// }
const BASE_URL = "https://api.weatherapi.com/v1";
const KEY = import.meta.env.VITE_WEATHERAPI_KEY;

function requireKey(){
    if(!KEY) throw new Error("Missing VITE_WEATHERAPI_KEY in .env ");
}


// Today + next 4 days ( total 5 days)
async function fetchForecast(city,days=4){
    console.log(requireKey());
    requireKey();
    const url = `${BASE_URL}/forecast.json?key=${KEY}&q=${encodeURIComponent(
        city
      )}&days=${days}&aqi=no&alerts=no`;

    const res = await fetch(url);

    const data  = await res.json();

    if (!res.ok) throw new Error(data?.error?.message || "History API Error");
    return data;

}

// Yesterday (history)
async function fetchHistory(city){
    requireKey();

    // get yesterday's date
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -1);

    // convert to YYYY-MM-DD format
    const dateYYYYMMDD = yesterday.toISOString().split("T")[0];

    const url = `${BASE_URL}/history.json?key=${KEY}&q=${encodeURIComponent(city)}&dt=${dateYYYYMMDD}`;

    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) throw new Error(data?.error?.message || "History API error");

    return data;
}


export async function fetchWeatherBundle(city){

    const[forecastData,historyData] = await Promise.all([
        fetchForecast(city),
        fetchHistory(city)
    ]);


    const location = forecastData.location;
    const todayDay = forecastData.forecast.forecastday[0].day;

    return {
        location:{
            name:location.name,
            country: location.country,
        },
        today:{
            temp: todayDay.avgtemp_c,
            description:todayDay.condition.text,
            iconUrl: "https:" + todayDay.condition.icon,
            country: location.country
        },
        forecast: forecastData,
        history: historyData
    };
}