import styled from "styled-components";

import Slider from "react-slick";

export const ImageCarousel = styled(Slider)`
    height: 300px;
    margin: 20px auto 5px ;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`;

export const ImageSliderContainer = styled.div`
    height: 300px;
`;

export const ImageSlider = styled.img`
    object-fit: cover;
    height: 100%;
    width:100%;
`;
