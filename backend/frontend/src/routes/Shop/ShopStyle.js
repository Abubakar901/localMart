import styled from "styled-components";


export const ShopMainContainer = styled.div `
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


export const ShopTopContainer = styled.div `
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

    @media (max-width: 386px) {
        width:100%;
        padding:0;
    }
    

    h4 {
        font-size: 50px;
        color: #5b5f97;
    }
`;

export const FormContainer = styled.form `
    display: flex;
    padding:10px;
    
    @media (max-width: 386px) {
        width:100%;
        padding:0;
    }
    
    > input {
         width:350px;
        outline: none;
        border: 2px solid #5b5f97;
        border-radius: 10px;
        padding: 5px 20px;
        color: #5b5f97;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        @media (max-width: 386px) {
            width: 90%;
            margin: 0 auto;
        }

         ::placeholder {
             color: #5b5f97;
        }
     }
`;


export const ShopBothContainer = styled.div `
    width:100%;
    margin: 5px auto;
    justify-content: center;
    display: flex;


    @media (max-width:895px) {
        flex-direction: column;
    }
`;


export const ShopCardsContainer = styled.div `
    width:80%;
    justify-content: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;

    @media (max-width:895px) {
        width:100%;;
    }
`;


export const ShopFilterMenu = styled.div `
    width:20%;
    max-height: 370px;
    min-height: auto;
    padding-left:20px;
    padding-top: 20px;
    text-align: left;
    margin-top:20px;
    position: none;
    border-bottom-right-radius: 17px;
    border-top-right-radius: 17px;
    background-color: #93c47d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (max-width: 1125px) {
        width: 30%;
    }

    @media (max-width: 895px) {
        display:${
    props => props.show
};
        margin-top:100px;
        width:auto;
        position:absolute;
        top:200px;
        left:24px;
        height:auto;
        z-index:1;
        flex-direction: column;
    }   

`;

export const FilterLink = styled.div `
    font-size: 24px;
    color:  ${
    props => props.fontColor || '#fff'
};
    font-weight: 500;
    text-align: left;
    margin-bottom: 20px;
    min-width:200px;
    text-decoration: ${
    props => props.underline || 'initial'
};
    letter-spacing: 1px;
    text-transform: capitalize;

    :hover {
        
        color: #fc6e6e;
        cursor: pointer;
    }
`;
