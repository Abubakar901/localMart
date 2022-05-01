import styled from "styled-components";
import { CommonBtn } from "../../GlobalStyle";

export const DefaultContainer = styled(CommonBtn)`
    && {
        color: #fff;
        font-size:20px;
        margin-left:0px;
        text-transform: capitalize;
        padding:5px 15px;
        background-color: #6a329f;
        border-radius: 30px;
        height:45px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color:#6a329f;
    }`;
