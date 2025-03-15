import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeels } from './topMeel'; // Make sure this path is correct
import CarousalItem from './CarousalItem'; // Ensure the path is correct

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplySpeed:2000,
    arrows:false,
  };
  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item, index) => (
          <CarousalItem 
            key={index}  // Key prop for each item
            image={item.image}  // Pass the image prop
            title={item.title}  // Pass the title prop
          />
        ))}
      </Slider>
    </div>
  );
}

export default MultiItemCarousel;
