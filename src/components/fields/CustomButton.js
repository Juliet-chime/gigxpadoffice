import React from 'react'
import { BtnStyle } from './style'

const CustomButton = ({ text, children, ...props }) => {
  return <BtnStyle {...props}>
    {text}
    {children ? children : null}
  </BtnStyle>
}

export default CustomButton