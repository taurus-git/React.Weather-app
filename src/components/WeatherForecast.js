import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

let WeatherForecast = async city => {
    let weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=17dc0e3798f4ba2ad7fd5bb1cf11d460`
    )
    return weatherData.data.main;
}

export default WeatherForecast;