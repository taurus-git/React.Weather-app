import React from "react";
import axios from "axios";

let FewDaysForecast = async city => {
   let weatherData = await axios.get((
           `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=16&units=metric&appid=b0e3cfcac6b3bb698bc3351ad3e21975`
   ));

    return weatherData;
}

export default FewDaysForecast;