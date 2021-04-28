import React from "react";

let MainInfo = ({city}) => {
    let temp = Math.round(city.forecast.main.temp);

    return (
        <div className="city-info">
            <h2 className="card-title">{city.name}</h2>
            <p className="card-text">current temp: {temp} °C</p>
        </div>
    )
}

export default MainInfo;