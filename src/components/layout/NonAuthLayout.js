import React from 'react'
import { LayoutBgContainer, LayoutChildwrapper, LayoutContainer, LogoLock } from './style'
import { Col, Row } from 'antd'
import gpad from '../../assets/images/logo/XPADLOGO.svg'
import { IoMdLock } from 'react-icons/io'

const NonAuthLayout = ({ children, title, subText, image, lock, width, maxWidth, spanWidth }) => {
  return (
    <LayoutContainer>
      <Row>
        <Col xs={0} sm={0} md={0} lg={8} xl={8}>
          <LayoutBgContainer image={image}>
            <div className='logo-container'>
              <img src={gpad} alt='logo' />
            </div>
          </LayoutBgContainer>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <LogoLock lock={lock}>
            <div className='mobile_logo'>
              <img src={gpad} alt='logo' />
            </div>
            {lock ?
              <div className='lock' justify='end'>
                <IoMdLock className='iLock' />
              </div>
              : null
            }
          </LogoLock>

          <LayoutChildwrapper width={width} maxWidth={maxWidth} lock={lock} spanWidth={spanWidth}>
            {title ? <h1>{title}</h1> : null}
            {subText ? <p>{subText}</p> : null}
            {children}
          </LayoutChildwrapper>
        </Col>
      </Row>
    </LayoutContainer>
  )
}

export default NonAuthLayout