import React from 'react';
import { ExploreShopBtn, ShoppingCard, ShopTwoItems, ShopLink } from './ShopCardStyle';
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ shop }) => {
  const navigate = useNavigate();

const options = {
  edit:true,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 50 : 30,
  value: shop.ratings,
  innerHeight:50,
  isHalf: true
}

const redirectShop = (id) => {
  navigate(`/shop/${id}`)
// console.log(id)
}

  return (
    <ShoppingCard >  
      <ShopLink to={`/shop/${shop?._id}`}>
        <img src={shop?.images[0]?.url} alt={shop?.name}/>
      </ShopLink>
      <ShopLink to={`/shop/${shop?._id}`}>
        <h4>{shop?.name}</h4>
      </ShopLink>
      <ShopLink to={`/shop/${shop?._id}`}>  
        <h5>Category : <span>{shop?.category}</span> </h5>
      </ShopLink>
      <ShopLink to={`/shop/${shop?._id}`}>
        <ShopTwoItems>
          <ReactStars {...options}/> {" "}<span style={{color: '#ff0000'}}>({shop?.numOfReviews} Reviews)</span>
        </ShopTwoItems>
        </ShopLink>
      <ShopLink to={`/shop/${shop?._id}`}>
        <p>City: {shop?.city}</p>
      </ShopLink>
      <ShopLink to={`/shop/${shop?._id}`}>
        <p>State: {shop?.state}</p>
      </ShopLink>
        <ExploreShopBtn bgcolor='#01796f' onClick={() => redirectShop(shop?._id)}>Shop Details</ExploreShopBtn>
        <ExploreShopBtn>Explore Products</ExploreShopBtn>
    </ShoppingCard>
  )
}

export default ShopCard