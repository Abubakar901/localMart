import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { CommonBtn } from "../../GlobalStyle";

export const NoOrderContaiener = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  height: 500px;
  width: 100%;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;

export const OrderLine = styled.hr`
  margin-top: 0;
  margin-bottom: 10px;
  width: 90%;
`;

export const OrderCard = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  > h6 {
    font-size: 25px;
    font-weight: 600;
    color: #5b5f97;

    @media(max-width:415px) {
      font-size:18px;
    }
  }
`;

export const CardMidContainer = styled.div`
  > h6 {
    margin: 3px;
    font-size: 25px;
    margin-bottom: 20px;

    @media(max-width:1005px){
      font-size:23px;
    }

    @media(max-width:775px) {
      font-size:20px;
    }

    @media(max-width:415px) {
      font-size:18px;
    }

    > span {
      font-weight: 700;
      color: #5b5f97;
    }
  }

  > p {
    font-size: 20px;
    font-weight: 500;
    margin: 2px;
    text-transform: capitalize;

    @media(max-width:775px) {
      font-size:18px;
    }
    @media(max-width:415px) {
      font-size:15px;
    }
  }
`;

export const OrderProductDetails = styled.div`
  margin-top: 20px;

  > h6 {
    font-size: 20px;
    margin-bottom: 10px;

    @media(max-width:565px) {
      margin-bottom:5px;
    }
   
    @media (max-width: 505px) {
      font-size: 18px;
    }
  }

  @media(max-width:565px) {
    margin-top:5px;
    padding:10px;   
  }

  @media (max-width: 505px) {
    margin-top:0;
    margin-left:10px;
  }

  @media (max-width: 420px) {
    margin-left:5px;
  }

  @media(max-width:420px) {
    font-size:15px;
    margin-left:2px;
  }
`;

export const OrderProductContainer = styled.div`
  height: auto;
  border-radius: 10px;
  background-color: #9fc5e8;
  width: 200px;
  margin: 10px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;

  @media(max-width:1220px) {
    margin-right:10px;
    margin-left:10px;
  }

  @media(max-width:565px) {
    padding:10px;
    width: 175px;
  }

  @media (max-width: 505px) {
    width:100%;
    display:flex;
    flex-direction: row;
    margin: 10px 0;
  }

  @media(max-width:382px) {
    flex-direction:column;
  }
  
  > img {
    width: 100%;
    height: 150px;
    
    @media (max-width: 505px) {
      width:40%;
    }
    @media (max-width: 420px) {
      width:45%;
    }

    @media(max-width:420px) {
      width:40%;
      heigth:100px;
    }

    @media(max-width:382px) {
      width:100%;
    }
  }
`;

export const CardTopContainer = styled.div`
  padding-left: 20x;
  padding-top: 10px;

  > h6 {
    margin: 3px;
    font-size: 28px;
    display: flex;
    justify-content: space-between;
    color: #5b5f97;
    font-weight: 500;

    @media(max-width:1005px) {
        font-size:25px; 
    }

    @media(max-width:415px) {
      font-size:22px;
      margin-bottom:10px;
    }
  }

  > h5 {
    font-size: 25px;
    margin-bottom: 20px;

    @media(max-width:1005px){
      font-size:23px;
    }

    @media(max-width:775px) {
      font-size:22px;
    }

    
    @media(max-width:415px) {
      font-size:18px;
    }
    
    > span {
      font-weight: 700;
      color: ${props => props.statusColor || "#ff0000"}
    }
  }

  > p {
    font-size: 20px;
    font-weight: 500;
    margin: 2px;
    text-transform: capitalize;

    @media(max-width:1005px){
      font-size:20px;
    }

    @media(max-width:775px) {
      font-size:17px;
    }

    @media(max-width:415px) {
      font-size:15px;
    }
  }
`;

export const CardBottomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;

  @media(max-width:1220px) {
    display:flex;
    justify-content: center;
    align-items:center;
  }

  @media(max-width:1125px) {
    padding:0;
  }

  > h6 {
    font-size: 25px;
    color: #5b5f97;
    font-weight: 700;
  }
`;

export const ExploreProductsBtn = styled(CommonBtn)`
  && {
    color: white;
    margin-left: 0px;
    font-size: 20px;
    margin-top: 5px;
    padding: 3px 20px;
    background-color: #5b5f97;
    height: 48px;
    width: 300px;
    border-radius: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 500px) {
    && {
      padding: 3px 15px;
      font-size: 18px;
      width: auto;
    }
  }
  &&:hover {
    background-color: #5b5f97;
  }
`;

export const OrderMainContainer = styled.div`
  width: 95%;
  height: auto;
  background-color: #cfe2f3;
  margin: 40px auto;
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 320px) {
    width: 98%;
  }
`;

export const DeleteBtn = styled(CommonBtn)`
  && {
    color: white;
    margin-left: 0px;
    font-size: 20px;
    margin-top: 5px;
    padding: 3px 20px;
    display:flex;
    align-items:center;
    background-color: #5b5f97;
    height: 40px;
    width:200px;
    border-radius: 20px;
    text-transform: capitalize;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media(max-width:1005px) {
    && {
      font-size:20px;
      height: 30px;
      padding: 3px 5px;
      width:200px;
    }
  }
  @media(max-width:775px) {
    && {
      font-size:0;
      width:auto;
      height:auto;
      padding:2px;
    }
  }

  @media(max-width:415px) {
    && { 
      padding:0;
    }
  }

  &&:hover {
    background-color: #5b5f97;
    cursor: pointer;
  }
`;

export const OrderTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  font-weight: 700;
  padding: 0 60px;

  h4 {
    font-size: 45px;
    color: #5b5f97;
    text-transform: capitalize;

    @media(max-width:430px) {
      font-size: 40px;
    }

    @media(max-width:360px) {
      font-size:35px;
    }
    
    @media (max-width:325px){
      font-size:30px;
    }
  }
`;

export const OrderBottomContainer = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
`;

export const DeleteLogo = styled(DeleteIcon)`
  margin-left: 10px;
  color: #fff;
  font-size: 18px;

  @media(max-width:1005px) {
      font-size:15px;
  }
  
  @media(max-width:775px) {
      margin-left:0;
  }

  :hover {
    cursor: pointer;
  }
`;
