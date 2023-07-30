import styled from "styled-components";
import image from '../../assets/images/addUser-bg.png'

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