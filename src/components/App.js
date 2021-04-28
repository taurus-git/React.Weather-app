import React from 'react';
import Header from "./Header";
import CityForm from "./CityForm";
import CitiesList from './CitiesList';
import useStateWithLocalStorage from './useStateWithLocalStorage';
import CitiesCards from "./CitiesCards";
import DailyForecast from "./DailyForecast";
import FewDaysForecast from "./FewDaysForecast";

let App = () => {
    const [cities, setCities] = useStateWithLocalStorage('cities');

    const addCity = async cityName => {
        setCities([
            ...cities,
            {
                key: Date.now(),
                id: Date.now(),
                name: cityName,
                forecast: await getForecast(cityName),
                longTermForecast: await FewDaysForecast(cityName),
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

    let getForecast = async city => await DailyForecast(city);

    const setLongTermForecast = async cityName => {
        let weatherData = await getLongTermForecast(cityName);

        let citiesList = (cities.filter(city => {
            if (city.name == cityName) {
                return city.longTermForecast = weatherData;
            } else {
                return cities;
            }
        }));
        setCities(citiesList);
    }

    let getLongTermForecast = async city => await FewDaysForecast(city);

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
                <CitiesCards
                    cities={cities}
                    setForecast={setForecast}
                    setLongTermForecast={setLongTermForecast}
                />
            </div>
        </div>
    );
}

export default App;
