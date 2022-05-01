import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getShopDetails } from '../../actions/shopActions';
import { MainContainer } from '../../GlobalStyle';
import { UpperContainer, LowerContainer, ImageContainer, DetailsContainer, SingleContainer ,DetailsPageBtn } from './ShopDetailsStyle';
import ReactStars from 'react-rating-stars-component';
import Loader from '../../Layout/Loader/Loader';

const ShopDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const { shop , loading } = useSelector((state) => state.shopDetails)

  useEffect(() => {
    dispatch(getShopDetails(id))
  }, [dispatch, id])
  

  
  const options = {
    edit:true,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 50 : 30,
    value: shop.ratings,
    innerHeight:50
  }

  console.log(shop)

  return (
    <MainContainer innerspace='0'>
    { loading ? <Loader /> : (
      <>
        <UpperContainer>
          <ImageContainer>
            <img src={shop.images?.[0]?.url} alt={shop?.name} />
          </ImageContainer>
          <DetailsContainer>
            <h3>{shop?.name}</h3>
            <SingleContainer>
              <ReactStars {...options}/> <span>{" "}
                  ({shop?.numOfReviews} Reviews)</span> 
            </SingleContainer>
            <h4>Category : {shop?.category} </h4>
            <h5>Contact : {shop?.contact}</h5>
            <h6>Address : {shop?.address}</h6>

            <p>City : {shop?.city}</p>
            <p>State: {shop?.state}</p>
            <DetailsPageBtn>Explore Products</DetailsPageBtn>
          </DetailsContainer>
        </UpperContainer>
        <LowerContainer>

        </LowerContainer>
      </>
    )}
 </MainContainer>
  )
}

export default ShopDetails