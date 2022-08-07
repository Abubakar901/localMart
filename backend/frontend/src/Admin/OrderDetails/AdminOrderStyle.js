import styled from "styled-components";
import { Link } from "react-router-dom";

export const NoOrderFound = styled.div `
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #5b5f97;
  }
`;

export const MainContainer = styled.div `
  width:80%;
  height: auto;
  margin: 40px auto;
  justify-content: center;
  padding:20px;
  background-color: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width:1210px) {
    width:90%;
  }

  @media (max-width:1150px) {
    width:100%;
  }

  @media (max-width: 550px) {
    margin: 20px auto 0;
  }
`;

export const TopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  h4 {
    font-size: 40px;
    color: #5b5f97;

    @media (max-width: 790px) {
      font-size: 35px;
    }
  }
`;

export const BottomContainer = styled.div `
  width: 100%;
`;

export const UpperContainer = styled.div `
  display: flex;
  width: 100%;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div `
  width: 100%;
  text-align: center;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 630px) {
    padding: 0;
    padding-bottom: ${(props) => props.bottomspace};
    padding-top: ${(props) => props.topspace};
  }

  h6 {
    font-size: 22px;

    @media (max-width: 1045px) {
      font-size: 20px;
    }

    @media (max-width: 445px) {
      font-size: 18px;
    }
  }
`;

export const SideContainer = styled.div `
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 805px) {
    flex-direction: column;
  }

  h5 {
    font-size: 22px;
    @media (max-width: 1045px) {
      font-size: 20px;
    }
    @media (max-width: 445px) {
      font-size: 18px;
    }
  }
`;

export const ProductContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const ProductBottomContainer = styled(Link)
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

export const ProductDetails = styled.div `
  > h6 {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;