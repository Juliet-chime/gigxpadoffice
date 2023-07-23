import styled from "styled-components";

export const ChartHeaderStyle = styled.div`
display: flex;
align-items: ${props => props.tab ? '' :'center'};
justify-content: space-between;
.today{
    border: solid;
    margin-top: ${props => props.tab ? '15px' :''};
}
`
export const DateFilterStyle = styled.div`
border: solid;
border: 1px solid #E5E5E5;
`