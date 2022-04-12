import React from 'react';
import { bannerData } from '../../constant/data';
import { ImageCarousel, ImageSliderContainer, ImageSlider } from './BannerStyle';

const Banner = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };


  return (
    <ImageCarousel {...settings}>
            {
              bannerData.map((item, index) => (
                <ImageSliderContainer>
                  <ImageSlider src={item} key={index} />
                </ImageSliderContainer>
              ))
            }
    </ImageCarousel>
  )
}

export default Banner