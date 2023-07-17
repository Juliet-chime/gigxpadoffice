import styled from 'styled-components'
import { color } from '../../assets/color'

export const LayoutContainer = styled.div`
height: 100vh;
background:${color.offWhite};
`
export const MobileLogo = styled.div`
display: none;
width: 25%;
margin: auto;
margin-top:10%;
@media (max-width: 920px) {
    display: block;
    }
    img{
        width: 100%;
        object-fit: contain;
    }
`

export const LayoutChildwrapper = styled.div`
width: 448px;
margin: 150px auto;
@media (max-width: 920px) {
        width: 95%;
        margin: 15% auto;
        padding: 1rem;
    box-shadow: 1px 1px 9px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 1px 9px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 9px 0px rgba(0,0,0,0.75);
    }
@media (min-width: 768px) {
    width: 70%;
    margin: 15% auto;
    }
    
h1{
font-weight:bold;
font-size: 30px;
font-family: CabinetGrotesk;
color: ${color.mainColor};
max-width: 296px;
margin-bottom: 6px;
}
p{
    font-family: 'Rubik', sans-serif;
    font-size:14px;
    font-weight:normal;
    color: #67777E;
}
`

