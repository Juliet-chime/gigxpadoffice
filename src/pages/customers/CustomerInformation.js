import { Col, Row } from 'antd'
import React from 'react'
import dummyPerson from '../../assets/images/dummyPerson.svg'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { color } from '../../assets/color'
import flag from '../../assets/images/9jaflag.svg'


const CustomerInfoBlock = ({ title, value, icon, flag }) => {
    const Icon = icon
    return <div className='border border-ash-2 rounded-md p-3 flex items-center justify-between'>

        <div className='flex items-center gap-3'>
            {flag ? <img src={flag} alt='' /> : null}
            <div>
                <p className='text-xs md:text-sm lg:text-sm xl:text-sm font-medium text-lighterAsh'>{title}</p>
                <h3 className='text-xs ms:text-sm lg:text-sm xl-text-sm font-bold text-mainColor'>{value}</h3>
            </div>
        </div>
        {icon ? <Icon color={color.secondaryColor} fontSize={20} /> : null}
    </div>
}

const CustomerInformation = ({data}) => {
    return (
        <div className='mt-6'>
            <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={3}>
                    <div className='w-8 md:w-20 lg:w-20 xl:w-20 h-8  md:h-20 lg:h-20 xl:h-20 rounded-full flex items-center justify-center bg-ash-01'>
                        <img src={dummyPerson} alt='customer-profile' className='object-contain w-8 md:w-14 lg:w-14 xl:w-14 h-8  md:h-14 lg:h-14 xl:h-14 rounded-large' />
                    </div>
                </Col>
                <Col xs={20} sm={20} md={10} lg={10} xl={9}>
                    <div>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <CustomerInfoBlock title={'First Name'} value={data?.firstName} />
                            </Col>
                            <Col span={12}>
                                <CustomerInfoBlock title={'Last Name'} value={data?.lastName} />
                            </Col>
                            <Col span={24}>
                                <CustomerInfoBlock title={'Email Address'} value={data?.email} icon={IoIosCheckmarkCircleOutline} />
                            </Col>
                            <Col span={24}>
                                <CustomerInfoBlock title={'Phone Number'} value={'08099367838'} icon={IoIosCheckmarkCircleOutline} />
                            </Col>
                            <Col span={24}>
                                <CustomerInfoBlock title={'Region'} value={data?.country} flag={flag} />
                            </Col>
                            <Col span={12}>
                                <CustomerInfoBlock title={'Account Level'} value='Tier 1' />
                            </Col>
                            <Col span={12}>
                                <CustomerInfoBlock title={'Bank account'} value='9045859549' />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CustomerInformation