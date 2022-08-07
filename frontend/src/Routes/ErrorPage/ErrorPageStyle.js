import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainContainer = styled.div `
  width: 100%;
  min-height: 467px;
  background-color: #cfe2f3;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ErrorPageContainer = styled.div `
  min-height: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 555px) {
    padding: 10px;
    text-align: center;
  }
  > h1 {
    font-size: 40px;
    font-weight: 700;
    margin:0;

    @media (max-width: 768px) {
      font-size: 30px;
    }
    @media (max-width: 555px) {
      font-size: 1.7rem;
    }
  }
`;

export const ReturnHomeBtn = styled(Button)
`
  && {
    color: white;
    text-transform: capitalize;
    font-size: 20px;
    margin-top: 5px;
    padding: 5px 30px;
    background-color: #5b5f97;
    border-radius: 40px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media (max-width: 768px) {
    && {
      padding: 5px 20px;
      font-size: 18px;
    }
  }
  &&:hover {
    background-color: #5b5f97;
  }
`;