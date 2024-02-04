import React from 'react'
import AirIcon from '@mui/icons-material/Air';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThermostatIcon from '@mui/icons-material/Thermostat';

function Home({weatherData}) {

  const now = new Date()
  const localDay = now.toLocaleDateString()
  const localTime = now.toLocaleTimeString()





  const santigrat = 273.15


  return (
    <>
      <div className='grid gap-10 relative justify-center text-center h-full text-white'>
        <div className='items-center'>
          <h1 className='text-6xl text-center font-bold mt-14 mb-3'>{weatherData.name}</h1>
        </div>
        <div>
          <div className='justify-center items-center col-span-2 flex flex-wrap gap-2'>
          <div className='w-96 '>
          <img className='w-72 h-64' src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}/>
          </div>
          <div>
          <h3 className='text-start text-2xl'>Temp {Math.floor(weatherData.main.temp - santigrat)}°C</h3>
          <h5 className='text-start text-xl'>{weatherData.weather[0].description.replace(/^[a-z]/, char => char.toUpperCase())}</h5>

          <small className='text-start text-xl'>{localDay} / {localTime}</small>
          </div>
          </div>
          <div className=' justify-center flex flex-wrap'>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 xl:gap-10 '>
              <div className='w-56 h-56 border-2 rounded-lg backdrop-blur-lg bg-white/15 flex flex-col justify-center gap-2 items-center'>
                  <WhatshotIcon className='items-center justify-center mx-auto ' style={{ fontSize: '100px' }}/>
                  <h1 className='text-xl'>Maximum Temp</h1>
                  <h1 className='text-xl'>{Math.floor(weatherData.main.temp_min - santigrat)}°C</h1>
              </div>
              <div className='w-56 h-56 border-2  rounded-lg backdrop-blur-lg bg-white/15 flex-col justify-center gap-2 items-center'>
                  <AcUnitIcon  className='items-center justify-center mx-auto mt-6' style={{ fontSize: '100px' }}/>
                  <h1 className='text-xl '>Minimum Temp</h1>
                  <h1 className='text-xl '>{Math.floor(weatherData.main.temp_max - santigrat)}°C</h1>
              </div>
              <div className='w-56 h-56 border-2  rounded-lg backdrop-blur-lg bg-white/15 flex-col justify-center gap-2 items-center'>
                  <WaterDropIcon  className='items-center justify-center mx-auto mt-6' style={{ fontSize: '100px' }}/>
                  <h1 className='text-xl '>Humidity</h1>
                  <h1 className='text-xl '>{weatherData.main.humidity}%</h1>
              </div>
              <div className='w-56 h-56 border-2  rounded-lg backdrop-blur-lg bg-white/15 flex-col justify-center gap-2 items-center'>
                  <AirIcon className='items-center justify-center mx-auto mt-6' style={{ fontSize: '100px' }}/>
                  <h1 className='text-xl '>Wind Speed</h1>
                  <h1 className='text-xl '>{weatherData.wind.speed}</h1>
              </div>
              <div className='w-56 h-56 border-2  rounded-lg backdrop-blur-lg bg-white/15 flex-col justify-center gap-2 items-center'>
                  <ThermostatIcon  className='items-center justify-center mx-auto mt-6' style={{ fontSize: '100px' }}/>
                  <h1 className='text-xl '>Feels Like</h1>
                  <h1 className='text-xl '>{Math.floor(weatherData.main.feels_like - santigrat)}°C</h1>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Home