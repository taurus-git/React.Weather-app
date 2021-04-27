import React from 'react';
import ReactDOM from 'react-dom';
import "./CityListItem.css";

let CityListItem = ({id, handleDelete, name}) => {
    const handleClick = e => {
        e.preventDefault()
        handleDelete(e.currentTarget.id)
    }

    return (
        <li className="list-group-item">{name}
            <button className="btn btn-danger btn-sm" id={id} onClick={handleClick}>Delete</button>
        </li>
    );
};

export default CityListItem;