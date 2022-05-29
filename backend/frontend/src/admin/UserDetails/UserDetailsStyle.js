import styled from "styled-components";


export const MainContainer = styled.div`
    width:40%;
    height:auto;
    background-color:#cfe2f3;
    margin: 40px auto;
    justify-content:center;
    align-items:center;
    padding-bottom:20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
    }
`;


export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left:30px;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: auto;
    text-align:left;

    h6 {
        margin-top:20px;
        font-size: 25px;
        width:100%;
        text-transform : capitalize;
    }
`;
