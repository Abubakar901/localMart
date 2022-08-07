import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminboardMainContainer = styled.div `
  width: 100%;
  display: flex;
  min-height: 500px;
  margin: 0;
  max-height: auto;
`;

export const TopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  font-weight: 700;

  @media (max-width: 470px) {
    padding-left: 30px;
    width: auto;
  }

  @media (max-width: 470px) {
    padding-left: 50px;
  }

  h2 {
    font-size: 40px;
    margin: 0;

    @media (max-width: 890px) {
      font-size: 35px;
    }

    @media (max-width: 620px) {
      font-size: 30px;
    }

    @media (max-width: 470px) {
      font-size: 25px;
    }
  }
`;

export const AdminInnerContainer = styled.div `
  width: 100%;
  padding-top: 40px;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const AmountContainer = styled.div `
  background-color: #93c47d;
  margin-top: 30px;
  padding: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 890px) {
    padding: 5px 0;
  }

  @media (max-width: 620px) {
    margin-top: 10px;
  }
  > p {
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: 600;

    @media (max-width: 890px) {
      font-size: 20px;
    }
    @media (max-width: 470px) {
      padding-left: 30px;
      width: auto;
    }

    @media (max-width: 470px) {
      padding-left: 50px;
    }
  }
`;

export const CircleContainer = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 20px;

  @media (max-width: 925px) {
    margin-left: 20px;
  }

  @media (max-width: 855px) {
    margin-left: 40px;
  }

  @media (max-width: 745px) {
    flex-direction: column;
    margin-top: 10px;
    padding: 0;
  }
`;

export const CircleMidContainer = styled.div `
  display: flex;
  width: 33%;
  justify-content: space-between;

  @media (max-width: 1435px) {
    width: 35%;
  }

  @media (max-width: 1305px) {
    width: 37%;
  }

  @media (max-width: 1150px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    width: 42%;
  }

  @media (max-width: 925px) {
    margin-left: 40px;
  }

  @media (max-width: 745px) {
    width: 80%;
    margin: 10px auto;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    margin-left:40px;
    margin-bottom:0;
  }
`;

export const CircleLinked = styled(Link)
`
  text-decoration: none;
  margin: 0;
  background-color: #e69138;
  color: #fff;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 530px) {
    padding-top: 10px;
    width: 100px;
    height: 100px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin-bottom: 10px;
    height: 80px;
  }

  @media (max-width:375px) {
  flex-direction: row;
  justify-content: space-around;
    height: 40px;
  }

  > h6 {
    font-size: 22px;

    @media (max-width: 530px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 22px;
    font-weight: 600;

    @media (max-width: 530px) {
      font-size: 18px;
    }
  }

  :hover {
    color: #fff;
  }
`;

export const BarGraphContainer = styled.div `
  width: 80%;
  margin: 40px auto;
  background-color: #fff;

  @media (max-width: 925px) {
    margin-left: 110px;
    border: 2px solid red;
  }

  @media (max-width: 800px) {
    margin-top: 20px;
  }

  @media (max-width: 745px) {
    margin-left:100px;
  }

  @media (max-width: 720px) {
    margin-left:90px;
  }
  @media (max-width: 590px) {
    margin-left:80px;
  }

  @media (max-width:470px) {
    margin-left:70px;
  }

  @media (max-width:415px) {
    margin-left:70px;
  }

  
  @media (max-width:380px) {
    width:70%;
    margin-left:80px;
    margin-top:10px;
  }

`;