import React from 'react'
import styled from 'styled-components'
import { color } from '../../assets/color'

export const ErrorWrapper = styled.span`
    color: ${color.RED};
    font-size: 10px;
    font-weight: 600;
    padding-top: 10px;
`

const ErrorField = ({ error }) => {
    return <ErrorWrapper>{error}</ErrorWrapper>
}

export default ErrorField
