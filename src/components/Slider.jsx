import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
       
    };
    return (
        <Slider {...settings} className="main-slider-container">
            <div className="container slide-contanier">
                <div className="content">
                    <h3 className="slide-title">We serve the <br /> richest <span className="coffee">Coffee</span> in <br /> the city</h3>
                    <button className="coffee-btn">Coffee and  Code </button>
                </div>
                <div className="slide-img">
                    <img src="images/coffee-white.png" alt="" />
                </div>
            </div>
            <div className="container slide-contanier">
                <div className="content">
                    <h3 className="slide-title"> Coffee isn’t just <br /> a <span className="coffee">drink</span> it’s <br /> a lifestyle</h3>
                    <button className="coffee-btn">Coffee and  Code </button>
                </div>
                <div className="slide-img">
                    <img src="images/coffee2.png" alt="" />
                </div>
            </div>
        </Slider>
    );
}