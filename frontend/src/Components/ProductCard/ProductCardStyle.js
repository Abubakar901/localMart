import styled from "styled-components";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

export const ProductLink = styled(Link)
`
  text-decoration: none;
  > img {
    text-align: center;
    border-radius: 10px;
    height: 125px;
    width: 95%;
    margin: 3px;
    background-color: #fff;
  }

  > h4 {
    font-size: 28px;
    padding:10px;
    text-transform: capitalize;
    color: #5b5f97;
    margin:0;
    text-decoration: none;

    @media (max-width:830px) {
    
        font-size: 25px;
}
  }
`;

export const ProductCard = styled.div `
  background-color: #fff;
  height: auto;
  width: 240px;
  padding-top: 5px;
  padding-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width:830px) {
    width:200px;
}
`;

export const ShopTwoItems = styled.div `
  width: 200px;
  display: flex;
  align-items: center;
  margin-top:2px;
  margin-bottom:2px;
  justify-content: space-between;

@media (max-width:830px) {
    flex-direction:column;
}

  > h5 {
    font-size: 25px;
    margin: 0;
    color: #3d85c6;
  }
  
  p {
    color: #5b5f97;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 0;
    text-transform: capitalize;
  }
`;

export const RatingComp = styled(Rating)
`
  && {
    font-size: 22px;
  }
`;

export const ExploreShopBtn = styled(Button)
`
  && {
    margin: 5px auto;
    color: #fff;
    margin-bottom: 5px;
    text-transform: capitalize;
    width: 90%;
    font-size: 15px;
    background-color: #3d85c6;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &&:hover {
    background-color: #3d85c6;
  }
`;