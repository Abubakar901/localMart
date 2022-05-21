import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';

export const ReviewInnerContainer = styled.div`
    width:auto;
    padding:20px 30px;
    border-radius: 20px;
    background-color:#eeeeee;
    text-align: center;
    margin-left:15px;
    margin-right: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ReviewMidContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DeleteBtn = styled(DeleteIcon)`
    margin-right:10px;

    :hover {
        color: #ff0000;    
    }
`;


export const UserContainer = styled.div`
    margin-right:30px;
    display: flex;
    width:auto;
    align-items: center;

    > img {
        height: 50px;
        width:50px;
        border-radius: 50%;
    }

    > h6 {
        font-size: 25px;
        margin-left:10px;
    }
`;