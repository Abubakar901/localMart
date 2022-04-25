import React from 'react';
import { ProductCard, ShopTwoItems, ExploreShopBtn, ProductLink } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';


const ProductCards = ({ product }) => {

  const handleClick = () => {
    alert("Add to cart button is clicked")
  }

  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: product.ratings,
    innerHeight:50,
    isHalf: true
  }

  return (
    <ProductCard> 
      <ProductLink to={product._id}>
        <img src={product.images[0].url} alt='shop-name'/>
      </ProductLink>

      <ProductLink to={product._id}>
        <h4>{product.name}</h4>
      </ProductLink>
      <ProductLink to={product._id}>
        <h5><strong>₹</strong>{product.price}</h5>
      </ProductLink>
      <ProductLink to={product._id}>
      {/*
       which city and which shop
       */}
        <ShopTwoItems>
          <ReactStars {...options}/> {" "}<span style={{color: '#ff0000'}}>({product.numOfReviews} Reviews)</span>
        </ShopTwoItems>
      </ProductLink>
        <ExploreShopBtn bgColor='#01796f' >Add to Cart</ExploreShopBtn>
        <ExploreShopBtn>Buy Now</ExploreShopBtn>
      </ProductCard>
  )
}

export default ProductCards