import React from 'react'
import {
    FormHeading,
    FormParagraph,
    InputContainer,
    LayoutContainer,
    LogoLock,
} from './style'
import { Col, Row } from 'antd'
import gpad from '../../assets/images/logo/XPADLOGO.svg'
import { IoMdLock } from 'react-icons/io'

const NonAuthLayout = ({
    children,
    title,
    subText,
    image,
    lock,
    width,
    maxwidth,
    spanWidth,
}) => {
    return (
        <LayoutContainer className="h-full main-layout-div">
            <div className="vertically-align">
                <Row>
                    {/* <Col xs={0} sm={0} md={0} lg={8} xl={8}>
                        <LayoutBgContainer image={image}>
                            <div className="logo-container">
                                <img src={gpad} alt="logo" />
                            </div>
                        </LayoutBgContainer>
                    </Col> */}
                     {/* <LayoutBgContainer>
                            <div className="logo-container">
                                <img src={gpad} alt="logo" />
                            </div>
                        </LayoutBgContainer> */}
                    <Col type="flex" align="middle">
                        <LogoLock lock={lock}>
                            <div className="mobile_logo">
                                <img src={gpad} alt="logo" />
                            </div>
                            {lock ? (
                                <div className="lock" justify="end">
                                    <IoMdLock className="iLock" />
                                </div>
                            ) : null}
                        </LogoLock>

                        <div className="middle-form">
                            <InputContainer>
                                {title ? (
                                    <FormHeading maxwidth={maxwidth}>
                                        {title}
                                    </FormHeading>
                                ) : null}
                                {subText ? (
                                    <FormParagraph spanWidth={spanWidth}>
                                        {subText}
                                    </FormParagraph>
                                ) : null}
                                {children}
                            </InputContainer>
                        </div>
                    </Col>
                </Row>
            </div>
        </LayoutContainer>
    )
}

export default NonAuthLayout
