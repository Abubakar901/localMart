import styled from "styled-components";

export const ProductMainContainer = styled.div `
    width:95%;
    min-height: 500px;
    max-height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    align-items: ${
    props => props.vertical || 'center'};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 320px) {
        width:98%;
    }

`;

export const ProductTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    width: 90%;
    margin-top:30px;
    margin-bottom: 0;
    margin-right: auto;
    margin-left: auto;
    font-weight: 700;
    
    @media (max-width: 700px) {
        flex-direction: column;
    }
    
    h4 {
        font-size: 50px;
        color: #5b5f97;
    }
`;


export const FormContainer = styled.form `
    display: flex;
    padding:10px;
    padding: 10px;
    
    > input {
         width:350px;
        outline: none;
        border: 2px solid #5b5f97;
        border-radius: 10px;
        padding: 5px 20px;
        color: #5b5f97;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

        @media (max-width: 320px) {
            width:300px;
        }
         ::placeholder {
             color: #5b5f97;
        }
     }
`;

export const MixContainer = styled.div `
    display: flex;
    width:100%;
`;

export const RightContainer = styled.div `
    min-width: 80%;
`;

export const ProductCardsContainer = styled.div `
    width:100%;
    margin-top:30px;
    justify-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    @media (max-width:895px) {
        width:100%;;
    }
`;



export const SideBarContainer = styled.div `
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

export const InnerContainer = styled.div `
    > p {
        font-size: 20px;
        font-weight: 600;
        margin-left:10px;
        margin-top:10px;
        text-transform: capitalize;
    }
`;
