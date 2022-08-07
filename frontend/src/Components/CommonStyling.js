import styled from "styled-components";

export const SidebySide = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > img {
    height: 50px;
    border-radius: 50%;
    margin-right: 30px;
    width: 50px;
  }

  > input {
    width: 100px;
    outline: none;
    border-radius: 30px;
  }
`;

export const ModalHeading = styled.h4 `
  font-size: 30px;
  font-weight: 600;
  margin-top: 30px;
`;

export const UpdateLoadin = styled.div `
  height: auto;
  > h5 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const UpdateProfileForm = styled.form `
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;

  > label {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }

  > input {
    margin: 8px auto 15px;
    width: 80%;
    height: 30px;
    border-radius: 7px;
    border: none;
    padding: 2px 10px;
  }

  > button {
    font-size: 20px;
    padding: 8px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    width: 80%;
    margin: 10px auto;
    background-color: #5b5f97;
    color: #fff;
  }
`;