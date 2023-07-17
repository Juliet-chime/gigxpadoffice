import React from 'react'
import { LayoutChildwrapper, LayoutContainer, MobileLogo } from './style'
import { Col, Row } from 'antd'
import gpad from '../../assets/image/logo/XPADLOGO.svg'

const NonAuthLayout = ({children,title,subText}) => {
  return (
    <LayoutContainer>
     <Row>
    <Col xs={0} sm={0} md={0} lg={10} xl={10}>
      col-18 
    </Col>
    <Col xs={24} sm={24} md={24} lg={14} xl={14}>
      <MobileLogo>
        <img src={gpad} alt='logo'/>
      </MobileLogo>
      <LayoutChildwrapper>
       {title ? <h1>{title}</h1> : null}
       {subText ? <p>{subText}</p> : null }
       {children}
      </LayoutChildwrapper>
    </Col>
  </Row>
  </LayoutContainer>
  )
}

export default NonAuthLayout