import { Input } from 'formik-antd'
import React from 'react'
import styled from 'styled-components'

export const FieldStyle = styled(Input)`
    background-color: ${(props) => props.bg || 'transparent'} !important;
    border: ${(props) => props.border || 'none'} !important;
    height: ${(props) => props.height || '3.125rem'}!important;
    color: ${(props) => props.color || 'black'}!important;
    border-radius: ${(props) => props.radius || '0.75rem'}!important;
    padding: ${(props) => props.padding}!important;
`

const CustomFormikField = ({ type, ...props }) => {
    return (
        <>
            {type === 'textarea' ? (
                <Input.TextArea {...props} />
            ) : type === 'search' ? (
                <Input.Search {...props} />
            ) : type === 'password' ? (
                <Input.Password {...props} />
            ) : (
                <FieldStyle {...props} />
            )}
        </>
    )
}

export default CustomFormikField
