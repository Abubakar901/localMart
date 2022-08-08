import React, { useState, useEffect } from "react";
import {
  MainLoginContainer,
  Heading,
  Box,
  HalfBox,
  Title,
  InputBox,
  LabelBox,
  Line,
  LoginContainer,
  DullText,
  LoginForm,
  ForgotPassLink,
  LoginButton,
  RegisterContainer,
  RegistrationForm,
  SidebySide,
} from "./LoginStyle";
import Metadata from "../../Layout/Metadata";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin, postRegister, clearErrors } from "../../Actions/UserAction";
import { useAlert } from "react-alert";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const [content, setContent] = useState(true);
  const [colorOne, setColorOne] = useState("red");
  const [colorTwo, setColorTwo] = useState("");

  const { user, error, isAuthenticated } = useSelector((state) => state.user);

  // login variables
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // register variables
  const [userdetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("./assests/Profile.png");

  const { fname, lname, phone, email, password, confirmPassword } = userdetails;

  // handling switch
  const handleSwitch = (num) => {
    if (num === 0) {
      setContent(true);
      setColorOne("red");
      setColorTwo("none");
    } else if (num === 1) {
      setContent(false);
      setColorOne("none");
      setColorTwo("red");
    }
  };

  // login form
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(loginEmail, loginPassword));
  };

  // register form
  const registerSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const myForm = new FormData();

      myForm.set("firstName", fname);
      myForm.set("lastName", lname);
      myForm.set("phone", phone);
      myForm.set("email", email);
      myForm.set("password", password);
      myForm.set("avatar", avatar);
      dispatch(postRegister(myForm));
    } else {
      alert.error("Password and Confirm Password Does not Match");
    }
  };

  // register form photo uploading
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

  const redirect = location.search
    ? "/" + location.search.split("=")[1]
    : "/profile";

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert.success("Login Successfull.");
      if (user.role === "admin") {
        navigate("/admin/dashboard");
      } else if (user.role === "seller") {
        navigate("/seller/dashboard");
      } else {
        navigate(redirect);
      }
    }
  }, [dispatch, error, alert, isAuthenticated, user, navigate, redirect]);

  return (
    <MainLoginContainer>
      <Heading>localMart</Heading>
      <Box>
        <HalfBox true={colorOne} onClick={() => handleSwitch(0)}>
          Login
        </HalfBox>
        <HalfBox false={colorTwo} onClick={() => handleSwitch(1)}>
          Register
        </HalfBox>
      </Box>
      {content ? (
        <LoginContainer>
          <Metadata title="localMart - Login" />
          <LoginForm onSubmit={loginSubmit}>
            <Title>Login</Title>
            <LabelBox>Email:</LabelBox>
            <InputBox
              placeholder="Enter Email"
              type="email"
              name="loginEmail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
              autoComplete="off"
            />

            <LabelBox>Password:</LabelBox>
            <InputBox
              placeholder="Enter Password"
              type="password"
              name="loginPassword"
              autoComplete="off"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />

            <ForgotPassLink to="/forgot/password">
              Forgot Password?
            </ForgotPassLink>
            <LoginButton value="submit" type="submit">
              Login
            </LoginButton>
          </LoginForm>
          <Line />

          <DullText>New Here?</DullText>
          <LoginButton onClick={() => handleSwitch(1)}>Sign Up</LoginButton>
        </LoginContainer>
      ) : (
        <RegisterContainer>
          <Metadata title="localMart - Register" />
          <RegistrationForm
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <Title>Register</Title>
            <LabelBox>First Name:</LabelBox>
            <InputBox
              placeholder="Enter Your First Name"
              type="text"
              name="fname"
              value={fname}
              onChange={registerDataChange}
              required
              autoComplete="off"
            />

            <LabelBox>Last Name:</LabelBox>
            <InputBox
              placeholder="Enter Your Last Name"
              type="text"
              name="lname"
              value={lname}
              onChange={registerDataChange}
              required
              autoComplete="off"
            />

            <LabelBox>Phone Number:</LabelBox>
            <InputBox
              placeholder="Enter Your Phone Number"
              type="number"
              name="phone"
              value={phone}
              onChange={registerDataChange}
              required
              autoComplete="off"
            />

            <LabelBox>Email:</LabelBox>
            <InputBox
              placeholder="Enter Your Email Address"
              type="email"
              name="email"
              value={email}
              onChange={registerDataChange}
              required
              autoComplete="off"
            />

            <SidebySide>
              <LabelBox>Avatar:</LabelBox>
              <img src={avatarPreview} alt="no imge" />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
              />
            </SidebySide>

            <LabelBox>Password:</LabelBox>
            <InputBox
              placeholder="Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={registerDataChange}
              required
              autoComplete="off"
            />

            <LabelBox> Confirm:</LabelBox>
            <InputBox
              placeholder="Enter Password Again"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={registerDataChange}
              required
              autoComplete="off"
            />

            <LoginButton value="submit" type="submit">
              Sign Up
            </LoginButton>
          </RegistrationForm>
        </RegisterContainer>
      )}
    </MainLoginContainer>
  );
};

export default Login;
