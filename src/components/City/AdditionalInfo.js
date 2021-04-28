import React from "react";
import LongTermForecast from './LongTermForecast';

let AdditionalInfo = ({city}) => {
    let feels_like = Math.round(city.forecast.main.feels_like);
    let temp_max = Math.round(city.forecast.main.temp_max);
    let temp_min = Math.round(city.forecast.main.temp_min);
    return (
        <div className="additional-info">
            <p className="card-text">feels like: {feels_like} °C</p>
            <p className="card-text">humidity: {city.forecast.main.humidity} %</p>
            <p className="card-text">pressure: {city.forecast.main.pressure} hPa</p>
            <p className="card-text">temp max: {temp_max} °C</p>
            <p className="card-text">temp min: {temp_min} °C</p>
            <div style={{height: 200, marginBottom: 20}}>
                {"longTermForecast" in city &&
                <LongTermForecast city={city}/>
                }
            </div>
        </div>
    )
}

export default AdditionalInfo;
