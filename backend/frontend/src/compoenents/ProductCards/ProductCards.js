import React,  { useState }  from 'react';
import { ProductCard, ShopTwoItems, ExploreShopBtn, ProductLink } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';
import { useAlert } from 'react-alert';
import  { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../actions/cartAction';

const ProductCards = ({product}) => {
  
  const dispatch = useDispatch();
  const alert = useAlert();

  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: product.ratings,
    innerHeight:50
  }

  const addToCart = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
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
          <ReactStars {...options}/> 
        </ShopTwoItems>
      </ProductLink>
      <ProductLink to={`/product/${product?._id}`}>
        <ShopTwoItems side='column'>
          <p>City : <span>{product?.shopName?.city}</span></p>
          <p>State: <span>{product?.shopName?.state}</span></p>
        </ShopTwoItems>
      </ProductLink>
      <ExploreShopBtn bgcolor='#3d85c6' onClick={() => addToCart(product?._id, 1)} >Add to Cart</ExploreShopBtn>

    </ProductCard>
  )
}

export default ProductCards