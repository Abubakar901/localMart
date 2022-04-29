import React from 'react';
import { StyledLink } from '../../GlobalStyle';
import { SliderInnerCard, ShopTwoItems, ShopDetailsBtn } from './SliderStyle';

const Slider = ({ id, shopName, shopAddress, category,   url ,rating}) => {
  return (
    <SliderInnerCard>
        <img src={url} alt="shop-Images" />
      <StyledLink to={`/shop/${id}`}>
        <h5>{shopName}</h5>
      <ShopTwoItems>
            <h5>{category}</h5>
            <h6>{rating}</h6>
        </ShopTwoItems>
      <p>{shopAddress}</p>
    </StyledLink>
      
      <ShopDetailsBtn>Shop Details</ShopDetailsBtn>
      <ShopDetailsBtn>Explore Products</ShopDetailsBtn>
    </SliderInnerCard>
  )
}

export default Slider