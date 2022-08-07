import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)
`
  text-decoration:none;
  color:#000;
  display:flex;
  
  @media (max-width:785px) {
    flex-direction:column;
    width:100%;
  }

  :hover {
    color: #000;
  }
  > img {
    height: 140px;
    width: 140px;
    margin-right: 10px;

    @media (max-width: 785px) {
      width: 65%;
      margin: 0px auto 10px;
    }

    @media (max-width: 630px) {
      width: 75%;
      margin: 0 auto 10px;
    }

    @media (max-width: 500px) {
      width: 80%;
    }

    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

export const OneContainer = styled.div `
  margin-left: 10px;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 785px) {
    margin-left: 0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const CombineContainer = styled.div `
  @media (max-width: 785px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > h4 {
    font-size: 22px;
    text-transform: capitalize;

    @media (max-width: 630px) {
      font-size: 20px;
      text-align: center;
    }
  }
  > h5 {
    font-size: 22px;
    @media (max-width: 630px) {
      font-size: 20px;
    }
  }

  > h6 {
    font-size: 22px;
    text-transform: capitalize;
    @media (max-width: 630px) {
      font-size: 20px;
    }
  }
`;