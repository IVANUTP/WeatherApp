export const MapCity = ({ weatherData }) => {

    const lat = weatherData?.coord?.lat;
    const lon = weatherData?.coord?.lon;

    return (
        <div className="mapcity-col">

            <div className="mapcity-card">

                <div className="mapcity-header">
                    <h3>📍 Ubicación</h3>
                    <span>Mapa</span>
                </div>

                <div className="mapcity-body">
                    {lat && lon ? (
                        <iframe
                            title="map"
                            className="mapcity-iframe"
                            src={`https://maps.google.com/maps?q=${lat},${lon}&z=12&output=embed`}
                            allowFullScreen
                        />
                    ) : (
                        <div className="mapcity-empty">
                            <span>🔍</span>
                            <p>Busca una ciudad</p>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};