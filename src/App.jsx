import { useState, useEffect } from 'react'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { FormCity } from './components/FormCity'
import './style/app.css'
import { DataWeather } from './components/dataWeather'
import { MapCity } from './components/mapCity'
import { MapWeather } from './components/mapWeather'
import { Forecast } from './components/forecast'
import { getWeather } from './api/watherApi' // 🔥 IMPORTANTE

function App() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const loadDefaultCity = async () => {
            const data = await getWeather("Puebla", "MX");
            setWeatherData(data);
        };

        loadDefaultCity();
    }, []);

    return (
        <>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">

                        <div className="container-fluid">
                            <Header />

                            <FormCity setWeatherData={setWeatherData} />

                            <div className="dashboard-grid">
                                <MapCity weatherData={weatherData} />
                                <DataWeather weatherData={weatherData} />
                            </div>

                            <div className="dashboard-grid-2">
                                <MapWeather weatherData={weatherData} />
                                <Forecast weatherData={weatherData} />
                            </div>

                        </div>

                    </div>

                    <Footer />
                </div>
            </div>
        </>
    )
}

export default App;
