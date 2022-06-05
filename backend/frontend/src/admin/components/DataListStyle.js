import styled
 from "styled-components";
 import EditIcon from '@mui/icons-material/Edit';
 import DeleteIcon from '@mui/icons-material/Delete';
 import { StyledLink } from "../../GlobalStyle";

 export const TableContainer = styled.table`
  @media(max-width:810px) {
    width:100%;
  }
  @media(max-width:565px){
    overflow:auto;
  }

    th{
       margin-bottom: 10px;
       font-size: 28px;
       background-color: #5b5f97;
       color:#fff;
       border-right: 2px solid #fff;

       @media (max-width: 1060px) {
         font-size:22px;
       }

       @media (max-width:625px) {
         font-weight:500;
       }
    }


    tbody {
      background-color: #d9ead3;
    }

    td {
        border-bottom: 2px solid #6a329f;
        border-right: 2px solid #6a329f;
        text-align: center;
        margin-bottom: 10px;
        padding:5px 5px;
    }
 `;

export const AdvancedLink = styled(StyledLink)`
    width: 100%;
   font-size: 20px;
   font-weight: 600;
    color:#000;

    @media (max-width: 1060px) {
      font-size:18px;
    }
    
    @media(max-width:650px) {
      font-size:15px;
      font-weight:normal;
    }
`;  


 export const EditBtn = styled(EditIcon)`
   margin-right:10px;

   :hover{
     cursor: pointer;
   }
 `;

 export const DeleteBtn = styled(DeleteIcon)`
   margin-left:10px;

   :hover{
     cursor: pointer;
   }
 `;
