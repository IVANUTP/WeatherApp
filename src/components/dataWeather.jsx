export const DataWeather = ({ weatherData }) => {
    return (
        <div className="weather-col">

            <div className="weather-card">

                <div className="weather-header">
                    <h3>🌤️ Clima</h3>
                    <span>Datos en tiempo real</span>
                </div>

                <div className="weather-body">

                    {weatherData ? (
                        <>
                            {/* CIUDAD */}
                            <h2 className="weather-city">
                                {weatherData.name}
                            </h2>

                            <span className="weather-country">
                                {weatherData.sys.country}
                            </span>

                            {/* ICONO */}
                            <img
                                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                alt="clima"
                                className="weather-icon"
                            />

                            {/* TEMPERATURA */}
                            <h1 className="weather-temp">
                                {Math.round(weatherData.main.temp)}°
                            </h1>

                            <p className="weather-desc">
                                {weatherData.weather[0].description}
                            </p>

                            {/* INFO GRID */}
                            <div className="weather-info">

                                <div className="weather-item">
                                    <span>💧 Humedad</span>
                                    <p>{weatherData.main.humidity}%</p>
                                </div>

                                <div className="weather-item">
                                    <span>🌬️ Viento</span>
                                    <p>{weatherData.wind.speed} m/s</p>
                                </div>

                                <div className="weather-item">
                                    <span>🌡️ Sensación</span>
                                    <p>{Math.round(weatherData.main.feels_like)}°C</p>
                                </div>

                                <div className="weather-item">
                                    <span>☁️ Estado</span>
                                    <p className="text-capitalize">
                                        {weatherData.weather[0].main}
                                    </p>
                                </div>

                            </div>
                        </>
                    ) : (
                        <div className="weather-empty">
                            <span>🌎</span>
                            <p>Busca una ciudad para ver el clima</p>
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
};