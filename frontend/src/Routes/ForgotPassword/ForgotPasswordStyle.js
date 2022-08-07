import styled from "styled-components";
import Button from "@mui/material/Button";

export const FPMain = styled.div `
  width: 500px;
  background-color: #fff;
  margin: auto;
  margin-top: 100px;
  padding: 30px;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 830px) {
    width: 450px;
  }

  @media (max-width: 665px) {
    width: 400px;
  }

  @media (max-width: 555px) {
    width: 350px;
  }

  @media (max-width: 415px) {
    width: 300px;
    padding: 20px;
  }
`;

export const FPTop = styled.div `
  width: 100%;
  text-align: center;

  h4 {
    font-size: 30px;
    color: #5b5f97;
    font-weight: 700;

    @media (max-width: 1025px) {
      font-size: 25px;
    }
  }
`;

export const FPForm = styled.form `
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1025px) {
    margin-top: 15px;
  }

  @media (max-width: 555px) {
    margin-top: 10px;
  }

  > label {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 5px;

    @media (max-width: 1025px) {
      font-size: 22px;
    }

    @media (max-width: 555px) {
      font-size: 18px;
    }
  }

  > input {
    font-size: 18px;
    width: 300px;
    padding: 5px 20px;
    border-radius: 7px;

    @media (max-width: 1025px) {
      width: 275px;
      padding: 5px 10px;
    }

    @media (max-width: 555px) {
      width: 250px;
      font-size: 15px;
      padding: 5px 10px;
    }
  }
`;

export const SubmitButton = styled(Button)
`
  && {
    color: white;
    text-transform: capitalize;
    font-size: 18px;
    margin-top: 20px;
    padding: 5px 30px;
    background-color: #5b5f97;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1025px) {
    && {
      padding: 5px 20px;
      font-size: 17px;
    }
  }

  @media (max-width: 555px) {
    && {
      margin-top: 10px;
      font-size: 15px;
    }
  }
  &&:hover {
    background-color: #5b5f97;
  }
`;