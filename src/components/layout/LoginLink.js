import React from 'react'
import { LogoLinkStyle } from './style'

const LoginLink = ({text,link,...props}) => {
  return (
    <LogoLinkStyle href={link} {...props}>
      <span>{text}</span>
    </LogoLinkStyle>
  )
}

export default LoginLink