import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorPageContainer, ReturnHomeBtn } from './ErrorPageStyle';
import Metadata from '../../Layout/Metadata';
import { MainContainer } from '../../GlobalStyle';

const ErrorPage = () => {
    const navigate = useNavigate();

  return (
    <MainContainer>
      <ErrorPageContainer>
    
    <Metadata title='localMart - 404 Page Not Found' />
      <h1>We are Sorry! Page Not Found!</h1>
      <ReturnHomeBtn onClick={() => navigate("/")}>Go Back to Home Page</ReturnHomeBtn>
  </ErrorPageContainer>
    </MainContainer>
  )
}

export default ErrorPage