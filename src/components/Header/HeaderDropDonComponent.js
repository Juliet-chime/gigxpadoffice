import React from 'react'
import styled from 'styled-components'
import { color } from '../../assets/color'


const ComponentStyle = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin:${props => props.margin || '0px 0px 10px 0px'};
p{
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    color: ${color.lighterAsh};
}
`

const HeaderDropDonComponent = ({icon,label,...props}) => {
    const Icon = icon
  return (
    <ComponentStyle {...props}>
    <Icon/>
    <p>{label}</p>
    </ComponentStyle>
  )
}

export default HeaderDropDonComponent