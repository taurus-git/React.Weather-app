import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./CitiesCards.css";

let CitiesCards = ({cities, setForecast}) => {
    return (
        <>
            <h1>Cities</h1>
            <div className="row">
                {cities.map(city => {
                    let temp = Math.round(city.forecast.temp);
                    let feels_like = Math.round(city.forecast.feels_like);
                    let temp_max = Math.round(city.forecast.temp_max);
                    let temp_min = Math.round(city.forecast.temp_min);

                    return (
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body" key={city.key} onClick={(e) => {
                                    e.currentTarget.classList.toggle('active');
                                }}>
                                    <div className="city-info">
                                        <h2 className="card-title">{city.name}</h2>
                                        <p className="card-text">current temp: {temp} °C</p>
                                    </div>
                                    <div className="additional-info">
                                        <p className="card-text">feels like: {feels_like} °C</p>
                                        <p className="card-text">humidity: {city.forecast.humidity} %</p>
                                        <p className="card-text">pressure: {city.forecast.pressure} hPa</p>
                                        <p className="card-text">temp max: {temp_max} °C</p>
                                        <p className="card-text">temp min: {temp_min} °C</p>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={() => setForecast(city.name)}>Update
                                    Weather
                                </button>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    );
}

export default CitiesCards;
