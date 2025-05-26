const WeatherCard = ({ data }) => {
    if (!data) return null;

    return (

        <div className="p-4 bg-blue-100 rounded shadow text-center">
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p>{data.weather[0].description}</p>
            <p>🌡️ {data.main.temp}°C</p>
            <p>💨 {data.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;