import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from "axios";
import { Line } from "react-chartjs-2";





const stockUrls = [
  {value: "AAPL", label: "Apple Inc" },
  {value: "JNJ", label: "Johnson & Johnson" },
  {value: "KO", label: "Coca-Cola Co"},
  {value: "WMT", label: "Walmart Inc"}

]

export default function App() {
  const [selectedStock, setSelectedStock] = useState();

  const [closingPrices, setClosingPrices] = useState([]);
  const [dates, setDates] = useState([]);


    async function getData(stockValue) {
      const result = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${stockValue}/range/1/day/2023-03-01/2023-03-29?apiKey=Dsp6upDZI837aW6copupTlbqeRE_FWTW`);
      const results = result.data.results;
      const dates = [];
      const newClosingPrices = [];
      for (let i = 0; i < results.length; i++) {
        const day = results[i];
        const date = new Date(day.t).toLocaleDateString();
        const closingPrice = day.c;
        newClosingPrices.push(closingPrice);
        dates.push(date);
      }
      setDates(dates);
      setClosingPrices(newClosingPrices);
    }

  function handleSelectChange(selectedStock) {
    setSelectedStock(selectedStock);
    getData(selectedStock.target.value);
  }

  const data = {
    labels: dates,
    datasets: [
      {
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
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px", width: "100%"}}>
          <FormControl sx={{width: 200}}>
            <InputLabel id="stock" sx={{ paddingLeft: 2 }}>Stock</InputLabel>
            <Select
                value={selectedStock}
                onChange={handleSelectChange}
                sx={{marginTop: 5}}>
              {stockUrls.map((stock) => (
                  <MenuItem key={stock.value} value={stock.value}>
                    {stock.label}
                  </MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedStock ?<div className="chart-container" style={{ height: "500px", width: "800px" }}>
          <h2 style={{ textAlign: "center" }}>Stock market</h2>
          <Line
              data={data}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: `Stock value of last 30 days for ${selectedStock.target.value}`,
                  },
                  legend: {
                    display: false
                  }
                }
              }}
          />
        </div> : null}
      </Box>
  )
};

