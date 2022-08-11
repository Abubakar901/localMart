import styled from "styled-components";
import Button from "@mui/material/Button";

export const MainContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: #fff;
  margin: 40px auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 435px) {
    margin-top: 10px;
  }
`;

export const TopContainer = styled.div `
    display: flex;
    text-align:center;
    align-items: center;
    justify-content:center;
    width: 100%;
    margin-top: 10px;
    font-weight: 700;

    h2 {
        font-size: 28px;
        margin-top:10px;
        color: #5b5f97;
    }
`;
export const EditFrom = styled.form `
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

export const EachContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width:100%;

    > input {
        font-size:18px;
        padding:2px 10px;
        border-radius:8px;
        background-color:#e7e5e5;
    }
`;

export const Labels = styled.label `
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 405px) {
    font-size: 18px;
  }
`;


export const UploadImageInput = styled.input `
    font-size:20px;
    margin:10px auto;
    width:130px;
    padding:0;
    font-weight:600;
    border-radius:7px;
`;

export const ImagePreview = styled.div `
    width:100%;
    display:flex;
    margin:10px 0 0;
    padding:5px 10px;
    overflow:auto;

    > img {
        height:100px;
        width:40%;
        margin-right:10px;
    }
`;

export const UpdateBtn = styled(Button)
`
    && {
        color: white;
        padding:3px 20px;
        text-transform:capitalize;
        font-size:15px;
        letter-spacing:0.8px;
        background-color:#5b5f97;
        height: 38px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#5b5f97;
    }
`;