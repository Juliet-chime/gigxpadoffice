import { Alert } from 'antd'
import React from 'react'

const Notification = (props) => {
    return (
        <div className='absolute top-0 w-full'><Alert {...props} /></div>
    )
}

export default Notification