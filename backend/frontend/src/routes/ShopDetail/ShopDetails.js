import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getShopDetails, newShopReview} from '../../actions/shopActions';
import {MainContainer} from '../../GlobalStyle';
import {
    UpperContainer,
    LowerContainer,
    ImageContainer,
    DetailsContainer,
    SingleContainer,
    DetailsPageBtn,
    ReviewOuterContaner,
    NoReviewContainer,
    ShopImageCarousel,
    ImageShop,
    InputBox,
    ReviewBtn,
    ReviewSingleContainer
} from './ShopDetailsStyle';
import ReactStars from 'react-rating-stars-component';
import Loader from '../../Layout/Loader/Loader';
import ReviewCard from '../../compoenents/ReviewCard/ReviewCard';
import Metadata from '../../Layout/Metadata';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { NEW_SHOP_REVIEW_RESET } from '../../constant/keys';
import Rating from '@mui/material/Rating';

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

const ShopDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const { shop, loading, error} = useSelector((state) => state.shopDetails);
    
    const { error:newreviewError, success } = useSelector((state) => state.newShopReview);


    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (error) {
            return alert.error(error);
        }

        if(newreviewError) {
            return alert.error(newreviewError);
          }

        if (success) {
            alert.success('Review Created Successfully');
            dispatch({type: NEW_SHOP_REVIEW_RESET });
        }
        dispatch(getShopDetails(id))
    }, [dispatch, id, error])


    const options = {
        edit: true,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 50 : 30,
        value: shop?.ratings,
        innerHeight: 50
    }

    const reviewSubmitHandler = () => {
        const ReviewForm = new FormData();
    
        ReviewForm.set("rating", rating);
        ReviewForm.set("comment", comment);
        ReviewForm.set("shopId", id);
    
        dispatch(newShopReview(ReviewForm));

        setOpen(false);
    };

    return (
        <MainContainer innerspace='0'>
            <Metadata title='localMart - shop id'/> {
            loading ? <Loader/>: (
                <>
                    <UpperContainer>
                        <ImageContainer>
                            <ShopImageCarousel autoPlay={false}> {
                                shop.images && shop?.images.map((item) => (
                                    <ImageShop key={item?.url}
                                        src={
                                            item?.url
                                        }
                                        alt={
                                            `${item?.name}`
                                        }/>
                                ))
                            } </ShopImageCarousel>
                        </ImageContainer>
                        <DetailsContainer>
                            <h3>{
                                shop?.name
                            }</h3>
                            <SingleContainer>
                                <ReactStars {...options}/>
                                <span>{" "}
                                    ({
                                    shop?.numOfReviews
                                }
                                    Reviews)</span>
                            </SingleContainer>
                            <h4>Category : {
                                shop?.category
                            } </h4>
                            <h5>Contact : {
                                shop?.contact
                            }</h5>
                            <h6>Address : {
                                shop?.address
                            }</h6>
                            <p>City : {
                                shop?.city
                            }</p>
                            <p>State: {
                                shop?.state
                            }</p>
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
                            <DetailsPageBtn>Explore Products</DetailsPageBtn>
                        </DetailsContainer>
                    </UpperContainer>
                    <LowerContainer>
                        <h4>Reviews</h4>
                        {
                        shop?.reviews && shop?.reviews[0] ? (
                            <ReviewOuterContaner> { 
                                shop?.reviews.map((review) => <ReviewCard review={review}
                                    key={
                                        review?._id
                                    }/>)
                            } </ReviewOuterContaner>
                        ) : (
                            <NoReviewContainer>
                                <h2>No Reviews Yet</h2>
                            </NoReviewContainer>
                        )
                    } </LowerContainer>
                </>
            )
        } </MainContainer>
    )
}

export default ShopDetails
