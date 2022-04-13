import React from 'react';
import { StyledLink } from '../../GlobalStyle';
import { ProductCard, ShopTwoItems, ExploreShopBtn } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';

const options = {
  edit:true,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 50 : 30,
  value: 4.5,
  innerHeight:50
}

const ProductCards = ({id, title, url, price}) => {
  return (
      <StyledLink to={id}>
        <ProductCard>  
          <img src={url} alt={title} />
          <h4>{title}</h4>
            <h5><span>₹</span>{price}</h5>
            <ShopTwoItems>
              <ReactStars {...options}/> <span>(256 reviews)</span>
            </ShopTwoItems>
            <ShopTwoItems>
              <ExploreShopBtn>Add to Cart</ExploreShopBtn>
              <ExploreShopBtn>Buy Now</ExploreShopBtn>
            </ShopTwoItems>
        </ProductCard>
      </StyledLink>
  )
}

export default ProductCards