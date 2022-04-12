import React from 'react';
import { SliderInnerCard, ShopTwoItems,  ExploreShopBtn } from './SliderStyle';

const Slider = ({ id, shopName, shopAddress, category,   url ,rating}) => {
  return (
    <SliderInnerCard>
      <img src={url} alt="shop-Images" />
      <h5>{shopName}</h5>
      <ShopTwoItems>
            <h5>{category}</h5>
            <h6>{rating}</h6>
        </ShopTwoItems>
      <p>{shopAddress}</p>
      <ExploreShopBtn>Shop Details</ExploreShopBtn>
    </SliderInnerCard>
  )
}

export default Slider