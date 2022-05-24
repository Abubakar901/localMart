import React from 'react';
import {MainContainer, TopContainer, LeftContainer, RightContainer, EditProfileBtn, BottomContainer} from './ProfileStyle'; 
import  { useSelector } from 'react-redux';
import Metadata from '../../Layout/Metadata';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.user);
    
    const redirectoOrders = () => {
      navigate('/orders');
    }

    const redirectUpdateProfile = () => {
      navigate('/profile/update');
    }

  return (
    <MainContainer>
      <Metadata title='localMart - Profile' />
      <TopContainer>
        <h1>My Profile</h1>
      </TopContainer>
        <BottomContainer >
        <LeftContainer>
            <img src={user?.avatar?.url} alt='./assests/Profile.png' />
            <EditProfileBtn onClick={redirectUpdateProfile}>Edit Profile</EditProfileBtn>
        </LeftContainer>
        <RightContainer>
          <h3>Username : <span>{user?.firstName + " "  + user?.lastName}</span></h3>
          <h5>Email : {user?.email}</h5>
          <h6>Joined On: {String(user?.createdAt).substr(0, 10)}</h6>
          <EditProfileBtn onClick={redirectoOrders}>My Orders</EditProfileBtn>
          <EditProfileBtn>Reset Password</EditProfileBtn>
        </RightContainer>
        </BottomContainer>
    </MainContainer>
  )
}

export default Profile