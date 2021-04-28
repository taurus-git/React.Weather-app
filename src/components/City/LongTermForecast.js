import React from "react";
import { Bar } from 'react-chartjs-2';

let LongTermForecast = ({city}) => {
    let forecastList = city.longTermForecast.data.list;
    forecastList.splice(8, 8);

    let forecastDataObj = {
        labels: [],
        datasets: [{
            label: 'Long term forecast',
            data: [],
            backgroundColor: [],
            borderWidth: 1
        }]
    };

    let between = (num, min, max) => {
        return num >= min && num <= max;
    }

    let getBackgroundColor = temp => {
        if (between(temp, 25, 100)) {
            return 'rgba(255, 99, 132, 0.2)';
        } else if (between(temp, 10, 24)) {
            return 'rgba(255, 206, 86, 0.2)';
        } else if (between(temp, -5, 9)) {
            return 'rgba(57,226,226,0.2)';
        } else if (between(temp, -100, -4)) {
            return 'rgba(27,113,239,0.2)';
        } else {
            return 'rgba(255, 159, 64, 0.2)';
        }
    }

    let formatDate = date => {
        let dateObj = new Date( Date.parse(date) );
        let day = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let formattedDate = `${day}.${month} at ${hours}:${minutes}`;
        return formattedDate;
    }

    let forecastData = forecastList.map(timepoint => {
        let date = formatDate(timepoint.dt_txt)
        let temp = Math.round(timepoint.main.temp);
        let backgroundColor = getBackgroundColor(temp);
        forecastDataObj.labels.push(date);
        forecastDataObj.datasets[0].data.push(temp);
        forecastDataObj.datasets[0].backgroundColor.push(backgroundColor);
    })

    return (
        <>
            <Bar
                data={forecastDataObj}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false}}
            />
        </>
    )
}

export default LongTermForecast;