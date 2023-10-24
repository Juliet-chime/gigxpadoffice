import styled from 'styled-components'
import { color } from '../assets/color'

export const WalletCardStyles = styled('div')`
    height: 236px;
    max-height: 240px;
    background-color: ${(props) => props.bg};
    color: ${color.coinColor};
    font-weight: 600;
    padding: 20px;
    border-radius: 15px;
    @media (max-width: 768px) {
        height: 170px;
    }
`
