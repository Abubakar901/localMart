import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const UpperContainer = styled.div`
    display: flex;
    width:100%;
    padding:30px;
    min-height: 500px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LowerContainer = styled.div`
    display: flex;
    width: 100%;
    height:350px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ImageContainer = styled.div`
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    min-height: 500px;

    > img {
        height:400px;
        width:400px;
    }
`;

export const DetailsContainer = styled.div`
    width:50%;
    padding-left:40px;
    padding-top:30px;

    > h3 {
        font-size: 45px;
    }

    > h4 {
        font-size:25px;
        color: green;
    }

    > h5 {
        font-size: 22px;
        margin-bottom: 15px;
        margin-top:15px;
    }

    > h6 {
        font-size:22px;
        min-height: 100px;
        width:100%;
    }

    > p {
        font-size: 20px;
        margin-bottom: 7px;
    }


`;

export const SingleContainer = styled.div`
    display: flex;
    align-items: center;

    > span {
        margin-left:10px;
    }
`;

export const DetailsPageBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left: 0px;
        padding:3px 20px;
        background-color: #df9704;
        height: 38px;
        margin-top:30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#df9704;
    }
`;