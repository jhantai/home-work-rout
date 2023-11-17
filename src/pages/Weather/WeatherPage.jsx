import React from 'react';
import './WeatherPage.css'

const WeatherPage = (props) => {
    return (
        <div>
            <h2>Прогноз погоды</h2>

        </div>
    );

        const { SetCity,
            getWeather,
            weather,
            isActive,
            resetWeather,
            city,
            gradus,
            wind_kph,
            wind_degree,
            errorText
        } = props

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
                        </div>
                        <div className="error_parent">
                            <p className="error">{errorText }</p>
                        </div>
                        <div className="temp_parent">

                            <p className='temp'>{isActive && weather.current.temp_c }{gradus}</p>


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