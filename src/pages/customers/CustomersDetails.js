import { Col, Row, Tabs } from 'antd'
import React from 'react'
import { PiCaretLeft } from 'react-icons/pi'
import { useParams } from 'react-router-dom'
import { color } from '../../assets/color'
import CustomButton from '../../components/fields/CustomButton'
import CustomerInformation from './CustomerInformation'
import CustomerWalletBalance from './CustomerWalletBalance'
import CustomerKYCDocumentation from './CustomerKYCDocumentation'

const CustomersDetails = () => {

    const params = useParams()
    console.log(params)

    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: `Basic Information`,
            children: <CustomerInformation />,
        },
        {
            key: '2',
            label: `Wallet Balances`,
            children: <CustomerWalletBalance />,
        },
        {
            key: '3',
            label: `KYC Documentation`,
            children: <CustomerKYCDocumentation />,
        },
    ];
    return (
        <div>
            <Row justify="space-between" gutter={[0, 16]}>
                <Col xs={24} sm={24} md={9} lg={9} xl={8}>
                    <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 flex items-center justify-center border border-borderLine rounded-full cursor-pointer'>
                            <PiCaretLeft color={color.mainColor} fontSize={20} />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold text-mainColor font-cabinetgrotesk'>Harold Ajagu</h3>
                            <p className='text-lg text-lighterAsh'>harold.ajagu@gmail.com</p>
                        </div>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={9} lg={6} xl={6}>
                    <div className='flex justify-end gap-3'>
                        <CustomButton text={'Lock Account'} border='1px solid #DBDBDB' color={color.mainColor} radius='25px' />
                        <CustomButton text={'Suspend Account'} border='1px solid #DBDBDB' color={color.secondaryColor} radius='25px' />
                    </div>
                </Col>
            </Row>

            <div className='detailcard mt-12'>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
        </div>
    )
}

export default CustomersDetails