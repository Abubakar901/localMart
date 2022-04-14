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
  innerHeight:50,
  isHalf: true
}

const ProductCards = ({id, title, url, price}) => {

  const handleClick = () => {
    alert("Add to cart button is clicked")
  }

  return (
    <ProductCard>  
          <img src={url} alt={title} />
          <StyledLink to={id} colour=''>
            <h4>{title}</h4>
          </StyledLink>
            <h5><span>₹</span>{price}</h5>
            <ShopTwoItems>
              <ReactStars {...options}/> <span>(256 reviews)</span>
            </ShopTwoItems>
            <ShopTwoItems>
              <ExploreShopBtn onClick={handleClick}>Add to Cart</ExploreShopBtn>
              <ExploreShopBtn>Buy Now</ExploreShopBtn>
            </ShopTwoItems>
        </ProductCard>
  )
}

export default ProductCards