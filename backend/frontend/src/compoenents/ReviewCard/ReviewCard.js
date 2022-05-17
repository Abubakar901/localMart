import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { ReviewInnerContainer, UserContainer } from './ReviewCardStyle';

const ReviewCard = ({ review }) => {

    const options = {
        edit:true,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 50 : 30,
        value: review?.rating,
        innerHeight:50
      }
      
  return (
    <ReviewInnerContainer>
        <UserContainer>
            <img src='https://i.pinimg.com/736x/bb/d5/eb/bbd5eb8953cff9d99ddc96063cf2b63e.jpg' alt={review?.name} />
            <h6>{review?.name}</h6> 
        </UserContainer>
        <ReactStars {...options}/>
        <p>{review?.comment}</p>
    </ReviewInnerContainer>
  )
}

export default ReviewCard