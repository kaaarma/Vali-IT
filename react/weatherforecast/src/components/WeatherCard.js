import React from 'react';

function WeatherCard({ time, temperature, icon }) {
    return (
        <div className="weather-card" style={{ border: "1px solid black", borderWidth: "2px", borderColor: "#8B9BBB", padding: "20px", paddingLeft: "40px", paddingRight: "40px"}}>
            <img src={icon} style={{width: "100px"}}/>
            <h3 style={{color: "#223E77"}}>{temperature}&deg;C</h3>
            <h4 style={{color: "#223E77"}}>{time}</h4>
        </div>
    );
}

export default WeatherCard;
