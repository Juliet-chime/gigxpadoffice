import styled from "styled-components";
import { color } from "../../assets/color";

export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px 60px;
gap: 10px;
@media (max-width: 920px) {
padding: 10px 0px;
}
.notification-holder{
.bell-holder{
    position: relative;
    cursor: pointer;
    .bell{
        font-size: 25px;
        color: ${color.mainColor};
    }
    .small-cirle{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: 0;
        background: ${color.secondaryColor};
    }
}
}
.linethrough{
    border: 1px solid ${color.headerLine};
    height: 40px
}
.user-wrapper{
    .user-section{
        display: flex;
        align-items: center;
        gap: 10px; 
        cursor: pointer;
    .user-info{
       .user-name{
        font-size: 17px;
        font-family: 'Rubik', sans-serif;
        color: ${color.mainColor};
       } 
    }
    .person-wrapper{
    width: 38px;
    height: 38px;
    background-color: ${color.lighterWhite};
    border-radius: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
.person{
    margin-bottom: -5px;
    font-size: 35px;
    color: ${color.white};
}
}
    }
}
`