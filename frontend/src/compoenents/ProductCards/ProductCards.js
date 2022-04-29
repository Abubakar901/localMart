import React from 'react';
import { StyledLink } from '../../GlobalStyle';
import { ProductCard, ShopTwoItems, ExploreShopBtn } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';


const ProductCards = ({product}) => {
  const {id}=useParams()

  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: product.ratings,
    innerHeight:50
  }
  console.log(product)
  return (
      <StyledLink to={`/products/${product._id}`}>
        <ProductCard>  
          <img src={product.images[0].url} alt={product.name} />
          <h4>{product.name}</h4>
            <h5><span>₹</span>{product.price}</h5>
            <ShopTwoItems>
              <ReactStars {...options}/> <span>{" "}
          ({product.numOfReviews} Reviews)</span>
            </ShopTwoItems>
            <ShopTwoItems>
            <p>City : <span>{product.shopName.city}</span></p>
            <p>State: <span>{product.shopName.state}</span></p>
            </ShopTwoItems>
            <ShopTwoItems>
              <ExploreShopBtn >Add to Cart</ExploreShopBtn>
              <ExploreShopBtn>Buy Now</ExploreShopBtn>
            </ShopTwoItems>
        </ProductCard>
      </StyledLink>
  )
}

export default ProductCards