import styled from "styled-components";
import { color } from "../../assets/color";

export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding: 10px 60px;
@media (max-width: 920px) {
padding: 10px 0px;
}
.notification-holder{
.bell-holder{
    padding: 0px 25px;
    border-right: solid 1px ${color.lighterAsh};
    position: relative;
    .bell{
        font-size: 25px;
        color: ${color.mainColor};
        cursor: pointer;
    }
    .small-cirle{
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        right:22px;
        background: ${color.secondaryColor};
    }
}
}
.user-wrapper{
    .user-section{
        display: flex;
    align-items: center;
    padding: 0px 25px;
    gap: 10px;
    cursor: pointer;
    .user-info{
       .user-name{
        font-size: 17px;
        font-family: 'Rubik', sans-serif;
        color: ${color.mainColor};
       } 
    }
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
`