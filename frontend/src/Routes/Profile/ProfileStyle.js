import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainContainer = styled.div `
  width: 60%;
  height: auto;
  margin: 40px auto;
  display: flex;
  padding:20px;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 1345px) {
    width: 70%;
  }

  @media (max-width: 1300px) {
    width: 80%;
  }

  @media (max-width: 1165px) {
    width: 90%;
    margin:20px auto:
  }
`;

export const ProfileTopContainer = styled.div `
  display: flex;
  align-items: center;
  padding-top: 20px;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  h4 {
    font-size: 40px;
    color: #5b5f97;

    @media (max-width: 530px) {
      font-size: 35px;
    }
  }
`;

export const ProfileMidContainer = styled.div `
  display: flex;
  width: 100%;

  @media (max-width: 845px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileBottomContainer = styled.div `
  width: 100%;
  display: flex;

  height: auto;
  @media (max-width: 845px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContainer = styled.div `
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 845px) {
    width: 100%;
  }

  > img {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 250px;
    height: 250px;
    border-radius: 50%;

    @media (max-width: 530px) {
      margin-top: 10px;
      margin-bottom: 10px;
    }

    @media (max-width: 435px) {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;

export const RightContainer = styled.div `
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
  height: auto;

  @media (max-width: 935px) {
    width: 60%;
  }

  @media (max-width: 845px) {
    width: 100%;
  }
  @media (max-width: 530px) {
    padding: 10px;
  }
  
  @media (max-width:365px) {
    padding:20px;
    text-align:center;
  }

  h3 {
    font-size: 25px;
    margin-top: 20px;

    @media (max-width: 665px) {
      font-size: 22px;
    }

    @media (max-width: 665px) {
      margin-top: 10px;
    }
    @media (max-width: 435px) {
      font-size: 20px;
    }
  }

  h4 {
    font-size: 25px;
    margin-top: 20px;
    @media (max-width: 665px) {
      font-size: 22px;
    }
    @media (max-width: 665px) {
      margin-top: 10px;
    }
    @media (max-width: 435px) {
      font-size: 20px;
    }
  }

  h5 {
    font-size: 25px;
    margin-top: 20px;
    @media (max-width: 665px) {
      font-size: 22px;
    }
    @media (max-width: 665px) {
      margin-top: 10px;
    }
    @media (max-width: 435px) {
      font-size: 20px;
    }
  }

  h6 {
    font-size: 22px;
    margin-top: 20px;
    @media (max-width: 665px) {
      font-size: 20px;
    }
    @media (max-width: 665px) {
      margin-top: 10px;
    }
    @media (max-width: 435px) {
      font-size: 18px;
    }
  }
`;

export const ProfileBtn = styled(Button)
` 
    && {
        margin-top:20px;
        color: white;
        padding:2px auto;
        width:50%;
        background-color: #5b5f97;
        text-transform: capitalize;
        height: 38px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        @media (max-width: 845px) {
             && {
                width: 250px;
             }
        }

        @media (max-width: 665px) {
            && {
                margin-top: 10px;
            }
        }

    &&:hover {
        background-color:#5b5f97;
    }
`;