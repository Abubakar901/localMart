import React, { useEffect } from 'react';
import { DeleteBtn, ReviewInnerContainer, ReviewMidContainer, UserContainer, RatingComp } from './ShopReviewCardStyle';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors } from '../../actions/shopActions';
import { useAlert } from "react-alert";
import { DELETE_SHOP_REVIEW_RESET } from '../../constant/keys';
import {  deleteShopReviewByUser } from '../../actions/shopActions';


const ShopReviewCard = ({ review, shopId }) => {
  
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error: deleteShopError, isDeleted } = useSelector((state) => state.deleteShopReview);
  
  const { user } = useSelector(state => state.user);

      useEffect(() => {
  
        if (deleteShopError) {
          alert.error(deleteShopError);
          dispatch(clearErrors());
        }
    
        if (isDeleted) {
          alert.success("Shop Review Deleted Successfully");
          dispatch({ type: DELETE_SHOP_REVIEW_RESET});
        }
      }, [dispatch, alert, deleteShopError,isDeleted]);

      const deleteReviewHandler = () => {
        dispatch( deleteShopReviewByUser(shopId));
      };
      
    
  return (
    <ReviewInnerContainer>
      <ReviewMidContainer>
        <UserContainer>
            <img src='https://i.pinimg.com/736x/bb/d5/eb/bbd5eb8953cff9d99ddc96063cf2b63e.jpg' alt={review?.name} />
            <h6>{review?.name}</h6> 
        </UserContainer>
        {
          user?._id === review?.user ? (
              <DeleteBtn onClick={() => deleteReviewHandler()} />
          ) : (
            <>

            </>
          )
        }
      </ReviewMidContainer>
         <RatingComp value={review?.rating} readOnly />
        <p>{review?.comment}</p>
    </ReviewInnerContainer>
  )
}

export default ShopReviewCard