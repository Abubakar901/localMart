import React  from 'react';
import { ProductCard, ShopTwoItems, ExploreShopBtn, ProductLink,RatingComp } from './ProductCardStyles';
import { useAlert } from 'react-alert';
import  { useDispatch } from 'react-redux';
import { addItemsToCart } from '../../actions/cartAction';


const ProductCards = ({product}) => {
  
  const dispatch = useDispatch();
  const alert = useAlert();

  const addToCart = (id, quantity) => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  }

  console.log(product)
  
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
         <RatingComp value={product?.ratings} readOnly />
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