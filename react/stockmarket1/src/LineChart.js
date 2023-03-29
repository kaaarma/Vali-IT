
import { Line } from "react-chartjs-2";
import  { App }  from "./App.js";


const LineChart = ({ closingPrices, dates }) => {
    return (
        <div>
            <Line
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "My First dataset",
                            backgroundColor: "rgb(255, 99, 132)",
                            borderColor: "rgb(255, 99, 132)",
                            data: closingPrices,
                        },
                    ],
                }}
            />
        </div>
    );
};

export default LineChart;