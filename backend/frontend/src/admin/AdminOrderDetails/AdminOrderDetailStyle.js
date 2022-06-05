import styled from 'styled-components';


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

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    margin-top: 10px;
    font-weight: 700;

    h2 {
        font-size: 40px;
        margin-top:20px;
        color: #5b5f97;

        @media(max-width:470px) {
            font-size:35px;
        }
    }
`;

export const BottomContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
    margin-top: 10px;
    margin-bottom:10px;
    height: auto;
    text-align: left;

    h4 {
        padding-left:20px;
        font-size: 30px;
        text-decoration: underline;

        @media(max-width:470px) {
            font-size:25px;
        }
    }
`;

export const Line = styled.hr`
    margin-left:20px;
    width:90%;
`;

export const DetailContainer  = styled.div`
    width:100%;
    padding-left:40px;

    @meida(max-width:385px) {
        padding-left:20px;
    }
    h4 { 
        font-size:25px; 
        padding-left:0;

        @media(max-width:470px) {
            font-size:22px;
        }
    }
    > h5 {
        font-size: 20px;
        @media(max-width:470px) {
            font-size:18px;
        }
    }

    > h6 { 
        font-size: 18px;
        @media(max-width:470px) {
            font-size:15px;
        }
    }
`;

export const DetailBottomContainer = styled.div`
    width:100%;
    padding-left:40px;

`;
