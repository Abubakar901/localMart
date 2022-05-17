import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";
import Carousel from "react-material-ui-carousel";

export const UpperContainer = styled.div`
    display: flex;
    width:100%;
    padding:30px;
    min-height: 500px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width:850px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > h4 {
        font-size: 40px;
        margin-top:20px;
        margin-bottom: 20px;
        color :#5b5f97 ;
    }
`;

export const ShopImageCarousel = styled(Carousel)`
    height: 400px;
    width: 400px;
`;


export const ImageContainer = styled.div`
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    min-height: 500px;

    @media (max-width:850px){
        width:100%;
    }
`;

export const ImageShop = styled.img`
    height:400px;
    width:400px;
    background-size: cover;
`;

export const DetailsContainer = styled.div`
    width:50%;
    padding-left:40px;
    padding-top:30px;

    @media (max-width:850px){
        width:100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

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

    @media (max-width:850px){
        width:100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

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
        margin-top:10px;
        margin-right:10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#df9704;
    }
`;

export const InputBox = styled.input`

`;

export const ReviewOuterContaner = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    padding:20px 20px;
    flex-wrap: nowrap;
`;

export const NoReviewContainer = styled.div`
    width:100%;
    display:flex;
    height:400px;
    justify-content: center;
    align-items: center;
`;