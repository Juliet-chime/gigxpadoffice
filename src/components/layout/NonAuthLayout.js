import React from 'react'
import { LayoutBgContainer, LayoutChildwrapper, LayoutContainer, MobileLogo } from './style'
import { Col, Row } from 'antd'
import gpad from '../../assets/images/logo/XPADLOGO.svg'

const NonAuthLayout = ({children,title,subText,image}) => {
  return (
    <LayoutContainer>
     <Row>
    <Col xs={0} sm={0} md={0} lg={8} xl={8}>
      <LayoutBgContainer image={image}>
        <div className='logo-container'>
        <img src={gpad} alt='logo'/>
        </div>
      </LayoutBgContainer>
    </Col>
    <Col xs={24} sm={24} md={24} lg={16} xl={16}>
      <MobileLogo>
        <img src={gpad} alt='logo'/>
      </MobileLogo>
      <LayoutChildwrapper >
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