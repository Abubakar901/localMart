import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export const TableContainer = styled.table `
  width: 100%;

  @media(max-width:675px){
    overflow:auto;
  }

  th {
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 500;
    background-color: #5b5f97;
    color: #fff;
    border-right: 2px solid #fff;
    padding: 5px 10px;

    @media (max-width: 1055px) {
      font-size: 22px;
    }

    @media (max-width: 860px) {
      font-size: 20px;
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
    padding: 5px 5px;

  }
`;

export const AdvancedLink = styled(Link)
`
  text-decoration: none;
  width: 100%;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
  color: #000;

  @media (max-width: 990px) {
    font-size: 18px;
  }
  @media (max-width: 860px) {
    font-size: 17px;
  }

  @media (max-width:695px) {
    font-size:15px;
  }
  :hover {
    color: #674ea7;
  }
`;



export const EditBtn = styled(EditIcon)
`
  && {
    margin-right: 20px;
  }
  @media (max-width: 895px) {
    && {
      font-size: 20px;
    margin-right: 10px;
    }
  }
  :hover {
    cursor: pointer;
  }
`;

export const DeleteBtn = styled(DeleteIcon)
`
  @media (max-width: 895px) {
    && {
      font-size: 20px;
    }
  }
  :hover {
    cursor: pointer;
  }
`;