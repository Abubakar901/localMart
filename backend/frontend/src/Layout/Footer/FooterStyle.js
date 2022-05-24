import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #5b5f97;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height:250px;

    @media (max-width:520px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:auto;
    }
`;

export const FooterLeft = styled.div`
    width: 18%;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:1080px) {
        width:20%;
    }

    @media (max-width:965px) {
        width:25%;
        margin-left:0;
    }

    @media (max-width:520px) {
        flex-direction: row;
        width:90%;
        margin:10px auto 10px;
    }

    > h6 {
        color: #b8b8d1;
        text-align: center;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 5px;

        @media (max-width:900px) {
            font-size: 20px;
        }

        @media (max-width:695px) {
            font-size: 17px;
        }
    }

    > p {
        color: #b8b8d1;
        font-size: 20px;
        margin-bottom: 0;
        text-align:center;

        @media (max-width:900px) {
            font-size: 17px;
        }

        @media (max-width:695px) {
            font-size: 15px;
        }

        @media (max-width:320px) {
            font-size: 10px;
        }
    }

    > img {
        height: 120px;
        width: 250px;

        @media (max-width:900px) {
            height: 80px;
            width: 200px;
        }

        @media (max-width:695px) {
            height: 80px;
            width: 150px;
        }
        
        :hover {
            cursor: pointer;
        }
    }
`;

export const FooterMain = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:1025px) {
        width:35%;
    }
    
    @media (max-width:965px) {
        width:30%;
    }
    
    @media (max-width:520px) {
        width:90%;
    }


    > h3 {
        font-size: 60px;
        margin-bottom: 15px;
        color: #b8b8d1;
        letter-spacing: 0.5px;
        font-weight: 700;
        text-decoration: underline;

        @media (max-width:1200px) {
            font-size: 50px;
        }

        @media (max-width:900px) {
            font-size: 40px;
        }   
        
        @media (max-width:695px) {
            font-size: 30px;
        }

        :hover {
            cursor: pointer;
        }
    }

    > p {
        color: #b8b8d1;
       font-size: 18px;
        text-align: center;
       
       @media (max-width:900px) {
            font-size: 15px;
        }   

        @media (max-width:695px) {
            font-size: 13px;
        }
    }
`;

export const FooterMiddle = styled.div`
    width: 18% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width:1025px) {
        width:20%;
    }

    
    @media (max-width:520px) {
        flex-direction: row;
        width:90%;
        margin:10px auto 10px;
    }

    > a {
        font-size: 30px;
        color: #b8b8d1;
        font-weight: 500;
        text-align: center;

        @media (max-width:1200px) {
            font-size: 25px;
        }

        @media (max-width:900px) {
            font-size: 23px;
        }

        @media (max-width:695px) {
            font-size: 18px;
        }

        @media (max-width:520px) {
            margin-right:20px;
        }
        

        :hover {
            cursor: pointer;
        }
    }
    > p {
        margin: 7px 0;
        font-size: 20px;
        color: #b8b8d1;

        @media (max-width:900px) {
            font-size: 17px;
        }

        @media (max-width:695px) {
            font-size: 15px;
        }

        @media (max-width:695px) {
            font-size: 13px;
        }

        
        @media (max-width:520px) {
            margin-right:20px;
        }

        :hover {
            cursor: pointer;
        }
    }
`;

export const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 18%;
    margin-right: 30px;

    @media (max-width:835px) {
        margin-right:0;
        width:15%;
    }

    @media (max-width:520px) {
        flex-direction: row;
        width:95%;
        margin:10px auto 10px;
        align-items: center;
    }

    > h4 {
        font-size: 25px;
        color: #b8b8d1;
        text-decoration: underline;

        @media (max-width:900px) {
            font-size: 22px;
        }

        @media (max-width:695px) {
            font-size:17px;
        }

        @media (max-width:520px) {
            margin-right:10px;
        }


        :hover {
            cursor: pointer;
        }
    }

    > a {
        text-decoration: none;
        color: #b8b8d1;
        padding:10px 0;
        font-size: 18px;

        @media (max-width:900px) {
            font-size: 15px;
        }

        @media (max-width:695px) {
            font-size: 14px;
        }

        @media (max-width:520px) {
            margin-right:20px;
        }

        :hover {
            cursor: pointer;
        }
    }
`;