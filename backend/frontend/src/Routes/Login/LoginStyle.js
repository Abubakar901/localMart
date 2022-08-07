import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export const MainLoginContainer = styled.div `
  width: 300px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h3 `
  font-size: 45px;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  color: #5b5f97;
  font-weight: 800;
  text-decoration: underline;
`;

export const Box = styled.div `
  width: 100%;
  display: flex;
`;
export const HalfBox = styled.div `
  width: 50%;
  text-align: center;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #000;
  font-size: 20px;
  font-weight: 600;
  color:  ${(props) => props.true || props.false || "#000"};

  :hover {
    color: #fff;
    background-color: #88b58b;
    border: 1px solid #000;
    cursor: pointer;
  }
`;

export const LoginContainer = styled.div `
  background-color: #5b5f97;
  padding: 10px;
  height: 480px;
  width: 300px;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 30px;
  animation-name: loginTransition;
  animation-duration: 0.7s;
  @keyframes loginTransition {
    0% {
      height: 400px;
    }
    100% {
      height: 480px;
    }
  }
`;

export const DullText = styled.div `
  font-size: 18px;
  color: #e1dede;
  margin-bottom: 8px;
`;

export const LoginForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h6 `
  font-size: 40px;
  color: #b8b8d1;
  margin-top: 8px;
  font-weight: bold;
`;

export const LabelBox = styled.label `
  font-size: 20px;
  color: #e1dede;
  margin-top: 8px;
`;

export const InputBox = styled.input `
  border-radius: 10px;
  outline: none;
  border: none;
  width: 250px;
  margin-bottom: 10px;
  padding: 3px 20px;
`;

export const ForgotPassLink = styled(Link)
`
  color: #e1dede;
  margin-bottom: 20px;
  font-size: 15px;
  align-items: flex-end;

  :hover {
    cursor: pointer;
    color: #ff0000;
  }
`;

export const LoginButton = styled(Button)
`
  && {
    background-color: #9fc5e8;
    width: 250px;
    margin-bottom: 10px;
    padding: 8px 10px;
    height: 40px;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
  }

  &&:hover {
    border: 1px solid #fff;
    padding: 9px 9px;
    background-color: #6a329f;
  }
`;

export const Line = styled.div `
  color: #fff;
  margin: 10px 3px 10px;
  border: 1px solid #fff;
  width: 250px;
`;

export const RegisterContainer = styled.div `
  background-color: #5b5f97;
  padding: 14px;
  height: 650px;
  display: flex;
  width: 300px;
  border-bottom: 2px solid #000;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 30px;
  animation-name: registerTransition;
  animation-duration: 0.9s;
  @keyframes registerTransition {
    0% {
      height: 600px;
    }
    100% {
      height: 650px;
    }
  }

  > p {
    font-size: 18px;
    color: #e1dede;
    margin-bottom: 10px;
  }
`;

export const RegistrationForm = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebySide = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > img {
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    margin-left: 10px;
    width: 50px;
  }

  > input {
    width: 100px;
    outline: none;
    border-radius: 30px;
  }
`;