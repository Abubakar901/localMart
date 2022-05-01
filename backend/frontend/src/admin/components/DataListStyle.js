import styled
 from "styled-components";
 import EditIcon from '@mui/icons-material/Edit';
 import DeleteIcon from '@mui/icons-material/Delete';

 export const TableContainer = styled.table`

    th{
       margin-bottom: 10px;
       font-size: 28px;
       background-color: #5b5f97;
       color:#fff;
       border-right: 2px solid #fff;
    }


    tbody {
      background-color: #d9ead3;
    }

    td {
       font-size: 20px;
       margin-bottom: 10px;
       border-bottom: 2px solid #6a329f;
       border-right: 2px solid #6a329f;
       font-weight: 600;
       padding:5px 5px;
    }
 `;

 export const EditBtn = styled(EditIcon)`
   margin-right:10px;
 `;

 export const DeleteBtn = styled(DeleteIcon)`
   margin-left:10px;
 `;
