import React, {useState} from "react";

let CityForm = ({addCity}) => {
    const [cityName, setCityName] = useState("");

    const handleChange = e => {
        setCityName(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (cityName) {
            addCity(cityName);
        }
        setCityName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <div className="input-group mb-3">
                    <label className="form-label">
                        <input
                            type="text"
                            name="city"
                            value={cityName}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="City name"
                        />
                    </label>
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CityForm;