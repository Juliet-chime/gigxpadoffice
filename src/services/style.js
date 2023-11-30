import styled from 'styled-components'
import { color } from '../assets/color'

export const WalletCardStyles = styled('div')`
    height: 200px;
    max-height: 240px;
    background-color: ${(props) => props.bg};
    color: ${color.coinColor};
    font-weight: 600;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    transition: all ease 1s;
    .rate {
        display: block;
    }
    .viewledger-wrapper {
        position: relative;
        border: solid blue;
    }
    .viewledger {
        display: none;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        height: 170px;
    }
    &:hover .viewledger {
        display: block;
    }
    &:hover .rate {
        display: none;
    }
`
