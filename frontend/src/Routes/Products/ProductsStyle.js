import styled from "styled-components";

export const ProductMainContainer = styled.div `
  width: 100%;
  min-height: 500px;
  background-color: #cfe2f3;
  max-height: auto;
  display: flex;
`;

export const ProductLeftContainer = styled.div `
  border-right: 2px solid #000;
  width: 260px;
  height: auto;
  background-color: #ffd966;
  padding: 10px;
  padding-top: 30px;

  @media (max-width: 770px) {
    position: fixed;
    top: 0;
    z-index: 1;
    height: 100%;
    padding-top: 120px;
    width: ${(props) => props.show};
    box-shadow: 6px 3px 8px 4px rgba(0, 0, 0, 0.75);
    background-color: #ffd966;
    animation-name: ${(props) => props.animation};
    animation-duration: 2s;
    @keyframes animateOut {
      0% {
        width: 60px;
      }
      100% {
        width: 250px;
      }
    }

    @keyframes animateIn {
      0% {
        width: 250px;
      }
      100% {
        width: 60px;
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

  @media (max-width: 770px) {
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

export const FilterBox = styled.div `
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 770px) {
    display: ${(props) => props.view};
  }
`;

export const InnerBox = styled.div `
  width: auto;
  text-align: center;
  padding: 5px 20px;
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.true || props.false || "#000"};
  border-right-width: ${(props) => props.rwidth || "0"};
  border-left-width: ${(props) => props.lwidth || "0"};
  border-top-width: 0;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #000;
  text-transform: capitalize;

  @media (max-width: 770px) {
    animation-name: ${(props) => props.textAnimation};
    animation-duration: 2s;
    animation-timing-function: linear;
    opacity: ${(props) => props.textOpacity};

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
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const InnerContainer = styled.div `
  @media (max-width: 770px) {
    display: ${(props) => props.view};
  }
`;

export const FilterLink = styled.div `
  font-size: 22px;
  font-weight: 600;
  text-transform: capitalize;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 30px;

  @media (max-width: 770px) {
    animation-duration: 2s;
    animation-name: ${(props) => props.textAnimation};
    animation-timing-function: linear;
    opacity: ${(props) => props.textOpacity};

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

export const ProductRightContainer = styled.div `
  width: 82%;
  margin-left: auto;
  margin-bottom:20px;
  height: auto;

  @media (max-width: 1410px) {
    width: 78%;
  }

  @media (max-width: 1150px) {
    width: 75%;
  }

  @media (max-width: 1000px) {
    width: 72%;
  }

  @media (max-width: 930px) {
    width: 68%;
  }

  @media (max-width: 770px) {
    width: 95%;
  }

  @media (max-width: 340px) {
    width: 85%;
  }
`;

export const ProductTopContainer = styled.div `
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

  @media (max-width: 830px) {
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

    @media (max-width: 960px) {
      margin-left: 0;
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

export const ProductCardsContainer = styled.div `
  width: 100%;
  align-items: center;
  margin-bottom:20px;
  margin-top: 20px;
  justify-content: center;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
`;

export const NoProductFoundContainer = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 30px;
    margin: 10px;
    color: #5b5f97;
    font-weight: 700;

    @media (max-width: 575px) {
      font-size: 25px;
    }

    @media (max-width: 425px) {
      font-size: 20px;
    }

    @media (max-width: 325px) {
      font-size: 18px;
    }
  }
`;