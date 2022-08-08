import styled from "styled-components";

export const ShopMainContainer = styled.div `
  width: 100%;
  min-height: 500px;
  background-color: #cfe2f3;
  max-height: auto;
  display: flex;
`;

export const ShopLeftContainer = styled.div `
  border-right: 2px solid #000;
  width: 15%;
  background-color: #ffd966;
  height:auto;
  padding: 30px;

  @media (max-width: 1360px) {
    width: 17%;
  }

  @media (max-width: 1200px) {
    width: 20%;
  }

  @media (max-width: 1000px) {
    width: 22%;
  }
  @media (max-width: 910px) {
    width: 25%;
  }

  @media (max-width: 720px) {
    position: fixed;
    z-index: 1;
    height: 100%;
    padding-top: 60px;
    width: ${(props) => props.show || "50px"};
    box-shadow: 6px 3px 8px 4px rgba(0, 0, 0, 0.75);
    animation-name: ${(props) => props.animation};
    background-color: #ffd966;
    animation-duration: 2s;
    @keyframes animateOut {
      0% {
        width: 50px;
      }
      100% {
        width: 220px;
      }
    }

    @keyframes animateIn {
      0% {
        width: 220px;
      }
      100% {
        width: 50px;
      }
    }
  }
`;

export const ResponsiveBtn = styled.button `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  outline: none;
  border: 0;
  z-index: 2;
  height: 37px;
  width: 45px;
  position: fixed;
  margin-left: 10px;
  margin-top: 10px;
  background-color: #ffd966;
  margin-right: 10px;
  border-radius: 10px;
  padding: 3px 0;
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    display: flex;
  }

  > span {
    height: 3px;
    width: 70%;
    margin: 0 auto;
    background-color: #5b5f97;
    border-radius: 10px;
  }
`;

export const LeftContainerHeading = styled.h3 `
  font-size: 30px;
  color: #5b5f97;

  @media (max-width: 720px) {
    animation-name: ${(props) => props.textAnimation};
    animation-duration: 2s;
    opacity: ${(props) => props.textOpacity};
    display: ${(props) => props.view };

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;

export const FilterLink = styled.div `
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 10px;
  margin-top: 10px;

  @media (max-width: 720px) {
    animation-name: ${(props) => props.textAnimation};
    animation-duration: 2s;
    animation-timing-function: linear;
    opacity: ${(props) => props.textOpacity};
    display: ${(props) => props.view};

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }

  :hover {
    cursor: pointer;
    color: #ff0000;
    text-decoration: underline;
  }
`;

export const ShopRightContainer = styled.div `
  width: 85%;
  margin-left: auto;
  margin-bottom:20px;
  height: auto;

  @media (max-width: 1360px) {
    width: 83%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 78%;
  }
  @media (max-width: 910px) {
    width: 75%;
  }

  @media (max-width: 720px) {
    width: 95%;
  }

  @media (max-width: 620px) {
    width: 90%;
  }

  @media (max-width: 600px) {
    width: 92%;
  }

  @media (max-width: 435px) {
    width: 85%;
  }
`;

export const ShopTopContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  font-weight: 700;
  padding: 0 40px;

  @media (max-width: 1253px) {
    padding: 0;
    justify-content: space-around;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 435px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  h4 {
    font-size: 40px;
    color: #5b5f97;
    margin-left: 20px;

    @media (max-width: 745px) {
      font-size: 35px;
    }
  }
`;

export const SearchSideContainer = styled.div `
  display: flex;
  padding: 10px;
  margin-right: 20px;

  @media (max-width: 435px) {
    width: 100%;
  }

  > input {
    width: 350px;
    outline: none;
    border: 2px solid #5b5f97;
    border-radius: 10px;
    padding: 5px 20px;
    color: #5b5f97;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1035px) {
      width: 300px;
    }

    @media (max-width: 870px) {
      width: 250px;
    }

    @media (max-width: 600px) {
      width: 300px;
    }

    @media (max-width: 435px) {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    @media (max-width: 350px) {
      margin-right: 0;
    }

    ::placeholder {
      color: #5b5f97;
    }
  }
`;

export const ShopCardsContainer = styled.div `
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

export const NoShopFoundContainer = styled.div `
  width:100%;
  height:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

  h1 {
    font-size:30px;
    margin:10px;
    color:#5b5f97;
    font-weight:700;

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