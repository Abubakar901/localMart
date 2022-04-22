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

        <LabelBox>Password:</LabelBox>
        <InputBox placeholder='Enter Phone Number'/>
        
        
        <LabelBox> Confirm:</LabelBox>
        <InputBox placeholder='Enter City' />
    
      

        <Button>Sign Up</Button>
      </RegistrationForm>
    </RegisterContainer>
  )
}

export default Register