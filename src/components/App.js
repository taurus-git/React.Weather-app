import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import CityForm from "./CityForm";
import CitiesList from './CitiesList';
import useStateWithLocalStorage from './useStateWithLocalStorage';
import CitiesCards from "./CitiesCards";
import WeatherForecast from "./WeatherForecast";

let App = () => {
    const [cities, setCities] = useStateWithLocalStorage('cities');

    const addCity = async cityName => {
        setCities([
            ...cities,
            {
                key: Date.now(),
                id: Date.now(),
                name: cityName,
                forecast: await getForecast(cityName)
            }
        ])
    };

    const setForecast = async cityName => {
        let newForecast = await getForecast(cityName);

        let citiesList = (cities.filter(city => {
            if (city.name == cityName) {
                return city.forecast = newForecast;
            } else {
                return cities;
            }
        }));
        setCities(citiesList);
    }

    let getForecast = async city => await WeatherForecast(city);

    let handleDelete = id => {
        let filtered = cities.filter(city => {
            return city.id != id;
        });
        setCities(filtered);
    }

    return (
        <div className="app container">
            <div className="citiesListMain">
                <Header/>
                <CityForm addCity={addCity}/>
                <CitiesList
                    cities={cities}
                    handleDelete={handleDelete}
                />
                <CitiesCards cities={cities} setForecast={setForecast}/>
            </div>
        </div>
    );
}

export default App;
