import { Divider } from 'antd'
import React from 'react'
import { SectionText } from './style'

const SectionHeader = ({header}) => {
  return (
    <div className='sectionHeader'>
    <Divider orientation="left" orientationMargin="0">
      <SectionText>{header}</SectionText>
    </Divider>
    </div>
  )
}

export default SectionHeader