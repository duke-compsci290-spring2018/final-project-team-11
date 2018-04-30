import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import "./SlideShow.css";



class SimpleSlider extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
        };
        return (
            <div id="slider" className="container">
                <Slider {...settings}>
                    <div>
                        <img src="https://sportia-eg.com/images/sinal.jpg" alt="Squash" title="Source: http://sportia-eg.com/images/sinal.jpg"/>
                    </div>
                    <div>
                        <img src="https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/05/03/tennis-thumbnail.jpg?interpolation=lanczos-none&resize=*:*" alt="Tennis" title="Source: https://stillmed.olympic.org/media/Images/OlympicOrg/News/2017/05/03/tennis-thumbnail.jpg?interpolation=lanczos-none&resize=*:*"/>
                    </div>
                    <div>
                        <img src="https://wallpapercave.com/wp/wp1852937.jpg" alt="Badminton" title="Source: https://wallpapercave.com/wp/wp1852937.jpg"/>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;