import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails, clearErrors, newProductReview} from '../../actions/productAction';
import {MainContainer} from '../../GlobalStyle';
import {
    UpperContainer,
    LowerContainer,
    ImageContainer,
    DetailsContainer,
    SingleContainer,
    VerticalContainer,
    BreakLine,
    ProductImageCarousel,
    ImageProduct,
    ProductShopDetails,
    DetailsPageBtn,
    ReviewOuterContaner,
    NoReviewContainer,
    ReviewSingleContainer,
    InputBox,
    ReviewBtn
} from './ProductDetailsStyle';
import Loader from '../../Layout/Loader/Loader';
import ProductReviewCard from '../../compoenents/ProductReviewCard/ProductReviewCard';
import {useAlert} from "react-alert";
import Metadata from '../../Layout/Metadata';
import {addItemsToCart} from '../../actions/cartAction';
import Rating from '@mui/material/Rating';
import { NEW_PRODUCT_REVIEW_RESET } from '../../constant/keys';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
};


const ProductDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {product, error, loading} = useSelector((state) => state.productDetails);

    const {error: newreviewError, success} = useSelector((state) => state.newProductReview);

    const {isDeleted} = useSelector((state) => state.deleteProductReview);

    const quantity = 1;

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (newreviewError) {
            return alert.error(newreviewError);
        }

        if (success) {
            alert.success('Review Created Successfully');
            dispatch({type: NEW_PRODUCT_REVIEW_RESET});
        }

        dispatch(getProductDetails(id, quantity));
    }, [
        dispatch,
        id,
        quantity,
        error,
        alert,
        newreviewError,
        success,
        isDeleted
    ])


    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart");
    };

    const reviewSubmitHandler = () => {
      const ReviewForm = new FormData();
  
      ReviewForm.set("rating", rating);
      ReviewForm.set("comment", comment);
      ReviewForm.set("productId", id);
  
      dispatch(newProductReview(ReviewForm));

      setOpen(false);
  };

    return (<MainContainer innerspace='0'>

        <Metadata title='localMart - product name'/> {
        loading ? <Loader/>: (<>
            <UpperContainer>
                <ImageContainer>
                    <ProductImageCarousel> {
                        product?.images && product?.images.map((item, i) => (<ImageProduct key={i}
                            src={
                                item?.url
                            }
                            alt={
                                `${i} Slide`
                            }/>))
                    } </ProductImageCarousel>
                </ImageContainer>
                <DetailsContainer>
                    <h4> {
                        product?.name
                    }</h4>
                    <BreakLine/>
                    <SingleContainer>
                        <Rating name="read-only"
                            value={
                                product?.ratings
                            }
                            readOnly/>
                    </SingleContainer>
                    <BreakLine/>
                    <h5>
                        <span>₹
                        </span>
                        {
                        product?.price
                    }</h5>
                    <DetailsPageBtn onClick={addToCartHandler}>Add to Cart</DetailsPageBtn>
                    <BreakLine/>
                    <h3>Stock :
                        <span> {
                            product?.Stock < 1 ? "OutOfStock" : "InStock"
                        }</span>
                    </h3>
                    <BreakLine/>
                    <VerticalContainer>
                        <p>About this Item :</p>
                        <p> {
                            product?.description
                        }</p>
                    </VerticalContainer>
                    <BreakLine/>
                    <ProductShopDetails to={
                        `/shop/${
                            product?.shopName?._id
                        }`
                    }>
                        <h4>Shop Name : {
                            product?.shopName?.name
                        }</h4>
                        <h6>City : {
                            product?.shopName?.city
                        }</h6>
                        <h6>State : {
                            product?.shopName?.state
                        }</h6>
                    </ProductShopDetails>
                    <BreakLine/>
                    <DetailsPageBtn onClick={handleOpen}>Add Review</DetailsPageBtn>
                    <Modal open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description">
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" component="h2" style={{fontWeight:500,  fontSize: '30px'}}>
                                        Add Review
                                    </Typography>
                                    <Rating name="simple-controlled" value={rating} onChange={(e) => setRating(e.target.value)} style={{marginBottom: '10px'}}/>
                                    <InputBox placeholder='Add Review' value={comment} onChange={(e) => setComment(e.target.value)}/>
                                    <ReviewSingleContainer>
                                        <ReviewBtn onClick={reviewSubmitHandler}>Submit</ReviewBtn>
                                        <ReviewBtn  bcolor='#ff0000' onClick={handleClose}>Cancel</ReviewBtn>
                                    </ReviewSingleContainer>
                                </Box>
                            </Modal>
                </DetailsContainer>
            </UpperContainer>
            <LowerContainer>
                <h4>Reviews</h4>
                {
                product?.reviews && product?.reviews[0] ? (<ReviewOuterContaner> {
                    product?.reviews.map((review) => <ProductReviewCard review={review} productId={id}
                        key={
                            review?._id
                        }/>)
                } </ReviewOuterContaner>) : (<NoReviewContainer>
                    <h2>No Reviews Yet</h2>
                </NoReviewContainer>)
            } </LowerContainer>
        </>)
    } </MainContainer>)
}

export default ProductDetails
