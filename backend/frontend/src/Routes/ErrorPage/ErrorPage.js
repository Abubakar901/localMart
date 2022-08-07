import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  ErrorPageContainer,
  ReturnHomeBtn,
} from "./ErrorPageStyle";
import Metadata from "../../Layout/Metadata";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <ErrorPageContainer>
        <Metadata title="localMart - 404 Page Not Found" />
        <h1>Page Not Found!</h1>
        <ReturnHomeBtn onClick={() => navigate("/")}>
          Go Back to Home Page
        </ReturnHomeBtn>
      </ErrorPageContainer>
    </MainContainer>
  );
};

export default ErrorPage;
