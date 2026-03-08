import OtherDaysCard from "./OtherDaysCard";

export default function OtherDaysList({ days,loading,error }){
    if(loading){
        return <p>Loading forecast....</p>
    }

    if(error){
        return <p style={{ color:"crimson" }}>{error}</p>
    }

    if(!days || days.length ===0){
        return <p> No forecast data available</p>;
    }

    return (
        <div>
            <h2>Other 4 days</h2>

            <div
                style={{
                    display:"grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap:16,
                    marginTop: 16
                }}
            >
                {days.map((day,index) => (
                    <OtherDaysCard key={index} day={day} />
                ))}
            </div>
        </div>
    );
}
