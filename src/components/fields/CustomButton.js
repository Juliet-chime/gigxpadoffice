import React from 'react'
import { BtnStyle } from './style'

const CustomButton = ({text,...props}) => {
  return <BtnStyle {...props}>{text}</BtnStyle>
}

export default CustomButton