import styled from 'styled-components';


export const MainContainer = styled.div`
    width:300px;
    height: auto;
    background-color: #fff;
    margin: 40px auto;
    justify-content:center;
    align-items: center;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;


export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    font-weight: 700;

    h4 {
        font-size: 30px;
        color: #5b5f97;
    }
`;


export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: ${props => props.outerspace || '10px'};
    height: auto;

    h4 {
        font-size: 40px;
        color: #5b5f97;
    }
`;