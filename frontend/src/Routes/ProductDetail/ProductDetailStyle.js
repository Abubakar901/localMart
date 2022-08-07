import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";
import Rating from "@mui/material/Rating";

export const ProductDescriptionMainContainer = styled.div `
  width: 80%;
  min-height: 500px;
  max-height: auto;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width:470px) {
    width:100%;
  }
`;

export const UpperContainer = styled.div `
  display: flex;
  width: 100%;
  padding: 30px;
  height: auto;

  @media (max-width:1050px) {
  flex-direction: column;
  }

  @media (max-width:1050px) {
   padding-top:0;
  }
`;

export const ImageContainer = styled.div `
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 400px;

  @media (max-width: 1330px) {
    width: 50%;
  }

  @media (max-width: 1250px) {
    width: 45%;
  }
  
  @media (max-width:1165px) {
    width:50%;
  }

  @media (max-width:1050px) {
    width:100%;
    margin-bottom:20px;
    height: 300px;
  }

  @media (max-width:700px) {
    margin-bottom:10px;
  }

  @media (max-width:580px) {
    
    height: 200px; 
    }

`;

export const ProductImageCarousel = styled(Carousel)
`
  height: 300px;
  width: 300px;

  @media (max-width:580px) {
    
  height: 200px; 
  }
`;

export const CarouselImage = styled.img `
  width: 100%;
  height: 300px;

  @media (max-width:580px) {
    
    height: 200px; 
    }
`;

export const DetailContainer = styled.div `
  width: 60%;
  padding-left: 40px;
  
  @media (max-width: 1330px) {
    width: 50%;
  }

  @media (max-width: 120px) {
    width: 55%;
  }

  @media (max-width:1165px) {
    width:50%;
  }

  @media (max-width:1050px) {
    width:100%;
    display:flex;
    padding-left: 0;
    flex-direction:column;
    align-items:Center;
  }


  > h4 {
    font-size: 40px;
    text-transform:capitalize;
  }

  > h5 {
    font-size: 25px;
    margin-bottom: 10;
  }
`;

export const BreakLine = styled.hr `
  width: 90%;
  
  @media (max-width:1050px) {
  width: 70%;
  }

@media (max-width:820px) {
    width:90%;
}  

`;

export const RatingIcon = styled(Rating)
`
  font-size: 50px;
`;

export const ProductDescripionBtn = styled(Button)
`
  && {
    color: white;
    padding: 5px 20px;
    background-color: #df9704;
    font-size:15px;
    width:150px;
    text-transform:capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width:680px) {
    && {
      width:80%;
    }
  }


  @media (max-width:550px) {
    && {
      width:100%;
    }
  }

  &&:hover {
    background-color: #df9704;
  }
`;

export const VerticalContainer = styled.div `
  min-height: 100px;
  @media (max-width:1050px) {
    text-align:center;
  }
  > p {
    font-size: 18px;
    margin-bottom: 0;
    font-weight:500;
  }
`;

export const ProductShopDetails = styled(Link)
`
  text-decoration: none;
  @media (max-width:1050px) {
    text-align:center;
  }
  > h4 {
    font-size: 30px;
    color: green;
    text-transform:capitalize;
  }

  > h6 {
    color: green;
    font-size: 18px;
    text-transform:capitalize;
  }
`;

export const LowerContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  flex-wrap: nowrap;
  padding: 7px 10px;
  overflow: hidden;
  text-align: center;
  overflow-x: auto;

  > h4 {
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #5b5f97;
  }
`;

export const ReviewOuterContaner = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 20px;
  flex-wrap: nowrap;
`;

export const NoReviewContainer = styled.div `
  width: 100%;
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
`;

export const ReviewSingleContainer = styled.div `
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

export const InputBox = styled.textarea `
  border-radius: 7px;
  width: 250px;
  padding: 10px;
  height: 150px;
`;

export const ReviewBtn = styled(Button)
`
  && {
    color: white;
    margin-left: 0px;
    padding: 3px 20px;
    width: 30%;
    background-color: #df9704;
    height: 38px;
    margin-right: 10px;
    margin-top: 10px;
    background-color: ${(props) => props.bcolor || "#48b618"};
    margin-bottom: 10px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  &&:hover {
    background-color: ${(props) => props.bcolor || "#48b618"};
  }
`;


export const NoProductFoundContainer = styled.div `
  width:100%;
  height:468px;
  display:flex;
  padding:30px;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  h1 {
    font-size:30px;
    color:#5b5f97;
    font-weight:700;
    text-align:center;

    @media (max-width:575px) {
      font-size:25px;
    }

    @media (max-width:425px){
      font-size:20px;
    }

    @media (max-width:325px) {
      font-size:18px;
    }
  }
`;