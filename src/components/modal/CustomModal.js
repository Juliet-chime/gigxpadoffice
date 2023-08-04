import { Modal } from 'antd'
import React from 'react'

const CustomModal = ({ children, ...props }) => {
  return (
    <Modal {...props}>
      {children}
    </Modal>
  )
}

export default CustomModal