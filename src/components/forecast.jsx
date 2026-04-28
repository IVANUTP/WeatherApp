import { useEffect, useState } from "react";
import { getForecast } from "../api/watherApi";


export const Forecast = ({ weatherData }) => {

    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (!weatherData) return;

            setLoading(true);

            const data = await getForecast(
                weatherData.name,
                weatherData.sys.country
            );

            setLoading(false);

            if (!data || !data.list) return;

            // 🔥 Agrupar por día (más pro)
            const dailyMap = {};

            data.list.forEach(item => {
                const date = item.dt_txt.split(" ")[0];

                if (!dailyMap[date]) {
                    dailyMap[date] = item;
                }
            });

            const daily = Object.values(dailyMap).slice(0, 5);

            setForecast(daily);
        };

        fetchData();
    }, [weatherData]);

    return (
        <div className="forecast-card">

            <div className="forecast-header">
                <h3>📅 Pronóstico 5 días</h3>
                <span>Próximos días</span>
            </div>

            <div className="forecast-body">

                {loading ? (
                    <div className="forecast-empty">
                        <p>Cargando...</p>
                    </div>

                ) : forecast.length > 0 ? (

                    <div className="forecast-grid">

                        {forecast.map((day, index) => (
                            <div key={index} className="forecast-item">

                                <p className="forecast-day">
                                    {new Date(day.dt_txt).toLocaleDateString("es-MX", {
                                        weekday: "short"
                                    })}
                                </p>

                                <img
                                    src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                    alt="icon"
                                />

                                <p className="forecast-temp">
                                    {Math.round(day.main.temp)}°
                                </p>

                                <span className="forecast-desc">
                                    {day.weather[0].description}
                                </span>

                            </div>
                        ))}

                    </div>

                ) : (
                    <div className="forecast-empty">
                        <p>Busca una ciudad</p>
                    </div>
                )}

            </div>

        </div>
    );
};