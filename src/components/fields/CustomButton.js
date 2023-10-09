import React from 'react'
import { BtnStyle } from './style'
import { SubmitButton } from 'formik-antd'
import styled from 'styled-components'

const FormikBtnStyle = styled(SubmitButton)`
background-color:${props => props.bg || 'transparent'} !important;
color:${props => props.color || 'white'} !important;
border: ${props => props.border || 'none'} !important;
height: ${props => props.height || '3.125rem'}!important;
width: ${props => props.width || '100%'}!important;
padding: ${props => props.padding}!important;
font-weight: ${props => props.weight || 500}!important;
font-size: ${props => props.size}!important;
border-radius: ${props => props.radius || '0.75rem'}!important;
box-shadow:none !important;
`

export const CustomFormikButton = ({ text, children, ...props }) => {
  return <FormikBtnStyle {...props}>
    {text}
    {children ? children : null}
  </FormikBtnStyle>
}


const CustomButton = ({ text, children, ...props }) => {
  return <BtnStyle {...props}>
    {text}
    {children ? children : null}
  </BtnStyle>
}

export default CustomButton