import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainContainer = styled.div `
  width: 450px;
  height: auto;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
  display: flex;
  background-color: #f6b26b;
  flex-direction: column;

  @media (max-width: 600px) {
    margin: 20px auto;
  }

  @media (max-width:495px) {
  width: 400px;
  padding-left: 40px;
  padding-right: 40px;
  }

  @media (max-width:410px) {
  padding-left: 30px;
  padding-right: 30px;
    margin: 0;
    width:100%;
  }
`;

export const UpdateBtn = styled(Button)
`
  && {
    color: white;
    padding: 5px 10px;
    background-color: #5b5f97;
    width: 100%;
    font-size: 18px;
    margin: 20px auto 0;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &&:hover {
    background-color: #5b5f97;
  }
`;

export const TopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  h2 {
    font-size: 35px;
    text-decoration: underline;

    @media (max-width: 800px) {
      font-size: 32px;
    }
  }
`;

export const BottomContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  height: auto;
  text-align: left;

  h6 {
    margin-top: 20px;
    font-size: 22px;
    width: 100%;
    text-transform: capitalize;

    @media (max-width:410px) {
    margin-top: 15px;
  }
  }

  > form {
    margin-top: 20px;
    width: 100%;

    > label {
      font-size: 22px;
      font-weight: 500;
      margin-right: 10px;
    }

    > select {
      font-size: 22px;
      font-weight: 500;
      padding: 2px 5px;
      outline: none;

      @media (max-width: 800px) {
        font-size: 20px;
      }
    }
  }
`;