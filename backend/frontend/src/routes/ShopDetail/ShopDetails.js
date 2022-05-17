import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getShopDetails} from '../../actions/shopActions';
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
    InputBox
} from './ShopDetailsStyle';
import ReactStars from 'react-rating-stars-component';
import Loader from '../../Layout/Loader/Loader';
import ReviewCard from '../../compoenents/ReviewCard/ReviewCard';
import Metadata from '../../Layout/Metadata';
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
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

const ShopDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const {shop, loading} = useSelector((state) => state.shopDetails)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(getShopDetails(id))
    }, [dispatch, id])


    const options = {
        edit: true,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 50 : 30,
        value: shop?.ratings,
        innerHeight: 50
    }

    return (
        <MainContainer innerspace='0'>
            <Metadata title='localMart - shop id'/> {
            loading ? <Loader/>: (
                <>
                    <UpperContainer>
                        <ImageContainer>
                            <ShopImageCarousel> {
                                shop.images && shop.images.map((item, i) => (
                                    <ImageShop key={i}
                                        src={
                                            item.url
                                        }
                                        alt={
                                            `${i} Slide`
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
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Add Review
                                    </Typography>
                                    <InputBox place/>
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
