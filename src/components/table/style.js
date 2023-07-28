import styled from "styled-components"

export const TableWrapperStyles = styled('div')`
border: ${props => props.border || '1px solid #EEEEEE'};
border-right: none;
border-radius: ${props => props.radius || '3px'};
`

export const CustomHeaderStyle = styled('div')`
border-bottom: solid 1px #eeeeee;
`