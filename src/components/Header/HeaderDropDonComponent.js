import React from 'react'
import styled from 'styled-components'
import { color } from '../../assets/color'

const ComponentStyle = styled.div`
    cursor: pointer;
    .text-display {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: ${(props) => props.margin || '0px 0px 5px 0px'};
        background-color: ${(props) => props.bg};
        padding: ${(props) => props.padding || '5px'};
        border-radius: ${(props) => props.radius};
        border: ${(props) => props.border};
    }
    p {
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
        color: ${color.lighterAsh};
    }
`

const HeaderDropDownComponent = ({
    icon,
    label,
    closeIcon,
    children,
    ...props
}) => {
    const Icon = icon
    const CloseIcon = closeIcon
    return (
        <ComponentStyle {...props}>
            <div className="text-display">
                <div className="flex items-center gap-3">
                    <Icon />
                    <p>{label}</p>
                </div>
                {closeIcon ? (
                    <CloseIcon className="text-mainColor text-sm font-medium" />
                ) : null}
            </div>
            {children}
        </ComponentStyle>
    )
}

export default HeaderDropDownComponent
