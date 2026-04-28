import { useState } from "react";
import { getWeather } from "../api/watherApi";
import Swal from "sweetalert2";

export const FormCity = ({ setWeatherData }) => {

    const [city, setCity] = useState("Puebla");
    const [country, setCountry] = useState("MX");
    const [loading, setLoading] = useState(false);

    const handleWeather = async () => {
        if (!city || !country) {
            Swal.fire({
                icon: "warning",
                title: "Campos vacíos",
                text: "Debes ingresar ciudad y país",
                confirmButtonColor: "#22c55e"
            });
            return;
        }

        setLoading(true);
        const data = await getWeather(city, country);
        setLoading(false);

        if (!data || data.cod === "404") {
            Swal.fire({
                icon: "error",
                title: "Ciudad no encontrada",
                text: "Verifica el nombre o el código del país",
                confirmButtonColor: "#ef4444"
            });
            return;
        }
        setWeatherData(data);
    };

    return (
        <div className="form-container">

            <div className="form-grid">

                {/* CIUDAD */}
                <div className="input-modern">
                    <i className="fas fa-city"></i>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Ciudad (ej. Puebla)"
                    />
                </div>

                {/* PAÍS */}
                <div className="input-modern">
                    <i className="fas fa-flag"></i>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value.toUpperCase())}
                        placeholder="País (MX)"
                        maxLength={2}
                    />
                </div>

                {/* BOTÓN */}
                <button
                    className="btn-modern"
                    onClick={handleWeather}
                    disabled={loading}
                >
                    {loading ? "Buscando..." : "Consultar clima"}
                </button>

            </div>

        </div>
    );
};