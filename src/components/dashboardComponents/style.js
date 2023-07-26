import styled from "styled-components";
import { color } from "../../assets/color";

export const DashboardHeaderStyle = styled('div')`
p{
font-size: 19px;
letter-spacing: 0px;
color: ${color.lighterAsh};
font-family: 'Rubik', sans-serif;
margin-bottom: -3px;
}
h2{
    font-size: 30px;
    font-weight: bold;
    color: ${color.mainColor};
    font-family: CabinetGrotesk;
}
h4{
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
    color: ${color.mainColor};
}
`

export const SectionText = styled('div')`
font-size:16px;
font-family: 'Rubik', sans-serif;
color: ${color.lighterAsh};
`

export const BlockStyle = styled('div')`
border: ${props => props.border || `1px solid ${color.blockAsh}`};
border-radius:${props => props.radius || '15px'};
padding:${props => props.padding || '0px 30px'};
display:${props => props.flex ? 'flex' : ''};
flex-direction:${props => props.flex ? 'row' : ''};
align-items:${props => props.flex ? 'center' : ''};
justify-content:${props => props.flex ? 'center' : ''};
height: ${props => props.height || '135px'};
background-color:${props => props.bg};
@media (max-width: 768px) {
    padding: 10px 5px !important;
}
.block-top{
    border:solid red;
    display:flex;
}
p{
    font-size:16px;
font-family: 'Rubik', sans-serif;
color: ${props => props.nameColor || color.lighterAsh};   
@media (min-width: 768px) and (max-width: 1024px)  {
   font-size:15px; 
}
}
h2{
    font-size:28px;
font-family: 'Rubik', sans-serif;
color: ${props => props.bigAmtColor || color.mainColor};
font-weight:500;
@media (min-width: 768px) and (max-width: 1024px)  {
   font-size:18px; 
}
}
h4{
font-size:14px;
font-family: 'Rubik', sans-serif;
color: ${props => props.smallAmtColor || color.mainColor};
font-weight:500;
}
`

