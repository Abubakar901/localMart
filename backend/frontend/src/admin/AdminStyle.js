import styled from "styled-components";

export const MainContainer = styled.div`
    width:90%;
    min-height: 500px;
    max-height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    align-items: center;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width:975px) {
        width:100%;
        border-radius:0;
    }
`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0;
    font-weight: 700;

    h2 {
        font-size: 40px;
        margin-top:20px;
        color: #5b5f97;

        @media(max-width:815px) {
            font-size:35px;
        }

        @media(max-width:440px) {
            font-size:30px;
        }
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom:10px;
    height: auto;
`;

export const AdminMainContainer = styled.div`
    width:80%;
    max-height: auto;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #f6b26b;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media(max-width: 700px) {
        width:100%;
        padding-left:20px;
    }
    @media(max-width:565px){
        overflow:auto;
      }
    
`;