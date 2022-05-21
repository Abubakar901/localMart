import styled from "styled-components";
import {StyledLink} from '../../GlobalStyle';
import DeleteIcon from '@mui/icons-material/Delete';
import { CommonBtn } from "../../GlobalStyle";

export const NoOrderContaiener = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    border:2px solid red;
    font-weight: 500;
    height: 500px;
    width:100%;

    @media (max-width: 500px) {    
        font-size: 25px;
    }
`;

export const ExploreProductsBtn = styled(CommonBtn)`
    && {
        color: white;
        margin-left: 0px;
        font-size: 20px;
        margin-top:5px;
        padding:3px 20px;
        background-color: #5b5f97;
        height: 48px;
        width:300px;
        border-radius: 20px;
        text-transform: capitalize;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 500px) {  
        && {
            padding:3px 15px;
            font-size: 18px;
            width:auto;
        }
    }
    &&:hover {
        background-color:#5b5f97;
    }
`;

export const OrderMainContainer = styled.div `
    width:95%;
    min-height: 500px;
    max-height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    align-items: ${
    props => props.vertical || 'center'
};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 320px) {
        width:98%;
    }
`;


export const OrderTopContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 30px;
    font-weight: 700;
    padding:0 60px;
    
    h4 {
        font-size: 45px;
        color: #5b5f97;
        text-transform: capitalize;
    }
`;

export const OrderBottomContainer = styled.div `
    border:2px solid red;
    width:90%;
    margin:10px auto;
    display: flex;
    flex-direction: column;
`;


export const TableContainer = styled.table `
    width:100%;
th{
    text-align: center;
   margin-bottom: 10px;
   font-size: 28px;
   background-color: #5b5f97;
   color:#fff;
   border-right: 2px solid #fff;
}


tbody {
  background-color: #d9ead3;
}

    td {
        border-bottom: 2px solid #6a329f;
        border-right: 2px solid #6a329f;
        text-align: center;
        margin-bottom: 10px;
        padding:5px 5px;
    }
`;

export const OrderLink = styled(StyledLink)`
    width: 100%;
   font-size: 20px;
   font-weight: 600;
    color:#000;
`;

export const DeleteBtn = styled(DeleteIcon)`
margin-left:10px;

:hover{
  cursor: pointer;
}
`;
