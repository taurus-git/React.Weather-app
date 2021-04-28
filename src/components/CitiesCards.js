import React from "react";
import "./CitiesCards.css";
import City from "./City/City";

let CitiesCards = ({cities, setForecast, setLongTermForecast}) => {
    return (
        <>
            <h1>Cities</h1>
            <div className="row">
                <City
                    cities={cities}
                    setForecast={setForecast}
                    setLongTermForecast={setLongTermForecast}
                />
            </div>
        </>
    );
}

export default CitiesCards;
