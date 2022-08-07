import styled from "styled-components";

export const FooterContainer = styled.footer `
  background-color: #5b5f97;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 auto;
  height: 230px;

  @media (max-width: 665px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterLeft = styled.div `
  width: 15%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 855px) {
    width: 18%;
  }

  @media (max-width: 665px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
  }

  > h6 {
    color: #b8b8d1;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;

    @media (max-width: 725px) {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const FooterMain = styled.div `
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1160px) {
    width: 35%;
  }

  @media (max-width: 855px) {
    width: 30%;
  }

  @media (max-width: 785px) {
    width: 35%;
  }
  @media (max-width: 665px) {
    width: 100%;
  }

  > h4 {
    font-size: 50px;
    margin-bottom: 25px;
    color: #b8b8d1;
    letter-spacing: 0.5px;
    font-weight: 700;
    text-decoration: underline;

    @media (max-width: 1000px) {
      font-size: 40px;
    }

    :hover {
      cursor: pointer;
    }
  }

  > p {
    color: #b8b8d1;
    font-size: 20px;
    text-align: center;
    font-weight: 600;

    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
`;

export const FooterMiddle = styled.div `
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1385px) {
    width: 18%;
  }

  @media (max-width: 1160px) {
    width: 20%;
  }
  @media (max-width: 815px) {
    width: 25%;
  }

  @media (max-width: 665px) {
    width: 100%;
  }

  > a {
    font-size: 25px;
    color: #b8b8d1;
    font-weight: 500;
    text-align: center;
    text-decoration: none;

    @media (max-width: 950px) {
      font-size: 22px;
    }

    :hover {
      cursor: pointer;
    }
  }
  > h6 {
    margin: 7px 0;
    font-size: 20px;
    color: #b8b8d1;

    @media (max-width: 950px) {
      font-size: 18px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;

export const FooterRight = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin-right: auto;

  @media (max-width: 1160px) {
    width: 18%;
  }

  @media (max-width: 665px) {
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 665px) {
    width: 100%;
  }
  > h4 {
    font-size: 22px;
    color: #b8b8d1;
    text-decoration: underline;

    :hover {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div `
  display: flex;
  margin: 0;
  flex-direction: column;

  @media (max-width: 665px) {
    flex-direction: row;
    width: 100%;
    justify-content:center;
  }

  > a {
    text-decoration: none;
    color: #b8b8d1;
    padding: 5px;
    font-size: 18px;

    @media (max-width:665px) {
        margin-left:20px;
        margin-right:20px;
  }

    :hover {
      cursor: pointer;
    }
  }
`;