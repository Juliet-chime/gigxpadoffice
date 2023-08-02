import styled from "styled-components";
import image from '../../assets/images/addUser-bg.png'
import { color } from "../../assets/color";

export const AddUserStyle = styled('div')`
height: auto;

.bgHolder{
  height: 604px;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media (max-width: 1024px) {
   height: 100%;
  }
}
`

export const RolesStyle = styled.div`
border: 1px solid #E3E3E3;
padding: 20px;
border-radius: 12px;
margin-bottom:10px;
p{
    font-size:14px;
font-family: 'Rubik', sans-serif;
color: ${props => props.nameColor || color.lighterAsh}; 
}
h2{
    font-size:13px;
font-family: 'Rubik', sans-serif;
color: ${props => props.bigAmtColor || color.mainColor};
font-weight:500;
}
`