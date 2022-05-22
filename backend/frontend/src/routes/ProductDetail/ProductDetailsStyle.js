import styled from "styled-components";
import { StyledLink, CommonBtn } from "../../GlobalStyle";
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
`;

export const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 400px;
    flex-wrap: nowrap;
    padding:7px 30px;
    overflow: hidden;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: #fff;
    overflow-x: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > h4 {
        font-size: 40px;
        margin-top:20px;
        margin-bottom: 20px;
        color :#5b5f97 ;
    }
`;

export const ImageContainer = styled.div`
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:20px;
    min-height: 500px;
`;

export const ProductImageCarousel = styled(Carousel)`
    height: 400px;
    width: 400px;
`;

export const ImageProduct = styled.img`
    height:400px;
    width:400px;
    background-size: cover;
`;

export const DetailsContainer = styled.div`
    width:50%;
    padding-left:40px;

    > h4 {
        font-size: 45px;
    }

    > h5 {
        font-size: 30px;
        margin-bottom: 10;
    }
`;

export const SingleContainer = styled.div`
    display: flex;
    align-items: center;

    > span {
        margin-left:10px;
    }
`;

export const VerticalContainer = styled.div`
    min-height: 100px;
    
    > p {
        font-size: 18px;
        margin-bottom: 0;
    }
`;

export const ProductShopDetails = styled(StyledLink)`
    > h4 {
        font-size: 30px;
        color:green;
    }

    > h6 {
        color: green;
        font-size: 18px;
    }
`;

export const BreakLine = styled.hr`
    width: 400px;
`;


export const ReviewSingleContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    width:100%;
`;

export const InputBox = styled.textarea`
    border-radius: 7px;
    width:250px;
    padding: 10px;
    height:150px;
`;

export const ReviewBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left: 0px;
        padding:3px 20px;
        width:30%;
        background-color: #df9704;
        height: 38px;
        margin-right:10px;
        margin-top:10px;
        background-color: ${props => props.bcolor || '#48b618'};
        margin-bottom: 10px;
        text-transform: capitalize;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:${props => props.bcolor || '#48b618'};
    }
`;

export const DetailsPageBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left:0px;
        margin-right:20px;
        padding:3px 20px;
        background-color: #df9704;
        height: 38px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#df9704;
    }
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