import React from 'react';
import { StyledLink } from '../../GlobalStyle';
import { SliderInnerCard, ShopTwoItems, ShopDetailsBtn } from './SliderStyle';

const Slider = ({ id, shopName, shopAddress, category,   url ,rating}) => {
  return (
    <StyledLink to={`/shop/${id}`}>
      <SliderInnerCard>
      <img src={url} alt="shop-Images" />
      <h5>{shopName}</h5>
      <ShopTwoItems>
            <h5>{category}</h5>
            <h6>{rating}</h6>
        </ShopTwoItems>
      <p>{shopAddress}</p>
      <ShopDetailsBtn>Shop Details</ShopDetailsBtn>
    </SliderInnerCard>
    </StyledLink>
  )
}

export default Slider