import styled from "styled-components";

export const ProductMainContainer = styled.div `
    width:95%;
    min-height: 500px;
    max-height:auto;
    background-color: #cfe2f3;
    margin: 40px auto;
    align-items: ${
    props => props.vertical || 'center'
};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding-bottom:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 320px) {
        width:98%;
        margin:20px auto;
    }

`;

export const ProductTopContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    font-weight: 700;
    padding:0 60px;

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

    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const ProductCardsContainer = styled.div `
    width:100%;
    margin-top:30px;
    justify-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    
    @media (max-width: 1450px) {
        width:75%;
    }

    @media (max-width: 1200px) {
        width:70%;
    }
    
    @media (max-width: 950px) {
        width:100%;
    }
`;

export const ResponsiveBtn = styled.button `
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    outline: none;
    border:0;
    height: 37px;
    width: 45px;
    margin-left:10px;
    margin-right:10px;
    background-color: #000;
    border-radius: 10px;
    padding:3px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: none;

    @media (max-width: 895px) {
        display: flex;
    }

    > span {
        height:3px;
        width:70%;
        margin:0 auto;
        background-color:#fff;
        border-radius: 10px;
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
    width:25%;
    display: flex;
    flex-direction: column;

    @media (max-width: 1450px) {
        width:25%;
    }

    @media (max-width: 1200px) {
        width:30%;
    }

    @media (max-width: 950px) {
         display:${props => props.show};
        width:35%;    
        height: auto;
        margin-top:100px;
        width:auto;
        padding-bottom:10px;
        position:absolute;
        top:140px;
        left:50px;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius:30px;
        z-index:1;
        flex-direction: column;
    }

    @media (max-width: 700px) {
        top:200px;
        left:30px;
    }

    @media (max-width: 320px) {
        top: 175px;
        left: 37px;
    }

`;

export const InnerContainer = styled.div `
    > p {
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        margin-left:10px;
        margin-top:10px;
        text-transform: capitalize;
    }
`;
