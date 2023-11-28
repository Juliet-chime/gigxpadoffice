import { Switch } from 'antd'
import React from 'react'

const PrivilegesTitle = ({ title, checked, ...props }) => {
    return (
        <div className="bg-[#E2F2F4] rounded-[8px] flex items-center justify-between p-4 privilege-title">
            <h1
                className={`${
                    checked ? 'text-mainColor' : 'text-lighterAsh'
                } font-bold text-[14px]`}
            >
                {title}
            </h1>
            <Switch {...props} />
        </div>
    )
}

export default PrivilegesTitle
