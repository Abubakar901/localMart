import React from 'react';
import { ExploreShopBtn, ShoppingCard, ShopTwoItems, StyledLink  } from './ShopCardStyle';

const ShopCard = ({ id, shopName, shopAddress, url, category, rating}) => {
  return (
    <StyledLink to="/shopDetails">
      <ShoppingCard>  
        <img src={url} alt='shop-name'/>
        <h4>{shopName}</h4>
        <ShopTwoItems>
            <h5>{category}</h5>
            <h6>{rating}</h6>
        </ShopTwoItems>
        <p>{shopAddress}</p>
        <ExploreShopBtn>Shop Details</ExploreShopBtn>
    </ShoppingCard>
    </StyledLink>
  )
}

export default ShopCard