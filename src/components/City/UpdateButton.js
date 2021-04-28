import React from "react";

let UpdateButton = ({city, setForecast}) => {
    let stopPropagation = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    };
    return (
        <button className="btn btn-primary" onClick={(e) => {
            stopPropagation(e);
            setForecast(city.name);
        }}>Update Weather
        </button>
    )
}

export default UpdateButton;