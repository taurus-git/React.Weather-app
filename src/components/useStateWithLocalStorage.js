import {useState, useEffect} from "react";

export default (localStorageKey) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(localStorageKey)) || []
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}