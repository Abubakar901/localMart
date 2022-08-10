import React, { useState, useEffect } from "react";
import {
  ProductDescriptionMainContainer,
  UpperContainer,
  ImageContainer,
  ProductImageCarousel,
  CarouselImage,
  DetailContainer,
  BreakLine,
  RatingIcon,
  ProductDescripionBtn,
  VerticalContainer,
  ProductShopDetails,
  LowerContainer,
  ReviewOuterContaner,
  NoReviewContainer,
  ReviewSingleContainer,
  InputBox,
  ReviewBtn,
  NoProductFoundContainer,
} from "./ProductDetailStyle";
import Loader from "../../Layout/Loader/Loader";
import {
  getProductDetails,
  newProductReview,
} from "../../Actions/ProductAction";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Metadata from "../../Layout/Metadata";
import { addItemsToCart } from "../../Actions/CartAction";
import { NEW_PRODUCT_REVIEW_RESET } from "../../Constants/ProductsConstants";
import ProductReviewCard from "../../Components/ProductReviewCard/ProductReviewCard";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
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

const ProductDetail = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );

  const { error: newreviewError, success } = useSelector(
    (state) => state.newProductReview
  );

  const { isDeleted } = useSelector((state) => state.deleteProductReview);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, 1));
    alert.success("Item Added To Cart");
  };

  const handleOpen = () => {
    if (!user) {
      navigate(`/login?redirect=product/${id}`);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const reviewSubmitHandler = () => {
    const ReviewForm = new FormData();

    ReviewForm.set("rating", rating);
    ReviewForm.set("comment", comment);
    ReviewForm.set("productId", id);

    dispatch(newProductReview(ReviewForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
    }

    if (newreviewError) {
      return alert.error(newreviewError);
    }

    if (success) {
      alert.success("Review Created Successfully");
      dispatch({ type: NEW_PRODUCT_REVIEW_RESET });
    }
    dispatch(getProductDetails(id, 1));
  }, [dispatch, id, error, newreviewError, success, alert, isDeleted]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {product ? (
            <ProductDescriptionMainContainer>
              <Metadata title={`localMart - ${product?.name}`} />
              <UpperContainer>
                <ImageContainer>
                  <ProductImageCarousel>
                    {product?.images &&
                      product?.images?.map((item, i) => (
                        <CarouselImage
                          key={i}
                          src={item.url}
                          alt={`${i} Slide`}
                        />
                      ))}
                  </ProductImageCarousel>
                </ImageContainer>
                <DetailContainer>
                  <h4> {product?.name}</h4>
                  <BreakLine />
                  <RatingIcon
                    name="read-only"
                    value={product?.ratings}
                    readOnly
                  />
                  <BreakLine />
                  <h5>
                    <span>₹</span>
                    {product?.price}
                  </h5>

                  <ProductDescripionBtn onClick={addToCartHandler}>
                    Add to Cart
                  </ProductDescripionBtn>
                  <BreakLine />
                  <h3>
                    Stock :
                    <span>
                      {" "}
                      {product?.Stock < 1 ? "OutOfStock" : "InStock"}
                    </span>
                  </h3>
                  <BreakLine />
                  <h5>Delivery : {product?.shopName?.delivery}</h5>
                  <BreakLine />
                  <VerticalContainer>
                    <p>About this Item :</p>
                    <p> {product?.description}</p>
                  </VerticalContainer>
                  <BreakLine />
                  <ProductShopDetails to={`/shop/${product?.shopName?._id}`}>
                    <h4>Shop Name : {product?.shopName?.name}</h4>
                    <h6>City : {product?.shopName?.city}</h6>
                    <h6>State : {product?.shopName?.state}</h6>
                  </ProductShopDetails>
                  <BreakLine />
                  <ProductDescripionBtn onClick={handleOpen}>
                    Add Review
                  </ProductDescripionBtn>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        component="h2"
                        style={{ fontWeight: 500, fontSize: "30px" }}
                      >
                        Add Review
                      </Typography>
                      <Rating
                        name="simple-controlled"
                        onChange={(e) => setRating(parseInt(e.target.value))}
                        value={rating}
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
                </DetailContainer>
              </UpperContainer>
              <LowerContainer>
                {product?.reviews && product?.reviews[0] ? (
                  <>
                    <h4>Reviews</h4>
                    <ReviewOuterContaner>
                      {product?.reviews.map((review) => (
                        <ProductReviewCard
                          review={review}
                          productId={id}
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
            </ProductDescriptionMainContainer>
          ) : (
            <NoProductFoundContainer>
              <h1>Product Not Found</h1>
              <h1>Refresh the Page or Product Does not Exist</h1>
            </NoProductFoundContainer>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetail;
