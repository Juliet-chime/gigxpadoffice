import { Checkbox } from 'antd'
import React from 'react'
import { CheckSpan } from './style'

const CheckField = ({ label, ...props }) => {
  return <Checkbox {...props}>
          <CheckSpan>{label}</CheckSpan>
         </Checkbox>
}

export default CheckField