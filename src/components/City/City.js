import React from "react";
import WeatherIcon from "./WeatherIcon";
import MainInfo from "./MainInfo";
import AdditionalInfo from "./AdditionalInfo";
import UpdateButton from "./UpdateButton";

let City = ({cities, setForecast, setLongTermForecast}) => {
    return (
        cities.map(city => {
            return (
                <div className="col-sm-6" key={city.key}>
                    <div className="card text-center" onClick={(e) => {
                        e.currentTarget.classList.toggle('active');
                        setLongTermForecast(city.name);
                    }}>
                        <WeatherIcon city={city}/>
                        <div className="card-body">
                            <MainInfo city={city}/>
                            <AdditionalInfo city={city}/>
                        </div>
                        <UpdateButton
                            city={city}
                            setForecast={setForecast}
                        />
                    </div>
                </div>
            )
        })
    )
}

export default City