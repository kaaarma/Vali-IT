import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import WeatherCard from './WeatherCard';

export default function Carousel1(props) {

        const hourlyData = props.hourlyData;
  return (
        <div className="carousel slide" data-ride="carousel" data-type="multi" data-interval="false" id="myCarousel">
                <Carousel sx={{width: "200px"}}>
                    {hourlyData.map((hour, index) => (
                        <Carousel.Item key={index} sx={{width: "100px"}}>
                            <WeatherCard time={hour.time} temperature={hour.temp_c} icon={hour.condition.icon}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
        </div>


    )

}