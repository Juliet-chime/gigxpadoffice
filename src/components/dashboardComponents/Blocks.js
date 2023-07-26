import React from 'react'
import { BlockStyle } from './style'

const Blocks = ({ name, bigAmount, smallAmount, curreny, children, ...props }) => {
  return (
    <BlockStyle {...props}>
      <div>
        {!!name && <p>{name}</p>}
        {!!bigAmount && <h2>{bigAmount}</h2>}
        {!!smallAmount && <h4>{smallAmount} {curreny}</h4>}
      </div>
      {children}
    </BlockStyle>
  )
}

export default Blocks