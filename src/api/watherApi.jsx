import axios from "axios";

const API_KEY = "01bc65faa46020bf0b002dcde4375cd1";

export const getWeather = async (city, country) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric&lang=es`
        );

        return response.data;
    } catch (error) {
        console.error("Error al obtener clima:", error);
        return null;
    }
};
export const getForecast = async (city, country) => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric&lang=es`
        );

        return response.data;
    } catch (error) {
        console.error("Error al obtener forecast:", error);
        return null;
    }
};