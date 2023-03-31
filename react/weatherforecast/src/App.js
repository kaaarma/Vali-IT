import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import BasicTabs from './components/Tabs.js';
import Button from '@mui/material/Button'
import axios from "axios";
import './App.css';



function App() {
    const [userInput, setUserInput] = useState("");
    const [hourlyData1, setHourlyData1] = useState([]);
    const [hourlyData2, setHourlyData2] = useState([]);
    const [hourlyData3, setHourlyData3] = useState([]);


    const handleClick = () => {
        const apiKey = "26fd56205268411bb5771320233003";
        const apiUrl = "http://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + userInput + "&days=3&aqi=no&alerts=no";
        axios
            .get(apiUrl)
            .then((response) => {
                console.log(response.data)
                const hourlyData1 = response.data.forecast.forecastday[0].hour
                const hourlyData2  = response.data.forecast.forecastday[1].hour
                const hourlyData3 = response.data.forecast.forecastday[2].hour
                setHourlyData1(hourlyData1);
                setHourlyData2(hourlyData2);
                setHourlyData3(hourlyData3);

            })
            .catch((error) => {
                console.error(error);
            });
    };

  return (
      <div className={"myApp"}>
      <header>
        <title>Weather forecast</title>
        </header>
      <main>
          <h1>Weather forecast</h1>

          <TextField
              label="Enter city"
              id="enter-city"
              sx={{backgroundColor: "#E0E4EA", margin: "40px"}}
              InputLabelProps={{sx: {color: '#223E77'},}}
              inputProps={{sx: {color: '#223E77'},}}
              onChange={(e) => {
                  setUserInput(e.target.value);}}/>
          <br></br>
          <Button onClick={handleClick} variant="contained" style = {{marginLeft: "40px", marginBottom:"40px"}} >Fetch Weather Data</Button>

          <BasicTabs hourlyData1={hourlyData1} hourlyData2={hourlyData2} hourlyData3={hourlyData3} />

      </main>
      </div>


  );
}

export default App;
