import React, { useState } from 'react';
import { Title, InputBox, LabelBox, Line, LoginContainer, DullText, LoginForm, ForgotPassLink, Button } from './LoginCompStyle';
import Metadata from '../../Layout/Metadata';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../actions/userAction';

const LoginComp = ({ handleChange }) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(email, password))
  }

  return (
    <LoginContainer>
      <Metadata title='localMart - Login' />
      <LoginForm onSubmit={loginSubmit}>
        <Title>Login</Title>

        <LabelBox>Email:</LabelBox>
        <InputBox placeholder='Enter Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

        <LabelBox>Password:</LabelBox>
        <InputBox placeholder='Enter Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        
          <ForgotPassLink to='forgotPassword'>Forgot Password?</ForgotPassLink>

        <Button type="submit" value="Login" >Login</Button>

      </LoginForm>
      <Line />
      <DullText>New Here?</DullText>
      <Button onClick={() => handleChange('event',1) } >Sign Up</Button>
    </LoginContainer>
  )
}

export default LoginComp