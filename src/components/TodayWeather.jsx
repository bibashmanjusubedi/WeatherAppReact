export default function TodayWeather({ city, weather, loading, error }) {
    // If nothing searched yet
    if (!city) {
      return (
        <div>
          <h2>Today</h2>
          <p>Search a city to see today’s weather.</p>
        </div>
      );
    }
  
    // Loading state
    if (loading) {
      return (
        <div>
          <h2>Today — {city}</h2>
          <p>Loading...</p>
        </div>
      );
    }
  
    // Error state
    if (error) {
      return (
        <div>
          <h2>Today — {city}</h2>
          <p style={{ color: "crimson" }}>{error}</p>
        </div>
      );
    }
  
    // No data yet (API not wired, or response missing)
    if (!weather) {
      return (
        <div>
          <h2>Today — {city}</h2>
          <p>No weather data yet.</p>
        </div>
      );
    }
  
    // Expected shape (you can adapt later):
    // weather = {
    //   temp, description, iconUrl, feelsLike, humidity, wind, country
    // }
    return (
      <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 12 }}>
        <h2>
          Today — {city}
          {weather.country ? `, ${weather.country}` : ""}
        </h2>
  
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {weather.iconUrl ? (
            <img
              src={weather.iconUrl}
              alt={weather.description || "Weather icon"}
              width={64}
              height={64}
            />
          ) : null}
  
          <div>
            <div style={{ fontSize: 36, fontWeight: 700 }}>
              {weather.temp ?? "--"}°C
            </div>
            <div style={{ opacity: 0.8 }}>
              {weather.description || "—"}
            </div>
          </div>
        </div>
        
        {/*
        <hr style={{ margin: "16px 0" }} />
  
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div>
            <strong>Feels like:</strong> {weather.feelsLike ?? "--"}°C
          </div>
          <div>
            <strong>Humidity:</strong> {weather.humidity ?? "--"}%
          </div>
          <div>
            <strong>Wind:</strong> {weather.wind ?? "--"} m/s
          </div>
        </div>
        */}
      </div>

    );
  }