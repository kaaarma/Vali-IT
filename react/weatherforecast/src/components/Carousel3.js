import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Navigation, Scrollbar, Pagination} from "swiper";
import 'swiper/css';




export default function Carousel3(props) {

    const hourlyData = props.hourlyData;


    return (

      /*  <div className="carousel slide" data-ride="carousel" data-type="multi" data-interval="false" id="myCarousel">
                  <Carousel sx={{width: "200px"}}>
                    {hourlyData.map((hour, index) => (
                        <Carousel.Item key={index} sx={{width: "100px"}}>
                            <WeatherCard time={hour.time} temperature={hour.temp_c} icon={hour.condition.icon}/>
                        </Carousel.Item>
                    ))}
                </Carousel>
        </div>*/

    <Swiper
        sx = {{width: "500px"}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={6}
        navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {hourlyData.map((item)=>
            <SwiperSlide >
                    {item.temp_c}° C
                    <br/>
                    <img src={item.condition.icon} alt={item.condition.text}/>
                    <br/>
                    {item.time.split(' ')[1]}
                </SwiperSlide>)}
    </Swiper>

    )

}