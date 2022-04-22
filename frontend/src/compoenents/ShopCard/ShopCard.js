import React from 'react';
import { ExploreShopBtn, ShoppingCard, ShopTwoItems, ShopLink } from './ShopCardStyle';
import ReactStars from 'react-rating-stars-component';

const ShopCard = ({ shop }) => {

const options = {
  edit:true,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 50 : 30,
  value: shop.ratings,
  innerHeight:50,
  isHalf: true
}

  return (
    <ShoppingCard >  
      <ShopLink to={shop._id}>
        <img src={shop.images[0].url} alt='shop-name'/>
      </ShopLink>
      <ShopLink to={shop._id}>
        <h4>{shop.name}</h4>
      </ShopLink>
      <ShopLink to={shop._id}>  
        <h5>Category : <span>{shop.category}</span> </h5>
      </ShopLink>
      <ShopLink to={shop._id}>
        <ShopTwoItems>
          <ReactStars {...options}/> {" "}<span style={{color: '#ff0000'}}>({shop.numOfReviews} Reviews)</span>
        </ShopTwoItems>
        </ShopLink>
      <ShopLink to={shop._id}>
        <p>City: {shop.city}</p>
      </ShopLink>
      <ShopLink to={shop._id}>
        <p>State: {shop.state}</p>
      </ShopLink>
        <ExploreShopBtn bgColor='#01796f' >Shop Details</ExploreShopBtn>
        <ExploreShopBtn>Explore Products</ExploreShopBtn>
    </ShoppingCard>
  )
}

export default ShopCard