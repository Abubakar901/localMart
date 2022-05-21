import styled from "styled-components";

export const MainContainer = styled.div`
    width:90%;
    min-height: 500px;
    max-height:auto;
    background-color: ${props => props.bg || '#cfe2f3'};
    margin: 40px auto;
    justify-content: ${props => props.equally || 'center'};
    align-items: ${props => props.vertical || 'center'};
    border-radius: 20px;
    display: flex;
    flex-direction:  ${props => props.horizontal || 'column'};
    padding-top: 0px;
    padding-left: 0px;
    padding-right:0;
    padding-bottom:${props => props.innerspace || '20px'};
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    > h4 { 
        color: #6a329f;
        font-size: 40px;
    }
`;