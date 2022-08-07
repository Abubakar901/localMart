import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';

export const ReviewInnerContainer = styled.div `
    width:auto;
    padding:20px 30px;
    border-radius: 20px;
    background-color:#fff;
    text-align: center;
    margin:0 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > p {
        width:250px;
    }
`;

export const ReviewMidContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DeleteBtn = styled(DeleteIcon)
`
    margin-right:10px;

    :hover {
        color: #ff0000;    
    }
`;

export const RatingComp = styled(Rating)
`
    && {    
        font-size: 30px;
    }
`;


export const UserContainer = styled.div `
    margin-right:30px;
    display: flex;
    width:auto;
    align-items: center;

    > img {
        height: 50px;
        width:50px;
        border-radius: 50%;
        margin-right:10px;
    }

    > h6 {
        font-size: 25px;
        margin-left:10px;
        text-transform:capitalize;
    }
`;