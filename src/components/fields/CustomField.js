import React from 'react'
import { FieldStyle } from './style'
import { Input } from 'antd'

const CustomInputField = ({ type, ...props }) => {
    return (
        <>
            {type === 'textarea' ? (
                <Input.TextArea {...props} />
            ) : type === 'search' ? (
                <Input.Search {...props} />
            ) : type === 'password' ? (
                <Input.Password {...props} />
            ) : (
                <FieldStyle type={type} {...props} />
            )}
        </>
    )
}

export default CustomInputField
