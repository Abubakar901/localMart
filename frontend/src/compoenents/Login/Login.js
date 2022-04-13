import React from 'react';
import { Title, InputBox, LabelBox, Line, LoginContainer, LoginForm, ForgotPassLink, Button, Logo } from './LoginStyle';
import Medadata from '../../Layout/Medadata';
import { StyledLink } from '../../GlobalStyle';

const Login = () => {
  return (
    <LoginContainer>
      <Medadata title='localMart - Login' />
      <Logo>localMart</Logo>
      <LoginForm>
        <Title>Login</Title>

        <LabelBox>Email:</LabelBox>
        <InputBox />

        <LabelBox>Password:</LabelBox>
        <InputBox />
        
        <StyledLink to="/forgotpassword">
          <ForgotPassLink>Forgot Password?</ForgotPassLink>
        </StyledLink>

        <Button>Login</Button>
      </LoginForm>
      <Line />
      <p>New Here?</p>
      <Button>Sign Up</Button>
    </LoginContainer>
  )
}

export default Login