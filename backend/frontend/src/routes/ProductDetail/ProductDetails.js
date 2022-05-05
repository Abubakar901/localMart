import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../actions/productAction';
import { MainContainer } from '../../GlobalStyle';
import { UpperContainer, LowerContainer, ImageContainer, DetailsContainer, SingleContainer, VerticalContainer, ProductShopDetails, ButtonContainer ,DetailsPageBtn, ReviewOuterContaner, NoReviewContainer } from './ProductDetailsStyle';
import ReactStars from 'react-rating-stars-component';
import Loader from '../../Layout/Loader/Loader';
import ReviewCard from '../../compoenents/ReviewCard/ReviewCard';
import Metadata from '../../Layout/Metadata';

const ProductDetails = () => {
  
  const {id} =useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector( (state) => state.productDetails)

  useEffect(() => {
      dispatch(getProductDetails(id));
  }, [dispatch, id])

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
    <MainContainer innerspace='0'>

      <Metadata title='localMart - product name' />
      {
        loading ? <Loader /> : (
          <>
            <UpperContainer>
              <ImageContainer>
                <img src={product?.images?.[0]?.url} alt={product?.name} />
              </ImageContainer>
              <DetailsContainer>
                <h4>{product?.name}</h4>
                <h5><span>₹ </span>{product?.price}</h5>
                <SingleContainer>
                  <ReactStars {...options}/> <span>{" "}
                      ({product?.numOfReviews} Reviews)</span> 
                </SingleContainer>
                <h3>Stock : <span>{product?.Stock < 1 ? "OutOfStock" : "InStock"}</span></h3>
                <VerticalContainer>
                  <p>About this Item :</p>
                  <p> {product?.description}</p>
                </VerticalContainer>
                <ProductShopDetails to={`/shop/${product?.shopName?._id}`} >
                  <h4>Shop Name : {product?.shopName?.name}</h4>
                  <h6>City : {product?.shopName?.city}</h6>
                  <h6>State : {product?.shopName?.state}</h6>
              </ProductShopDetails>
              <ButtonContainer>
                <DetailsPageBtn>Add to Cart</DetailsPageBtn>
                <DetailsPageBtn>Buy Now</DetailsPageBtn>
              </ButtonContainer>
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