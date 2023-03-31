import React, { useState, useEffect } from 'react';
import axios from "axios";

function Day1(props) {

    const [avgTemp, setAvgTemp] = useState(0)
    const [icon, setIcon] = useState("")

    // let weatherApi ="http://api.weatherapi.com/v1/current.json?key=26fd56205268411bb5771320233003&q=London&aqi=no"

    useEffect(() => {
         axios.get(`https://api.weatherapi.com/v1/forecast.json?key=26fd56205268411bb5771320233003&q=London&days=3`)
        .then(result => {
            const avgTemp = result.data.forecast.forecastday[0].day.avgtemp_c
            const icon = result.data.forecast.forecastday[0].day.condition.icon
            setAvgTemp(avgTemp)
            setIcon(icon)


        });
    }, []);


    return (
        <div >
            <p>{props.userInput}</p>
            <p>{avgTemp}°</p>
            <img src={icon} alt="Weather icon" />
        </div>
    );
}

export default Day1;
