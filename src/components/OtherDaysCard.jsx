// shows yesterday and next 4 days
export default function OtherDaysCard({ day,label }){
    if(!day) return null;

    return(
        <div
            style={{
                border:"1px solid #ddd",
                borderRadius:12,
                padding: 16,
                minWidth: 160,
                textAlign: "center",
            }}
        >
                <h3 style={{ marginBottom:12 }}> {label ? `${day.date} - ${label}` : day.date}</h3>
                {day.iconUrl ? (
                    <img
                        src={day.iconUrl}
                        alt={day.description || "Weather icon"}
                        width={64}
                        height={64}
                    />
                ): null}

                <div style={{ fontSize:28, fontWeight:700,marginTop:8 }}>
                    {day.temp ?? "--"} °C
                </div>

                <div style={{ opacity:0.8,marginTop:6 }}>
                    {day.description || "_"}
                </div>
            </div>
        );
}