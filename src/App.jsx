import axios from 'axios';
import { useEffect, useState } from "react"
import Home from './components/home';
import Search from './components/Search';

function App() {

  const apikey = 'e4be4283c539027d69d6ea2ac228d757';
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('trabzon')


  useEffect(() => {

    async function fetchWeather() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        );
        setWeatherData(response.data);
        console.log(response.data);
      } catch (error) {
      }
    }
  
    fetchWeather();
  }, [city]);

  if(weatherData === null){
    return <>
      <div>Yükleniyor...</div>
    </>
  }

  return (
    <>
      <Search setCity={setCity}/>
      <Home weatherData={weatherData}/>
    </>
  )
}

export default App
