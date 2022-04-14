import React from 'react';
import { Title, InputBox, LabelBox, Line, LoginContainer, LoginForm, ForgotPassLink, Button } from './LoginStyle';
import Medadata from '../../Layout/Medadata';
import { StyledLink } from '../../GlobalStyle';

const Login = () => {
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
        
        <Button bg='#6aa84f' transform='capitalize'>Login using Google</Button>

        <Button bg='#2986cc' transform='capitalize'>Login using Facebook</Button>

      </LoginForm>
      <Line />
      <p>New Here?</p>
      <Button>Sign Up</Button>
    </LoginContainer>
  )
}

export default Login