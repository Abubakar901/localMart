import styled from "styled-components";

export const ShopFilterMenu = styled.div`
    height: 60px;
    width:100%;
    border-bottom: 2px solid #5b5f97;
    margin-bottom: 10px;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #93c47d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FilterLink = styled.div`
    font-size: 24px;
    color:  ${props => props.fontColor || '#fff' };
    font-weight: 500;
    text-decoration: ${props => props.underline || 'initial' };
    letter-spacing: 1px;

    :hover {
        
        color: #fc6e6e;
        cursor: pointer;
    }
`;
