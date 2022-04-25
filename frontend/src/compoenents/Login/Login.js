import React, { useEffect, useState } from 'react';
import { Title, InputBox, LabelBox, Line, LoginContainer, DullText, LoginForm, ForgotPassLink, Button } from './LoginStyle';
import Medadata from '../../Layout/Medadata';
import { StyledLink } from '../../GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, postLogin } from '../../actions/userAction';

const Login = ({ handleChange,  handleClose }) => {

  const dispatch = useDispatch();

  const { loading, isAuthenticated, user } = useSelector(state => state.user)

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(email, password))
  }

  
  useEffect(() => {
    if(isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(user))
      handleClose();
    }
  }, [isAuthenticated, handleClose, user ])
  return (
    <LoginContainer>
      <Medadata title='localMart - Login' />
      <LoginForm onSubmit={loginSubmit}>
        <Title>Login</Title>

        <LabelBox>Email:</LabelBox>
        <InputBox placeholder='Enter Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

        <LabelBox>Password:</LabelBox>
        <InputBox placeholder='Enter Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        
        <StyledLink to="/forgotpassword">
          <ForgotPassLink>Forgot Password?</ForgotPassLink>
        </StyledLink>

        <Button type="submit" value="Login" >Login</Button>

      </LoginForm>
      <Line />
      <DullText>New Here?</DullText>
      <Button onClick={() => handleChange('event',1) } >Sign Up</Button>
    </LoginContainer>
  )
}

export default Login