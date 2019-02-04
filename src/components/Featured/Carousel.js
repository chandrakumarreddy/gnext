import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/slide_one.jpg";
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";
import "./Carousel.css" 

export default class Carousel extends React.Component {
  render() {
    let settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 200
    };
    return (
      <div
        className="carrousel_wrapper"
        style={{
          height: window.innerHeight-110 + "px",
          overflow: "hidden"
        }}
      >
        <Slider {...settings}>
          <div>
            <div
              className="carousel_image"
              style={{
                backgroundImage: `url(${slide_one})`,
                height: (window.innerHeight-110 + "px")
              }}
            />
          </div>
          <div>
            <div
              className="carousel_image"
              style={{
                backgroundImage: `url(${slide_two})`,
                height: window.innerHeight-110 + "px"
              }}
            />
          </div>
          <div>
            <div
              className="carousel_image"
              style={{
                backgroundImage: `url(${slide_three})`,
                height: window.innerHeight-110 + "px"
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
