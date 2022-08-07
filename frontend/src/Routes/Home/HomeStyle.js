import styled from "styled-components";
import Button from "@mui/material/Button";

export const HomeContainer = styled.div `
  margin: 40px auto 40px;
  width: 90%;

  @media (max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`;

export const HomeMain = styled.div `
  height: 400px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  background-color: #fff;
  justify-content: center;
  margin-bottom: 40px;
  align-items: center;

  @media (max-width: 1315px) {
    height: 350px;
  }

  @media (max-width: 990px) {
    text-align: center;
    padding-bottom: 20px;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    &:before {
      content: "";
      position: absolute;
      background: url("./assests/grocery-shopping.jpg");
      top: 100px;
      height: 350px;
      background-size: 100% 350px;
      background-repeat: no-repeat;
      left: 5%;
      width: 90%;
      z-index: -1;
      opacity: 0.6;

      @media (max-width: 700px) {
        width: 100%;
        top: 60px;
      }
    }

    @media (max-width: 700px) {
      margin-bottom: 20px;

      &:before {
      left:0;
        width: 100%;
      opacity: 0.5;
        top: 60px;
      }
    }


    @media (max-width:480px) {
      height:300px;
      
      &:before {
      height:300px;
      }
    }

    @media (max-width:450px) {
      height:350px;
      &:before {
      height:350px;
      }
    }
  }
`;

export const HomeLeft = styled.div `
  width: 35%;
  display: flex;
  padding-top: 40px;
  padding-left: 20px;
  margin-left: 50px;
  padding-right: 40px;
  flex-direction: column;
  height: 100%;

  @media (max-width: 1515px) {
    width: 38%;
  }

  @media (max-width: 1230px) {
    padding-top: 30px;
  }

  @media (max-width: 1215px) {
    margin-left: 40px;
    width: 30%;
  }
  @media (max-width: 1200px) {
    margin-left: 0;
    padding-top: 20px;
    width: 35%;
    padding-left: 40px;
  }

  @media (max-width: 1120px) {
    width: 40%;
  }

  @media (max-width: 990px) {
    text-align: center;
    width: 50%;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 925px) {
    width: 60%;
  }
  @media (max-width: 850px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }


  @media (max-width: 400px) {
    width: 100%;
  }

  h3 {
    color: #5b5f97;
    font-size: 38px;

    @media (max-width: 1515px) {
      font-size: 35px;
    }
    @media (max-width: 1315px) {
      font-size: 32px;
    }
    @media (max-width: 1200px) {
      font-size: 30px;
    }
    @media (max-width: 990px) {
      color: #000;
      font-weight: 700;
    }

    @media (max-width:585px) {
      font-size:28px;
    }

    @media (max-width:470px) {
      font-size:25px;
    }

  }
`;

export const HomeImage = styled.img `
  width: 50%;
  height: 90%;
  margin: auto;

  @media (max-width: 1215px) {
    width: 60%;
  }

  @media (max-width: 1120px) {
    width: 50%;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const HomeButton = styled(Button)
`
  && {
    color: white;
    text-transform: capitalize;
    font-size: 18px;
    width: 200px;
    margin-top: 15px;
    padding: 5px 20px;
    background-color: #5b5f97;
    border-radius: 7px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 1230px) {
    && {
      padding: 5px 10px;
      width: 175px;
      font-size: 16px;
    }
  }

  @media (max-width: 1120px) {
    && {
      padding: 3px 10px;
      width: 160px;
      font-size: 15px;
    }
  }

  @media (max-width: 700px) {
    && {
      padding: 5px 20px;
      width: auto;
    }
  }

  &&:hover {
    background-color: #5b5f97;
  }
`;

export const HomeMixedContainer = styled.div `
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-bottom: 10px;
  background-color: #fff;
  margin: 0 auto 40px;
  
  @media (max-width: 700px) {
      margin-bottom: 20px;
  }
`;

export const HomeTopContainer = styled.div `
  width: 90%;
  margin: 0 auto;
  padding-left: 20px;
  padding-top:20px;

  @media (max-width: 1120px) {
    margin-left: 20px;
  }

  > h4 {
    font-size: 40px;
    color: #5b5f97;

    @media (max-width: 1255px) {
      font-size: 35px;
    }

    @media (max-width: 1120px) {
      font-size: 32px;
    }
  }
`;

export const HomeShop = styled.div `
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

export const HomeProduct = styled.div `
  width: 100%;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;