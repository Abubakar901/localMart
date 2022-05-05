import styled from 'styled-components';

export const ReviewInnerContainer = styled.div`
    width:300px;
    padding:20px 30px;
    border-radius: 20px;
    background-color:#eeeeee;
    text-align: center;
    margin-left:15px;
    margin-right: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    `;


export const UserContainer = styled.div`
    display: flex;
    align-items: center;

    > img {
        height: 50px;
        width:50px;
        border-radius: 50%;
    }

    > h6 {
        font-size: 30px;
        margin-left:20px;
    }
`;