import { Button, Input } from "antd";
import styled from "styled-components";
import { color } from "../../assets/color";

export const FieldStyle = styled(Input)`
background-color:${props => props.bg || 'transparent'} !important;
border: ${props => props.border || 'none'} !important;
height: ${props => props.height || '3.125rem'}!important;
color: ${props => props.color || 'black'}!important;
border-radius: ${props => props.radius || '0.75rem'}!important;
`

export const BtnStyle = styled(Button)`
background-color:${props => props.bg || 'transparent'} !important;
color:${props => props.color || 'white'} !important;
border: ${props => props.border || 'none'} !important;
border-bottom: ${props => props.right || 'none'} !important;
height: ${props => props.height || '3.125rem'}!important;
width: ${props => props.width || '100%'}!important;
padding: ${props => props.padding}!important;
font-weight: ${props => props.weight || 500}!important;
border-radius: ${props => props.radius || '0.75rem'}!important;
`

export const CheckSpan = styled.span`
color: ${color.mainColor};
font-family: 'Rubik', sans-serif;
font-size:0.875rem;
font-weight:400;
`