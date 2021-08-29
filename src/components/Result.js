import React from 'react';

const Result = (props) =>{
    const { date, main, sunrise, sunset, temp, pressure, wind, city, err, } = props.weather
    
    let content = null;
    if (!err && city){
        const sunriseTime = new Date(sunrise*1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset*1000).toLocaleTimeString()
        const tempConvertToCelcius = temp - 273.15;
        content = (
            <div>
                <h3>Wyszukiwanie dla miasta {city.slice(0,1).toUpperCase() + city.slice(1,city.lenght)}</h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Temperatura: {tempConvertToCelcius}</h4>
                <h4>Stan: {main}</h4>
                <h4>Wschód słońca: {sunriseTime}</h4>
                <h4>Ciśnienie {pressure}</h4>
                <h4>Wiatr: {wind}km/h</h4>
            </div>
        )
    }
    return(
        <div className="result">
            {props.error ? `Nie mam w bazie ${city}` : content}
        </div> 
    )
}

export default Result;