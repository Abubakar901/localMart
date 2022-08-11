import styled from "styled-components";
import Button from "@mui/material/Button";

export const NewProductMainContainer = styled.div `
  width: 100%;
  height: auto;
  display: flex;
`;

export const NewProductRightContainer = styled.div `
  width: 100%;
  display: flex;
  margin: 0 0 20px;
  flex-direction: column;
`;

export const NewProductTopContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  h4 {
    font-size: 35px;
    font-weight: 600;

    @media (max-width: 810px) {
      font-size: 30px;
    }

    @media (max-width: 408px) {
      font-size: 28px;
    }
  }
`;

export const NewProductFrom = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 auto;

  @media (max-width: 410px) {
    width: 280px;
  }

  @media (max-width: 392px) {
    width: 270px;
  }

  @media (max-width: 340px) {
    width: 260px;
  }

  @media (max-width: 325px) {
    width: 250px;
  }

  > select {
    border: none;
    border-radius: 7px;
    width: 300px;
    font-size: 18px;
    padding: 2px 10px;

    @media (max-width: 410px) {
      width: 100%;
    }
  }
`;

export const EachContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;

  @media (max-width: 410px) {
    width: 100%;
  }
`;

export const ProductLabels = styled.label `
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 405px) {
    font-size: 18px;
  }
`;

export const ProductInputs = styled.input `
  border: none;
  border-radius: 7px;
  width: 300px;
  font-size: 18px;
  padding: 2px 10px;

  @media (max-width: 410px) {
    width: 100%;
  }
`;

export const ImageInputContainer = styled.div `
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
`;

export const ImageOneContainer = styled.div `
  width: 100%;
  height: 100%;
  padding-left: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    margin-left: 10px;
    font-size: 17px;
    border: 2px solid #000;
    border-radius: 20px;
    outline: none;
    width: 112px;
    background-color: #fff;

    @media (max-width: 405px) {
      font-size: 15px;
      width: 100px;
    }
  }
`;

export const ImageTwoContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  overflow: auto;

  > img {
    height: 70px;
    margin-right: 5px;
    width: 70px;
  }
`;

export const CreateProductBtn = styled(Button)
`
  && {
    color: white;
    padding: 7px 20px;
    background-color: #5b5f97;
    width: 100%;
    font-size: 18px;
    letter-spacing: 0.7px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &&:hover {
    background-color: #5b5f97;
  }
`;