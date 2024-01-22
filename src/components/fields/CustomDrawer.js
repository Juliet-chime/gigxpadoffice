import { Drawer } from 'antd'
import React from 'react'

const CustomDrawer = ({ children, ...props }) => {
    return <Drawer {...props}>{children}</Drawer>
}

export default CustomDrawer
