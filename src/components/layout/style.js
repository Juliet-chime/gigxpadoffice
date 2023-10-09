import styled from 'styled-components'
import { color } from '../../assets/color'

export const LayoutContainer = styled.div`
height: 100vh;
background:${color.offWhite};
`

export const LayoutChildwrapper = styled.div`
  width: ${props => props.width || '500px'};
  margin: auto;
  margin-top:10%;

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
max-width: ${props => props.maxwidth || '296px'};
margin-bottom: 6px;
letter-spacing: 0px;
}
p{
    font-family: 'Rubik', sans-serif;
    font-size:14px;
    font-weight:normal;
    color: #67777E;
    max-width: ${props => props.spanWidth || '370px'};
}
`

export const LayoutBgContainer = styled.div`
  height: 100vh;
  background-color:${color.lightWhite};
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  .logo-container{
    padding-top: 40px;
    padding-left: 32px;
    img{
        object-fit: contain;
    }
  }
`
export const LogoLock = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
padding: 30px;
@media (max-width: 920px) {
  justify-content: ${props => props.lock ? 'space-between' : 'center'};
}
.mobile_logo{
  display: none;
  img{
        width: 100%;
        object-fit: contain;
    } 
  @media (max-width: 920px) {
    display: block;
}
}
.lock{
width: 45px;
height: 45px;
border: solid 1px ${color.mainColor};
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
.iLock{
  font-size: 25px;
  color: ${color.mainColor};
}
}
`
export const LogoLinkStyle = styled.a`
text-decoration: ${props => props.underline || 'none'};
font-size: 14px;
color: ${props => props.color || `${color.secondaryColor}`};
font-weight:500;
&:hover{
  color: ${props => props.color || `${color.secondaryColor}`};
  text-decoration: ${props => props.underline};
}
`

