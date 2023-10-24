import { Tabs } from 'antd'
import React from 'react'

const CustomTab = ({ items, ...props }) => {
    return <Tabs defaultActiveKey="1" items={items} {...props} />
}

export default CustomTab
