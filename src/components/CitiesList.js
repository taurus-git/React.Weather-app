import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import CityListItem from './CityListItem';

let CitiesList = ({cities, handleDelete}) => {
    return (
        <div className="input-group mb-3">
            <ul className="list-group list-group-flush">
                {cities.map(city => {
                    return (
                        <CityListItem key={city.key} id={city.id} handleDelete={handleDelete} name={city.name}/>
                    )
                })}
            </ul>
        </div>
    );
};

export default CitiesList;