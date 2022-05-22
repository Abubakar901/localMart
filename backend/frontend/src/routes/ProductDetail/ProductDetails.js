import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails, clearErrors } from '../../actions/productAction';
import { MainContainer } from '../../GlobalStyle';
import { UpperContainer, LowerContainer, ImageContainer, DetailsContainer, SingleContainer, VerticalContainer, BreakLine, ProductImageCarousel, ImageProduct, ProductShopDetails, DetailsPageBtn, ReviewOuterContaner, NoReviewContainer } from './ProductDetailsStyle';
import Loader from '../../Layout/Loader/Loader';
import ReviewCard from '../../compoenents/ReviewCard/ReviewCard';
import { useAlert } from "react-alert";
import Metadata from '../../Layout/Metadata';
import { addItemsToCart } from '../../actions/cartAction';
import Rating from '@mui/material/Rating';

const ProductDetails = () => {
  
  const {id} =useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, error, loading } = useSelector( (state) => state.productDetails);
  const quantity = 1;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
      dispatch(getProductDetails(id, quantity));
  }, [ dispatch, id, quantity, error, alert ])

  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: product.ratings,
    innerHeight:50
  }

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  return (
    <MainContainer innerspace='0'>

      <Metadata title='localMart - product name' />
      {
        loading ? <Loader /> : (
          <>
            <UpperContainer>
              <ImageContainer>
                <ProductImageCarousel>
                  {product.images &&
                    product.images.map((item, i) => (
                      <ImageProduct
                        key={i}
                        src={item.url}
                        alt={`${i} Slide`}
                      />
                    ))}
                </ProductImageCarousel>
              </ImageContainer>
              <DetailsContainer>
                <h4>{product?.name}</h4>
                <BreakLine />
                <SingleContainer>
                  <Rating name="read-only" value={product?.ratings} readOnly />
                </SingleContainer>
                <BreakLine />
                <h5><span>₹ </span>{product?.price}</h5>
                <DetailsPageBtn onClick={addToCartHandler}>Add to Cart</DetailsPageBtn>
                <BreakLine />
                <h3>Stock : <span>{product?.Stock < 1 ? "OutOfStock" : "InStock"}</span></h3>
                <BreakLine />
                <VerticalContainer>
                  <p>About this Item :</p>
                  <p> {product?.description}</p>
                </VerticalContainer>
                <BreakLine />
                <ProductShopDetails to={`/shop/${product?.shopName?._id}`} >
                  <h4>Shop Name : {product?.shopName?.name}</h4>
                  <h6>City : {product?.shopName?.city}</h6>
                  <h6>State : {product?.shopName?.state}</h6>
                </ProductShopDetails>
                <BreakLine /> 
                <DetailsPageBtn>Add Review</DetailsPageBtn>
            </DetailsContainer>
          </UpperContainer>
          <LowerContainer>
              <h4>Reviews</h4>
          {
            product?.reviews && product?.reviews[0] ? (
              <ReviewOuterContaner>
                {
                  product?.reviews.map((review) => <ReviewCard review={review} key={review._id}/>)
                }
              </ReviewOuterContaner>
            ) : (
              <NoReviewContainer>
                <h2>No Reviews Yet</h2>
              </NoReviewContainer>
            )
          }
          </LowerContainer>
        </>
        )
      }
    </MainContainer>
  )
}

export default ProductDetails