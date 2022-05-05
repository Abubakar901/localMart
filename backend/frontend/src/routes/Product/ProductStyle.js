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
    margin-left:20px;
    margin-right: 25px;
    font-weight: 500;

    :hover {
        cursor: pointer;
    }
`;

export const MixContainer = styled.div`
    display: flex;
`;

export const RightContainer = styled.div`
    min-width: 80%;
`;


export const SideBarContainer = styled.div`
    background: rgb(207,226,243);   
    border-top-right-radius: 30px;
    background: linear-gradient(0deg, rgba(207,226,243,1) 0%, rgba(202,216,240,1) 5%, rgba(144,203,199,1) 36%, rgba(31,207,128,1) 100%);
    height: 100%;
    margin-top:30px;
    padding-bottom:70px;
    padding-left:20px;
    padding-top:20px;
    width:100%;
    display: flex;
    flex-direction: column;
`;

export const InnerContainer = styled.div`
    > p {
        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
    }
`;