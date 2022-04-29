import styled from 'styled-components';
import { StyledLink } from '../../GlobalStyle';

export const AdminInnerContainer = styled.div`
    width:80%;
    height: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #f6b26b;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


export const AmountContainer = styled.div`
    background-color:#93c47d ;
    margin-top:30px;
    padding:10px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > p {
        padding:0;
        margin:0; 
        font-size: 25px;
        font-weight: 600;
    }
`;

export const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
`;

export const CircleLinked = styled(StyledLink)`
    margin:30px;
    background-color: #6fa8dc;
    color:#fff;
    width:150px;
    height:150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius:  50%;
    padding-top:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    >h6 {
        font-size: 25px;
    }

    p {
        font-size: 22px;
        font-weight: 600;
    }
`;