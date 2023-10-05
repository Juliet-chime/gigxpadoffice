import styled from "styled-components";
import { color } from "../../assets/color";

export const DateFilterStyle = styled.div`
   display: flex;
    justify-content: space-between;
    align-items: center;
    border: solid 1px ${color.blockAsh};
    border-left-color: ${color.dateColor};
    border-right-color: ${color.dateColor};
    border-bottom-color: ${color.dateColor};
    .linethrough{
        border: solid 1px ${color.blockAsh};
        height: 50px;
    }
`