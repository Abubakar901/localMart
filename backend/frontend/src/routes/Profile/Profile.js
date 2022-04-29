import React from 'react';
import { BottomContainer, MainContainer, TopContainer } from '../../GlobalStyle';
import { LeftContainer, RightContainer } from './ProfileStyle'; 
import  { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector(state => state.user)
    console.log(user)
  return (
    <MainContainer bg='#87aeae' width='90%'>
      <TopContainer width='100%' spacing='center'>
        <h1>Profile</h1>
      </TopContainer>
        <BottomContainer >
        <LeftContainer>
            <img src={user.avatar.url} alt='./assests/Profile.png' />
        </LeftContainer>
        <RightContainer>
          <h3>Username : <span>{user.firstName + " "  + user.lastName}</span></h3>
          <h4 color='#000'>Contact : {user.phone}</h4>
          <h5>Email : {user.email}</h5>
          <h6>Joined On: {String(user.createdAt).substr(0, 10)}</h6>
        </RightContainer>
        </BottomContainer>
    </MainContainer>
  )
}

export default Profile