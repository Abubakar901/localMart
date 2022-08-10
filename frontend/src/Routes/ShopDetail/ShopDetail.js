import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import {
  ShopDescriptionMainContainer,
  UpperContainer,
  LowerContainer,
  ImageContainer,
  DetailContainer,
  VerticalContainer,
  RatingIcon,
  DetailPageBtn,
  ReviewOuterContaner,
  NoReviewContainer,
  ShopImageCarousel,
  CarouselImage,
  InputBox,
  ReviewBtn,
  ReviewSingleContainer,
  BreakLine,
  NoShopFoundContainer,
} from "./ShopDetailStyle";
import Loader from "../../Layout/Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getShopDetails,
  newShopReview,
  clearErrors,
} from "../../Actions/ShopAction";
import Metadata from "../../Layout/Metadata";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { NEW_SHOP_REVIEW_RESET } from "../../Constants/ShopConstants";
import ShopReviewCard from "../../Components/ShopReviewCard/ShopReviewCard";

const reviewStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  p: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
};

const ShopDetail = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { shop, loading, error } = useSelector((state) => state.shopDetails);

  const { error: newreviewError, success } = useSelector(
    (state) => state.newShopReview
  );

  const { isDeleted } = useSelector((state) => state.deleteShopReview);

  const handleOpen = () => {
    if (!user) {
      navigate(`/login?redirect=shop/${id}`);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const reviewSubmitHandler = () => {
    const ReviewForm = new FormData();

    ReviewForm.set("rating", rating);
    ReviewForm.set("comment", comment);
    ReviewForm.set("shopId", id);

    dispatch(newShopReview(ReviewForm));

    setOpen(false);
  };

  const redirectToShopByProduct = () => {
    navigate(`/shop/products/${id}`);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    if (newreviewError) {
      alert.error(newreviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Created Successfully");
      dispatch({ type: NEW_SHOP_REVIEW_RESET });
    }
    dispatch(getShopDetails(id));
  }, [dispatch, id, error, newreviewError, success, isDeleted, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {shop ? (
            <ShopDescriptionMainContainer>
              <Metadata title={`localMart - ${shop?.name}`} />
              <UpperContainer>
                <ImageContainer>
                  <ShopImageCarousel>
                    {shop?.images &&
                      shop?.images.map((item, i) => (
                        <CarouselImage
                          key={i}
                          src={item.url}
                          alt={`${i} Slide`}
                        />
                      ))}
                  </ShopImageCarousel>
                </ImageContainer>
                <DetailContainer>
                  <h4>{shop?.name}</h4>
                  <BreakLine />
                  <RatingIcon name="read-only" value={shop?.ratings} readOnly />
                  <BreakLine />
                  <h5>Category : {shop?.category} </h5>
                  <BreakLine />
                  <h5>Contact : {shop?.contact}</h5>
                  <BreakLine />
                  <h5>Delivery : {shop?.delivery} </h5>
                  <BreakLine />
                  <VerticalContainer>
                    <h6>Address : {shop?.address}</h6>
                  </VerticalContainer>
                  <BreakLine />
                  <h6>City : {shop?.city}</h6>
                  <BreakLine />
                  <h6>State: {shop?.state}</h6>
                  <BreakLine />
                  <DetailPageBtn onClick={handleOpen}>Add Review</DetailPageBtn>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={reviewStyle}>
                      <Typography
                        id="modal-modal-title"
                        component="h2"
                        style={{ fontWeight: 500, fontSize: "30px" }}
                      >
                        Add Review
                      </Typography>
                      <RatingIcon
                        name="simple-controlled"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        style={{ marginBottom: "10px" }}
                      />
                      <InputBox
                        placeholder="Add Review"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <ReviewSingleContainer>
                        <ReviewBtn onClick={reviewSubmitHandler}>
                          Submit
                        </ReviewBtn>
                        <ReviewBtn bcolor="#ff0000" onClick={handleClose}>
                          Cancel
                        </ReviewBtn>
                      </ReviewSingleContainer>
                    </Box>
                  </Modal>
                  <DetailPageBtn onClick={redirectToShopByProduct}>
                    Explore Products
                  </DetailPageBtn>
                </DetailContainer>
              </UpperContainer>
              <LowerContainer>
                {shop?.reviews && shop?.reviews[0] ? (
                  <>
                    <h4>Reviews</h4>
                    <ReviewOuterContaner>
                      {shop?.reviews.map((review) => (
                        <ShopReviewCard
                          review={review}
                          shopId={id}
                          key={review?._id}
                          user={user}
                        />
                      ))}
                    </ReviewOuterContaner>
                  </>
                ) : (
                  <NoReviewContainer>
                    <h2>No Reviews Yet</h2>
                  </NoReviewContainer>
                )}
              </LowerContainer>
            </ShopDescriptionMainContainer>
          ) : (
            <NoShopFoundContainer>
              <h1>Shop Not Found</h1>
              <h1>Refresh the Page or Shop Does not Exist</h1>
            </NoShopFoundContainer>
          )}
        </>
      )}
    </>
  );
};

export default ShopDetail;
