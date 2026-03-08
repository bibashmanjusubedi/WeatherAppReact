export default function TodayWeather({ city, weather, loading, error }) {
    // If nothing searched yet
    if (!city) {
      return (
        <div className="today-card empty-state">
          <p>Search a city to see today’s weather.</p>
        </div>
      );
    }
  
    // Loading state
    // if (loading) {
    //   return (
    //     <div className="today-card empty-state">
    //       <h2>Today — {city}</h2>
    //       <p>Loading...</p>
    //     </div>
    //   );
    // }
    if (loading) {
      return (
        <div className="today-card empty-state">
          <p>Loading weather for {city}...</p>
        </div>
      );
    }
  
  
    // Error state
    if (error) {
      return (
        <div className="today-card empty-state">
          {/* <h2>Today — {city}</h2>
          <p style={{ color: "crimson" }}>{error}</p> */}
          <p className="error-text">{error}</p>
        </div>
      );
    }
  
    // No data yet (API not wired, or response missing)
    // if (!weather) {
    //   return (
    //     <div>
    //       <h2>Today — {city}</h2>
    //       <p>No weather data yet.</p>
    //     </div>
    //   );
    // }
    if (!weather) return null;
  
    // Expected shape (you can adapt later):
    // weather = {
    //   temp, description, iconUrl, feelsLike, humidity, wind, country
    // }
  //   return (
  //     <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
  //       <h2>
  //         Today({weather.date}) — {city}
  //         {weather.country ? `, ${weather.country}` : ""}
  //       </h2>
  
  //       <div style={{ display: "flex",flexDirection:"column", alignItems: "center",justifyContent:"center", gap: 12 }}>
  //         {weather.iconUrl ? (
  //           <img
  //             src={weather.iconUrl}
  //             alt={weather.description || "Weather icon"}
  //             width={64}
  //             height={64}
  //           />
  //         ) : null}
  
  //         <div>
  //           <div style={{ fontSize: 36, fontWeight: 700 }}>
  //             {weather.temp ?? "--"}°C
  //           </div>
  //           <div style={{ opacity: 0.8 }}>
  //             {weather.description || "—"}
  //           </div>
  //         </div>
  //       </div>
        
  //       {/*
  //       <hr style={{ margin: "16px 0" }} />
  
  //       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
  //         <div>
  //           <strong>Feels like:</strong> {weather.feelsLike ?? "--"}°C
  //         </div>
  //         <div>
  //           <strong>Humidity:</strong> {weather.humidity ?? "--"}%
  //         </div>
  //         <div>
  //           <strong>Wind:</strong> {weather.wind ?? "--"} m/s
  //         </div>
  //       </div>
  //       */}
  //     </div>

  //   );
  // }

return (
  <div className="today-card">
    <div className="today-left">
      <img
        className="today-icon"
        src= {weather.iconUrl}
        alt={weather.description}
         />
    </div>

    <div className="today-right">
      <p className="today-label">Today ({weather.date})</p>
      <h1 className="today-city">{city},{weather.country}</h1>
      <p className="today-temp">Temperature: {weather.temp} °C</p>
      <p className="today-desc">{weather.description}</p>
    </div>
  </div>
);
}