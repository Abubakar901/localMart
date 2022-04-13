import React from 'react';
import {  RegisterContainer, Logo, RegistrationForm, Title,  InputBox, Button } from './RegisterStyle';
import Medadata from '../../Layout/Medadata';

const Register = () => {
  return (
      <RegisterContainer>
      <Medadata title='localMart - Register' />
      <Logo>localMart</Logo>
      <RegistrationForm>
        <Title>Register</Title>
        
        <InputBox placeholder='Enter Username'/>
        <InputBox placeholder='Enter Email'/>

        <InputBox placeholder='Enter Phone Number'/>
        
        <InputBox placeholder='Enter City' />
        
        <InputBox placeholder='Enter State'/>  
        
        <InputBox placeholder='Enter Country'/>
        
        <InputBox placeholder='Enter Password'/>
        <InputBox placeholder='Re-Enter Password'/>

        <Button>Sign Up</Button>
      </RegistrationForm>
    </RegisterContainer>
  )
}

export default Register