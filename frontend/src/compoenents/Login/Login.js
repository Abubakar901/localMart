import React from 'react';
import { Title, InputBox, LabelBox, Line, LoginContainer, LoginForm, ForgotPassLink, Button } from './LoginStyle';
import Medadata from '../../Layout/Medadata';
import { StyledLink } from '../../GlobalStyle';

const Login = ({ handleChange }) => {
  return (
    <LoginContainer>
      <Medadata title='localMart - Login' />
      <LoginForm>
        <Title>Login</Title>

        <LabelBox>Email:</LabelBox>
        <InputBox placeholder='Enter Email'/>

        <LabelBox>Password:</LabelBox>
        <InputBox placeholder='Enter Password' />
        
        <StyledLink to="/forgotpassword">
          <ForgotPassLink>Forgot Password?</ForgotPassLink>
        </StyledLink>

        <Button>Login</Button>

      </LoginForm>
      <Line />
      <p>New Here?</p>
      <Button onClick={() => handleChange('event',1) } >Sign Up</Button>
    </LoginContainer>
  )
}

export default Login