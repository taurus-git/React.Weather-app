import React from "react";

let WeatherIcon = ({city}) => {
    if (!city.forecast.weather[0].icon) return;
    let iconcode = city.forecast.weather[0].icon;
    let iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

    return(
        <img className="card-img-top" src={iconurl} alt="current weather icon"></img>
    )
}

export default WeatherIcon;