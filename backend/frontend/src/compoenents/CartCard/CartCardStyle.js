import styled from "styled-components"


export const OneContainer = styled.div`
    margin-left:10px;
    display: flex;
    flex-direction:column;
    width:15%;

    @media (max-width: 1141px) {   
        margin-left:5px;
    }

    @media (max-width: 698px) {   
            width:100%;
            align-items: center;
            justify-content: space-around;
            flex-direction: row;
    }
    > h4 {
        font-size: 30px;
        @media (max-width: 830px) {   
            font-size: 25px;
        }
    }

    > h5 {
        font-size: 25px; 
        @media (max-width: 830px) {   
            font-size: 20px;
        }
    }   
`;

