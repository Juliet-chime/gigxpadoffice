import { Input } from 'antd'
import React from 'react'
import { FieldStyle } from './style'

const CustomInputField = ({ type, ...props }) => {
  return (
    <>
      {type === 'textarea' ?
        <Input.TextArea {...props} />
        : type === 'search'
          ? <Input.Search {...props} />
          : type === 'password'
            ? <Input.Password {...props} />
            : <FieldStyle {...props} />
      }
    </>
  )
}

export default CustomInputField