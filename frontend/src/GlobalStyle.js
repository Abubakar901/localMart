import styled from "styled-components";
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
    && {
    color: white;
    background-color: #ff6cbc;
    height: 40px;
    padding:3px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    &&:hover {
        background-color: #ff6cbc;
        cursor: pointer;
    }
`;