import React, { useState, useEffect }from 'react';
import {  RegisterContainer, RegistrationForm,  Title,  InputBox, Button, LabelBox, SidebySide } from './RegisterStyle';
import Medadata from '../../Layout/Medadata';
import { useDispatch, useSelector } from 'react-redux';
import {  postRegister } from '../../actions/userAction';

const Register = ({ handleClose }) => {

  const dispatch = useDispatch();
  
  const { isAuthenticated, user } = useSelector(
    (state) => state.user
  );

  const [userdetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    phone : "",
    email: "",
    password: "",
    confirmPassword : ""
  });
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("./assests/Profile.png")


  const { fname, lname, phone,  email, password, confirmPassword } = userdetails;

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
      setUserDetails({ ...userdetails, [e.target.name]: e.target.value });
    }
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      
      const myForm = new FormData();

      myForm.set("firstName", fname);    
      myForm.set("lastName", lname);  
      myForm.set("phone", phone);
      myForm.set("email", email);
      myForm.set("password", password);
      myForm.set("avatar", avatar);
      dispatch(postRegister(myForm));

    } else {
      alert("Password and Confirm Password Does not Match")
    }
  };

  
  
  useEffect(() => {

    if(isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(user))
      handleClose(); 
      console.log('User Authenticated')
    }
  }, [isAuthenticated, handleClose, user ])

  return (
      <RegisterContainer>
      <Medadata title='localMart - Register' />
      <RegistrationForm 
                encType="multipart/form-data"
                onSubmit={registerSubmit}>
        <Title>Register</Title>
        
          <LabelBox>First Name:</LabelBox>
          <InputBox placeholder='Enter Your First Name' type='text' name='fname' value={fname} onChange={registerDataChange} required />

          
          <LabelBox>Last Name:</LabelBox>
          <InputBox placeholder='Enter Your Last Name' type='text' name='lname' value={lname} onChange={registerDataChange} required />

          <LabelBox>Phone Number:</LabelBox>
        <InputBox placeholder='Enter Your Phone Number' type='text' name='phone' value={phone} onChange={registerDataChange} required/>

          <LabelBox>Email:</LabelBox>
        <InputBox placeholder='Enter Your Email Address' type='email' name='email' value={email} onChange={registerDataChange} required/>

          
          <SidebySide>
          <LabelBox>Avatar:</LabelBox>
            <img src={avatarPreview} alt='user-avatar' />
            <input type='file' name='avatar' accept="image/*"  onChange={registerDataChange} />
          </SidebySide>

        <LabelBox>Password:</LabelBox>
        <InputBox placeholder='Enter Password' type='password' name='password' value={password} onChange={registerDataChange} required/>
        
        <LabelBox> Confirm:</LabelBox>
        <InputBox placeholder='Enter Password Again' type='password' name='confirmPassword' value={confirmPassword} onChange={registerDataChange} required/>

        <Button  value='submit' type='submit'>Sign Up</Button>
      </RegistrationForm>
    </RegisterContainer>
  )
}

export default Register