import React, { useEffect } from "react";
import {
  ReviewInnerContainer,
  ReviewMidContainer,
  UserContainer,
  DeleteBtn,
  RatingComp,
} from "./ProductReviewCardStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductReviewByUser,
  clearErrors,
} from "../../Actions/ProductAction";
import { useAlert } from "react-alert";
import { DELETE_PRODUCT_REVIEW_RESET } from "../../Constants/ProductsConstants";

const ProductReviewCard = ({ review, productId, user }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error: deleteShopError, isDeleted } = useSelector(
    (state) => state.deleteProductReview
  );

  const deleteReviewHandler = () => {
    dispatch(deleteProductReviewByUser(productId));
  };

  useEffect(() => {
    if (deleteShopError) {
      alert.error(deleteShopError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Shop Review Deleted Successfully");
      dispatch({ type: DELETE_PRODUCT_REVIEW_RESET });
    }
  }, [dispatch, alert, deleteShopError, isDeleted]);

  return (
    <ReviewInnerContainer>
      <ReviewMidContainer>
        <UserContainer>
          <img
            src="https://i.pinimg.com/736x/bb/d5/eb/bbd5eb8953cff9d99ddc96063cf2b63e.jpg"
            alt={review?.name}
          />
          <h6>{review?.name}</h6>
        </UserContainer>
        {user?._id === review?.user ? (
          <DeleteBtn onClick={() => deleteReviewHandler()} />
        ) : (
          <></>
        )}
      </ReviewMidContainer>
      <RatingComp value={review?.rating} readOnly />
      <p>{review?.comment}</p>
    </ReviewInnerContainer>
  );
};

export default ProductReviewCard;
