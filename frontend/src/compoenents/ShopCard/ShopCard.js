import React from 'react';
import { StyledLink } from '../../GlobalStyle';
import { ExploreShopBtn, ShoppingCard, ShopTwoItems } from './ShopCardStyle';

const ShopCard = ({ id, shopName, shopAddress, url, category, rating}) => {
  return (
      <StyledLink to={id}>
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