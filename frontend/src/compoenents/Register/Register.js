import React, { useState }from 'react';
import {  RegisterContainer, RegistrationForm,  Title,  InputBox, Button, LabelBox, SidebySide } from './RegisterStyle';
import Medadata from '../../Layout/Medadata';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, postRegister } from '../../actions/userAction';

const Register = () => {

  const dispatch = useDispatch();
  
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword : ""
  });
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("./assests/Profile.png")


  const { username, email, password, confirmPassword } = user;

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      
      const myForm = new FormData();

      myForm.set("name", username);
      myForm.set("email", email);
      myForm.set("password", password);
      myForm.set("avatar", avatar);
      dispatch(postRegister(myForm));

    } else {
      alert("Password and Confirm Password Does not Match")
    }
  };

  return (
      <RegisterContainer>
      <Medadata title='localMart - Register' />
      <RegistrationForm 
                encType="multipart/form-data"
                onSubmit={registerSubmit}>
        <Title>Register</Title>
        
          <LabelBox>Username:</LabelBox>
          <InputBox placeholder='Enter Username' type='text' name='username' value={username} onChange={registerDataChange} required />

          <LabelBox>Email:</LabelBox>
        <InputBox placeholder='Enter Email' type='email' name='email' value={email} onChange={registerDataChange} required/>

          <LabelBox>Avatar:</LabelBox>
          
          <SidebySide>
            <img src={avatarPreview} />
            <input type='file' name='avatar' accept="image/*"  onChange={registerDataChange} />
          </SidebySide>

        <LabelBox>Password:</LabelBox>
        <InputBox placeholder='Enter Phone Number' type='password' name='password' value={password} onChange={registerDataChange} required/>
        
        <LabelBox> Confirm:</LabelBox>
        <InputBox placeholder='Enter City' type='password' name='confirmPassword' value={confirmPassword} onChange={registerDataChange} required/>

        <Button  value='submit' type='submit'>Sign Up</Button>
      </RegistrationForm>
    </RegisterContainer>
  )
}

export default Register