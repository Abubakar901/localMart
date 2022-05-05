import React from 'react';
import { ProductCard, ShopTwoItems, ExploreShopBtn, ProductLink } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';
import  { useDispatch, useSelector } from 'react-redux';
import { createCartItem } from '../../actions/cartAction';

const ProductCards = ({product}) => {

  const dispatch = useDispatch();
  const {  cart } = useSelector((state) => state.cart)
  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: product.ratings,
    innerHeight:50
  }

  const addItemtoCart = (id) => {
    console.log(id)
    dispatch(createCartItem(id));
    console.log(cart)
  }


  return (
    <ProductCard>  
      <ProductLink to={`/product/${product?._id}`}>
          <img src={product?.images?.[0]?.url} alt={product?.name} />
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
          <h4>{product?.name}</h4>
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
            <h5><span>₹</span>{product?.price}</h5>
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
        <ShopTwoItems>
          <ReactStars {...options}/> <span>{" "}
                ({product?.numOfReviews} Reviews)</span>
        </ShopTwoItems>
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
        <ShopTwoItems>
          <p>City : <span>{product?.shopName?.city}</span></p>
          <p>State: <span>{product?.shopName?.state}</span></p>
        </ShopTwoItems>
      </ProductLink>
      <ShopTwoItems>
        <ExploreShopBtn bgcolor='#3d85c6' onClick={() => addItemtoCart(product?._id)} >Add to Cart</ExploreShopBtn>
        <ExploreShopBtn>Buy Now</ExploreShopBtn>
      </ShopTwoItems>
    </ProductCard>
  )
}

export default ProductCards