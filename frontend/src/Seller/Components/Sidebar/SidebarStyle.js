import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div `
  width: 18%;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 40px;
  border-right: 2px solid #000;
  background-color: #ffd966;

  @media (max-width: 1285px) {
    width: 22%;
  }

  @media (max-width: 1250px) {
    width: 20%;
  }

  @media (max-width: 985px) {
    width: 21%;
  }

  @media (max-width: 970px) {
    width: 22%;
  }

  @media (max-width: 925px) {
    padding: 0px;
    z-index: 1;
    position: fixed;
    height:100vh;
    box-shadow: 6px 3px 8px 4px rgb(0 0 0 / 75%);
    width: ${(props) => props.show || "8px"};
    animation-name: ${(props) => props.animation};
    animation-duration: 2s;
    @keyframes animateOut {
      0% {
        width: 60px;
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
  width: 40px;
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

  @media (max-width: 925px) {
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

export const Heading = styled.h3 `
  font-size: 40px;
  margin-bottom: 20px;
  text-decoration: underline;

  @media (max-width: 1250px) {
    font-size: 30px;
  }

  @media (max-width: 925px) {
    animation-name: ${(props) => props.textanimation};
    animation-duration: 2s;
    padding-top: 60px;
    padding-left: 30px;
    opacity: ${(props) => props.textopacity};
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
`;

export const SideLink = styled(Link)
`
  text-decoration: none;
  font-size: 25px;
  margin-bottom: 20px;
  color: #000;
  font-weight: 600;

  @media (max-width: 1055px) {
    font-size: 22px;
  }

  @media (max-width: 925px) {
    animation-name: ${(props) => props.textanimation};
    animation-duration: 2s;
    padding-left: 30px;
    opacity: ${(props) => props.textopacity};
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
    color: #ff0000;
  }
`;

export const SideContent = styled.div `
  display:flex;
  flex-direction:column;
  margin-bottom:20px;
  
  
  @media (max-width: 925px) {
    animation-name: ${(props) => props.textanimation};
    animation-duration: 2s;
    padding-left:30px;
    opacity: ${(props) => props.textopacity};
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


   h5 {
    font-size:25px;

    @media (max-width: 1055px) {
    font-size: 22px;
  }

   }
`;

export const InnerLink = styled(Link)
`
  text-decoration: none;
  padding-left:20px;
  font-size: 20px;
  margin-bottom: 5px;
  color: #000;
  font-weight: 600;

  @media (max-width: 1055px) {
    font-size: 18px;
  }


  @media (max-width: 925px) {
    animation-name: ${(props) => props.textanimation};
    animation-duration: 2s;
    padding-left: 30px;
    opacity: ${(props) => props.textopacity};
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
    color: #ff0000;
  }
`;