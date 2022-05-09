import React,  { useState, useEffect }  from 'react';
import { ProductCard, ShopTwoItems, ExploreShopBtn, ProductLink } from './ProductCardStyles';
import ReactStars from 'react-rating-stars-component';
import { useAlert } from 'react-alert';
import  { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../../actions/cartAction';
import { CREATE_CART_RESET } from '../../constant/keys';
import Login from '../../routes/PopupLogin/PopupLogin';

const ProductCards = ({product}) => {
  
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, success } = useSelector((state) => state.newCart)
  const { user } = useSelector(state => state.user)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

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
      dispatch(createCart(id));
  }

  useEffect(() => {
    if(error) {
      return alert.error(error);
    }

    if(success) {
      alert.success("Cart Created Successfully");
      dispatch({ type: CREATE_CART_RESET });
    }
  }, [success, dispatch, error, alert])

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
      {
        user ? (
          <>
            <ExploreShopBtn bgcolor='#3d85c6' onClick={() => addItemtoCart(product?._id)} >Add to Cart</ExploreShopBtn>
            <ExploreShopBtn>Buy Now</ExploreShopBtn>
          </> ) : (
            <>
              <ExploreShopBtn bgcolor='#3d85c6' onClick={handleOpen}>Add to Cart</ExploreShopBtn>
              <Login open={open} setOpen={setOpen} />
              <ExploreShopBtn onClick={handleOpen}>Buy Now</ExploreShopBtn>
              <Login open={open} setOpen={setOpen} />
            </>
          )
      }
      </ShopTwoItems>
    </ProductCard>
  )
}

export default ProductCards