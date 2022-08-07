import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const NoOrderContaiener = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  height: 468px;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const OrderBtn = styled(Button)
`
  && {
    color: white;
    margin-left: 0px;
    font-size: 20px;
    margin-top: 5px;
    padding: 3px 20px;
    background-color: #5b5f97;
    width: 300px;
    border-radius: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 500px) {
    && {
      padding: 3px 15px;
      font-size: 18px;
      width: 200px;
    }
  }
  &&:hover {
    background-color: #5b5f97;
  }
`;

export const OrderMainContainer = styled.div `
  width: 100%;
  height: auto;
  margin: 30px auto;
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const OrderLine = styled.hr `
  margin-top: 0;
  margin-bottom: 10px;
  width: 80%;

  @media (max-width: 1460px) {
    width: 90%;
  }

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export const OrderTopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;
  padding: 0 60px;

  h4 {
    font-size: 45px;
    color: #5b5f97;
    text-transform: capitalize;

    @media (max-width: 1150px) {
      font-size: 35px;
    }
  }
`;

export const OrderBottomContainer = styled.div `
  width: 80%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1460px) {
    width: 90%;
  }

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export const OrderCard = styled.div `
  width: 100%;
  height: auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > h6 {
    margin-left: 20px;
    font-size: 35px;
    font-weight: 600;
    color: #5b5f97;

    @media (max-width: 1065px) {
      font-size: 32px;
    }

    @media (max-width: 700px) {
      font-size: 28px;
    }
  }
`;

export const CardCommonContainer = styled.div `
  padding-left: 20x;
  padding-top: 10px;
  margin-bottom: 10px;

  > h6 {
    margin: 3px;
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #5b5f97;
    font-weight: 500;

    @media (max-width: 1065px) {
      font-size: 25px;
    }

    @media (max-width: 700px) {
      font-size: 22px;
    }
  }

  > h5 {
    font-size: 22px;
    margin-bottom: 6px;
    margin-left: 5px;

    @media (max-width: 1065px) {
      font-size: 20px;
    }

    @media (max-width: 700px) {
      font-size: 18px;
    }

    > span {
      font-weight: 700;
      text-decoration: underline;

      @media (max-width: 1065px) {
        font-weight: 500;
      }
    }
  }

  > p {
    font-size: 20px;
    font-weight: 500;
    margin: 2px;
    text-transform: capitalize;

    @media (max-width: 700px) {
      font-size: 18px;
    }
  }
`;

export const DeleteBtn = styled(Button)
`
  && {
    color: white;
    margin-left: 0px;
    font-size: 18px;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    background-color: #5b5f97;
    border-radius: 7px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1065px) {
    && {
      font-size: 15px;
    }
  }

  @media (max-width: 595px) {
    && {
      display: none;
    }
  }

  &&:hover {
    background-color: #5b5f97;
    cursor: pointer;
  }
`;

export const DeleteLogo = styled(DeleteIcon)
`
  && {
    margin-left: 10px;
    color: #fff;
    font-size: 20px;
  }

  @media (max-width: 1065px) {
    && {
      font-size: 17px;
    }
  }

  :hover {
    cursor: pointer;
  }
`;

export const Delete = styled(DeleteIcon)
`
  && {
    margin-left: 10px;
    font-size: 25px;
    display:none;
    border-radius:50%;
    border:2px solid #ff0000;
    color:#ff0000;
    margin:5px;
    padding:2px;
  }

  @media (max-width: 595px) {
    && {
      display: flex;
    }
  }

  :hover {
    cursor: pointer;
  }
`;

export const CardBottomContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OrderProductContainer = styled(Link)
`
  text-decoration: none;
  text-transform: capitalize;
  color: #000;
  height: auto;
  width: 45%;
  border-radius: 10px;
  display: flex;
  border: 2px solid #000;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1310px) {
    width: 48%;
  }

  @media (max-width: 1045px) {
    flex-direction: column;
    width: 225px;
    text-align: center;
  }

  :hover {
    color: #000;
  }
  > img {
    width: 180px;
    margin-right: 20px;
    height: 180px;

    @media (max-width: 1045px) {
      margin-bottom: 20px;
      margin-right: 0;
      height: 150px;
      width: auto;
    }
  }
`;

export const OrderProductDetails = styled.div `
  > h6 {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const LineBreak = styled.hr `
  width: 100%;
  font-weight: 800;
  border: 2px solid #000;
`;