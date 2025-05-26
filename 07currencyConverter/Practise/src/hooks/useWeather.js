import { useState, useEffect } from "react";

const API_KEY = 'f3d495feebe85d2ada4494a4e292b5ee';

const useWeather = (city) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return;

        const fetchWeather = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );

                const data = await res.json();
                if (data.cod !== 200) throw new Error(data.message);
                setWeather(data);
                setError(null);
            }
            catch (err) {
                setError(err.message);
                setWeather(null);
            }
            finally {
                setLoading(false);
            }
        }

        fetchWeather();

    }, [city]);

    return {weather, loading, error};
};

export default useWeather;