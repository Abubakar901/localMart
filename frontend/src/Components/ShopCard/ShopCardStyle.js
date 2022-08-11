import styled from "styled-components";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

export const RatingComp = styled(Rating)
`
  && {
    font-size: 20px;
    margin: 0;
  }
`;

export const ShopLink = styled(Link)`
  text-decoration: none;
  > img {
    border-radius: 10px;
    height: 120px;
    width: 200px;
    margin: 1px;

    @media (max-width: 600px) {
      height: 90px;
      width: 95%;
    }
    @media (max-width: 500px) {
      height: 160px;
    }
  }

  > h4 {
    font-size: 28px;
    margin-top: 10px;
    text-transform: capitalize;
    color: #5b5f97;

    @media (max-width: 620px) {
      margin-top: 5px;
      font-size: 22px;
      margin-bottom: 2px;
    }
    @media (max-width: 500px) {
      font-size:25px;px
      margin-top: 10px;
      margin-bottom: 5px;
    }
    @media (max-width: 400px) {
      margin-top: 5px;
      margin-bottom: 2px;
    }
  }

  > h5 {
    font-size: 20px;
    color: #000;
    text-transform: capitalize;
    color: green;
    margin: 0;
    margin-bottom: 2px;
    
    @media (max-width: 500px) {
      font-size:22px;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    @media (max-width: 400px) {
      margin-top: 2px;
      margin-bottom: 2px;
    }
  }

  > p {
    color: #000;
    font-weight: 500;
    margin: 2px;
    text-transform: capitalize;

    @media (max-width: 620px) {
      margin: 0;
    }
    
    @media (max-width: 500px) {
      font-size:18px;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    @media (max-width: 400px) {
      margin-top: 2px;
      margin-bottom: 2px;
    }
  }
`;

export const ShopTwoItems = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    flex-direction: row;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ShoppingCard = styled.div `
  background-color: #fff;
  margin-top: 10px;
  min-height: 345px;
  width: 230px;
  text-align: center;
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  padding-top: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 600px) {
    width: 40%;
    min-height: 200px;
  }

  @media (max-width: 500px) {
    width: 300px;
    min-height: 200px;
  }
`;

export const ExploreShopBtn = styled(Button)
`
  && {
    margin-top: 5px;
    color: #fff;
    width: 98%;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-size: 15px;
    background-color: ${(props) => props.bgcolor || "#bd2377"};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 600px) {
    && {
      margin-top: 3px;
      padding: 5px 0;
      margin-bottom: 3px;
      font-size: 14px;
    }
  }

  &&:hover {
    background-color: ${(props) => props.bgColor || "#c74981"};
  }
`;