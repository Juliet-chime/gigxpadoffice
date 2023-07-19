import styled from 'styled-components'
import { color } from '../../assets/color'

export const LayoutContainer = styled.div`
height: 100vh;
background:${color.offWhite};
`
export const MobileLogo = styled.div`
display: none;
width: 100px;
margin: auto;
padding: 30px 0px;
img{
        width: 100%;
        object-fit: contain;
    } 
@media (max-width: 920px) {
    display: block;
}
`

export const LayoutChildwrapper = styled.div`
  width: 500px;
  margin: auto;
  margin-top:14%;

@media (max-width: 920px) {
    width: 95%; 
    margin-top:10%;
    padding: 1rem;
    box-shadow: 1px 1px 9px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 1px 9px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 9px 0px rgba(0,0,0,0.75);
}

@media (min-width: 768px) and (max-width: 920px)  {
    width: 65%; 
}
    
h1{
font-weight:bold;
font-size: 30px;
font-family: CabinetGrotesk;
color: ${color.mainColor};
max-width: 296px;
margin-bottom: 6px;
letter-spacing: 0px;
}
p{
    font-family: 'Rubik', sans-serif;
    font-size:14px;
    font-weight:normal;
    color: #67777E;
}
`

export const LayoutBgContainer = styled.div`
  height: 100vh;
  background-color:#F2F3F4;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  .logo-container{
    padding-top: 40px;
    padding-left: 32px;
    img{
        object-fit: contain;
    }
  }
`