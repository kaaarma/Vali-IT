import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { Line } from "react-chartjs-2";


Chart.register(CategoryScale);


const stockUrls = [
    {value: `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-02-28/2023-03-28?apiKey=Dsp6upDZI837aW6copupTlbqeRE_FWTW`, label: "AAPL" },
    {value: `https://api.polygon.io/v2/aggs/ticker/JNJ/range/1/day/2023-02-28/2023-03-28?apiKey=Dsp6upDZI837aW6copupTlbqeRE_FWTW`, label: "JNJ" },
    {value: `https://api.polygon.io/v2/aggs/ticker/KO/range/1/day/2023-02-28/2023-03-28?apiKey=Dsp6upDZI837aW6copupTlbqeRE_FWTW`, label: "KO"},
    {value: `https://api.polygon.io/v2/aggs/ticker/WMT/range/1/day/2023-02-28/2023-03-28?apiKey=Dsp6upDZI837aW6copupTlbqeRE_FWTW`, label: "WMT"}

]

export default function App() {
    const [selectedStock, setSelectedStock] = useState(stockUrls[0].value);

    const [closingPrices, setClosingPrices] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        async function getData(selectedStock) {
            const result = await axios.get(selectedStock);
            const results = result.data.results;
            const dates = [];
            const closingPrices = [];
            for (let i = 0; i < results.length; i++) {
                const day = results[i];
                const date = new Date(day.t).toLocaleDateString();
                const closingPrice = day.c;
                closingPrices.push(closingPrice);
                dates.push(date);
            }
            setDates(dates);
            setClosingPrices(closingPrices);
        }

        if (selectedStock) {
            getData(selectedStock);
        }
    }, [selectedStock]);

    const data = {
        labels: dates,
        datasets: [
            {
                label: 'Stock value last 30 days',
                data: closingPrices,
                backgroundColor: [
                    'rgba(255, 255, 255, 0.6)',
                    'rgba(255, 255, 255, 0.6)',
                    'rgba(255, 255, 255, 0.6)'
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "70px", width: "100%"}}>
            <FormControl sx={{width: 200}}>
                <InputLabel id="stock">Stock</InputLabel>
                <Select
                    value={selectedStock}
                    onChange={(event) => setSelectedStock(event.target.value)}>
                    {stockUrls.map((stock) => (
                        <MenuItem key={stock.value} value={stock.value}>
                            {stock.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className="chart-container" style={{ height: "500px", width: "800px" }}>
                <h2 style={{ textAlign: "center" }}>Stock value last 30 days</h2>
                <Line
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: false,
                                text: ""
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
         </Box>
    )
};

