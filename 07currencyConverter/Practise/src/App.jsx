import { useState } from 'react';
import useWeather from './hooks/useWeather';
import SearchInput from './components/SearchInput';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');
  const { weather, loading, error } = useWeather(query);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(city.trim());
  };

  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      <form onSubmit={handleSearch}>
        <SearchInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
