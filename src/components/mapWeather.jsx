import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const API_KEY = "01bc65faa46020bf0b002dcde4375cd1";
const ChangeMapView = ({ center }) => {
    const map = useMap();

    useEffect(() => {
        map.setView(center, 10);
    }, [center, map]);

    return null;
};
export const MapWeather = ({ weatherData }) => {

    const lat = weatherData?.coord?.lat || 19.04;
    const lon = weatherData?.coord?.lon || -98.20;



    return (
        <div className="map-card">

            <div className="map-header">
                <h3>Mapa Climático</h3>
                <span>Vista en tiempo real</span>
            </div>

            <div className="map-container">
                <MapContainer
                    center={[lat, lon]}
                    zoom={10}
                    className="leaflet-map"
                >

                    {/* 🔥 AQUÍ ESTÁ LA MAGIA */}
                    <ChangeMapView center={[lat, lon]} />

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <TileLayer
                        url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
                    />

                </MapContainer>
            </div>

        </div>
    );
};