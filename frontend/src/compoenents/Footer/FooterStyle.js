import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #5b5f97;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height:250px;
`;

export const FooterLeft = styled.div`
    width: 18%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h6 {
        color: #b8b8d1;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 5px;
    }

    > p {
        color: #b8b8d1;
        font-size: 20px;
        margin-bottom: 0;
    }

    > img {
        height: 120px;
        width: 250px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const FooterMain = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h3 {
        font-size: 60px;
        margin-bottom: 15px;
        color: #b8b8d1;
        letter-spacing: 0.5px;
        font-weight: 700;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }

    > p {
        color: #b8b8d1;
       font-size: 18px;
    }
`;

export const FooterMiddle = styled.div`
    width: 18% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > h6 {
        font-size: 22px;
        color: #b8b8d1;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }
    > p {
        margin: 7px 0;
        font-size: 20px;
        color: #b8b8d1;

        :hover {
            cursor: pointer;
        }
    }
`;

export const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18%;
    margin-right: 30px;

    > h4 {
        font-size: 25px;
        color: #b8b8d1;
        text-decoration: underline;

        :hover {
            cursor: pointer;
        }
    }

    > a {
        text-decoration: none;
        color: #b8b8d1;
        padding:10px 0;
        font-size: 18px;

        :hover {
            cursor: pointer;
        }
    }
`;