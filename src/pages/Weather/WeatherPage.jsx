import React, {useState} from 'react';
import './WeatherPage.css'

const WeatherPage = () => {

    const API_KEY = '317147e078c54d6c882102156230710'
    const [city, SetCity] = useState('')
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [gradus,setGradus] = useState ("")
    const [wind_kph,setWind_kph] = useState ("")
    const [ wind_degree,setWind_degree] = useState("")
    const [errorText  , setErrorText]  = useState("")

    const defaultState = () => {
        setWeather(null)
        setIsActive (false)
        SetCity("")
        setGradus('')
        setWind_kph('')
        setWind_degree('')
        setErrorText ('')
    }

    const getWeather = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
            const data = await response.json()

            if (response.status === 200) {
                setWeather(data)
                setIsLoading(false)
                setIsActive(true)
                setGradus("°C🌡")
                setWind_kph("Wind_kph")
                setWind_degree('wind_degree')
                setErrorText('')
                setWeather(data)
            } else if(response.status === 400 ) {
                defaultState()
                setErrorText('В запросе синтаксическая ошибка')
            } else {
                defaultState()
                setErrorText('Произошла неизвестная ошибка')
            }
        } catch (e) {
            defaultState()
            setErrorText('Сервер недоступен!')
        } }

    const resetWeather = async ()  => {
        defaultState()
    }

        return (

            <div className="search">
                <input id='search' type="text" placeholder='City' onChange={(e) => SetCity(e.target.value)}
                       value={city} />
                <button className="button1" type="button" value="put the city" onClick={getWeather}>🔎</button>
                <button className='button2' type="button" onClick={resetWeather}>🗑</button>
                <div className="result_parent">
                    <div className='result'>
                        <div className="nazvanie">
                            <p className='country'>{isActive && weather.location.country} </p>
                            <p className="name">{isActive && weather.location.name }</p>
                            <p className='temp'>{isActive && weather.current.temp_c }{gradus}</p>

                        </div>
                        <div className="error_parent">
                            <p className="error">{errorText }</p>
                        </div>
                        <div className="temp_parent">


                            </div>
                        <div className="weather-result">
                            <div className="wind_kph_parent"><p className="wind_kph">{wind_kph} { isActive && weather.current.wind_kph }</p>
                                <p className="degree">{wind_degree} {isActive  && weather.current.wind_degree }</p>
                        </div>


                        </div>

                    </div>


                </div>
            </div>


        )

};

export default WeatherPage;