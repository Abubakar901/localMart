import styled from "styled-components";

export const FilterContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
`;

export const FilterCity = styled.div`   
    width:100%;
    height:50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-x: hidden;
    border-top-left-radius:  ${props => props.topRound || '0px'};
    border-top-right-radius: ${props => props.topRound || '0px'};
    border-bottom-left-radius:  ${props => props.bottomRound || '0px'};
    border-bottom-right-radius: ${props => props.bottomRound || '0px'} ;
    border-bottom: 2px solid black;;
    background-color: #93c47d;
    justify-content: space-around;
`;

export const FilterLink = styled.div`
    margin-top:10px;
    margin-bottom: 10px;
    margin-left:35px;
    margin-right: 30px;
    font-weight: 500;
    border

    :hover {
        cursor: pointer;
    }
`;

export const RightContainer = styled.div`
    min-width: 80%;
`;

