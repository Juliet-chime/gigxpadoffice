import styled from "styled-components"

export const TableWrapperStyles = styled('div')`
border: ${props => props.tableBorder || '1px solid #EEEEEE'};
border-right: none;
border-top: ${props => props.tableTop};
border-radius: ${props => props.tableRadius || '3px'};
`

export const CustomHeaderStyle = styled('div')`
border-bottom: ${props => props.filterBottom || 'solid 1px #eeeeee'};
border:${props => props.filterBorder}
`