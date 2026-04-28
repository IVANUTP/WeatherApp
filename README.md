# 🌤️ Weather App

Aplicación web moderna desarrollada con React y Vite que permite consultar el clima en tiempo real de cualquier ciudad del mundo, incluyendo mapas interactivos y pronóstico extendido.

---

## 🚀 Demo

> *(Agrega aquí tu link de Vercel o servidor)*

---

## 📸 Vista previa

*(Aquí puedes agregar screenshots de tu app)*

---

## ✨ Características

* 🌍 Búsqueda de clima por ciudad y país
* 📍 Ubicación inicial por defecto: **Puebla, MX**
* 🗺️ Mapa interactivo con ubicación de la ciudad
* 🌡️ Mapa climático con capas de temperatura
* 📅 Pronóstico de 5 días
* ⚠️ Alertas elegantes con SweetAlert2
* 🎨 UI moderna tipo dashboard (dark + glassmorphism)
* 📱 Diseño responsive

---

## 🧠 Tecnologías utilizadas

* ⚛️ React + Vite
* 🌐 API de OpenWeatherMap
* 🗺️ React Leaflet
* 📦 Axios
* 🔔 SweetAlert2
* 🎨 CSS moderno (Glass UI + Grid Layout)

---

## 📁 Estructura del proyecto

```
src/
│
├── api/
│   ├── weatherApi.js
│   └── weatherForecast.js
│
├── components/
│   ├── Header.jsx
│   ├── FormCity.jsx
│   ├── DataWeather.jsx
│   ├── MapCity.jsx
│   ├── MapWeather.jsx
│   └── Forecast.jsx
│
├── style/
│   └── app.css
│
└── App.jsx
```

---

## ⚙️ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/weather-app.git
```

2. Entrar al proyecto:

```bash
cd weather-app
```

3. Instalar dependencias:

```bash
npm install
```

4. Ejecutar en desarrollo:

```bash
npm run dev
```

---

## 🔑 Configuración API

Esta aplicación utiliza la API de OpenWeatherMap.

Crea una cuenta en:
👉 https://openweathermap.org/

Y reemplaza tu API KEY en:

```js
const API_KEY = "TU_API_KEY";
```

---

## 📊 Funcionalidades destacadas

### 🌤 Clima en tiempo real

Obtiene temperatura, humedad, viento y sensación térmica.

### 🗺️ Mapas interactivos

* Ubicación de la ciudad (Google Maps)
* Mapa climático con capas de temperatura

### 📅 Pronóstico extendido

Visualización de los próximos 5 días con datos agrupados por fecha.

### ⚠️ Manejo de errores

* Validación de campos
* Alertas visuales con SweetAlert2
* Control de errores en API

---

## 🎨 Diseño

La aplicación implementa un diseño moderno:

* Dark mode
* Glassmorphism
* CSS Grid (sin dependencia fuerte de Bootstrap)
* Animaciones suaves

---

## 📱 Responsive

* Desktop → layout tipo dashboard
* Tablet → componentes apilados
* Mobile → diseño optimizado vertical

---

## 🚀 Mejoras futuras

* 📍 Geolocalización automática
* ⭐ Sistema de ciudades favoritas
* 🎨 Cambio dinámico de UI según clima
* 📊 Más métricas (UV, presión, visibilidad)
* 📱 PWA (instalable como app)

---

## 👨‍💻 Autor

Desarrollado por **Ángel Iván García**

* 💼 Desarrollador Web & Mobile
* 🚀 Enfocado en React, Laravel y UI moderna

---

## 📄 Licencia

Este proyecto es de uso educativo y para portafolio.
