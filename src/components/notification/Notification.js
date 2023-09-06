import { Alert } from 'antd'
import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const Alerticon = styled.div`
width: 18px;
height: 18px;
display: flex;
align-items: center;
justify-content: center;
background-color:${props => props.type === 'success' ? '#60EFA8' : '#c73e1d'};
border-radius:100%;
.icon{
    font-size:${props => props.type === 'success' ? '16px' : '12px'};
    color: white;
}
`

const Notification = (props) => {
    return (
        <div className={`${props.type === 'error' ? 'bg-secondaryColor' : 'bg-mainColor'} absolute w-full top-0 left-0 z-10 h-12`}>
            <Alert
                showIcon
                icon={<Alerticon type={props.type}>
                    {props.type === 'success' ? <BsCheck className='icon' /> : <FaTimes className='icon' />}
                </Alerticon>}
                {...props}
            />
        </div>
    )
}

export default Notification