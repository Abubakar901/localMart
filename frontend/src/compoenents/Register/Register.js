import React from 'react';
import {  RegisterContainer, RegistrationForm,  Title,  InputBox, Button, LabelBox } from './RegisterStyle';
import Medadata from '../../Layout/Medadata';

const Register = () => {
  return (
      <RegisterContainer>
      <Medadata title='localMart - Register' />
      <RegistrationForm>
        <Title>Register</Title>
        
          <LabelBox>Username:</LabelBox>
          <InputBox placeholder='Enter Username'/>

          
          <LabelBox>Email:</LabelBox>
        <InputBox placeholder='Enter Email'/>

      
        <LabelBox>Phone Number:</LabelBox>
        <InputBox placeholder='Enter Phone Number'/>
        
        
        <LabelBox>  City, State, Country:</LabelBox>
        <InputBox placeholder='Enter City' />
        
        <LabelBox>Username:</LabelBox>
        <InputBox placeholder='Enter Password'/>

        
        <LabelBox>Username:</LabelBox>
        <InputBox placeholder='Re-Enter Password'/>

        <Button>Sign Up</Button>
      </RegistrationForm>
    </RegisterContainer>
  )
}

export default Register