import styled from "styled-components"

export const TableWrapperStyles = styled('div')`
border: ${props => props.border || '1px solid #EEEEEE'};
border-right: none;
border-top: ${props => props.top};
border-radius: ${props => props.radius || '3px'};
`

export const CustomHeaderStyle = styled('div')`
border-bottom: ${props => props.bottom || 'solid 1px #eeeeee'};
border:${props => props.headBorder}
`