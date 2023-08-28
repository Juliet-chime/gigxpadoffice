import { Col, Row, Tabs } from 'antd'
import React, { useState } from 'react'
import { PiCaretLeft } from 'react-icons/pi'
import { color } from '../../assets/color'
import CustomButton from '../../components/fields/CustomButton'
import CustomerInformation from './CustomerInformation'
import CustomerWalletBalance from './CustomerWalletBalance'
import CustomerKYCDocumentation from './CustomerKYCDocumentation'
import CustomModal from '../../components/modal/CustomModal'
import { IoIosLock } from 'react-icons/io'

const CustomersDetails = () => {

    const onChange = (key) => {
        console.log(key);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (e) => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
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
                        <div className='w-10 h-10 flex items-center justify-center border border-borderLine rounded-full cursor-pointer'>
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
                        <CustomButton text={'Lock Account'} border='1px solid #DBDBDB' color={color.mainColor} radius='25px' onClick={showModal} />
                        <CustomButton text={'Suspend Account'} border='1px solid #DBDBDB' color={color.secondaryColor} radius='25px' />
                    </div>
                </Col>
            </Row>

            <div className='detailcard mt-12'>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
            <CustomModal open={isModalOpen} width={350} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <div className='flex flex-col items-center justify-center gap-4 pt-20'>
                    <div className='w-16 h-16 border border-fieldAsh flex items-center justify-center rounded-full bg-fieldAsh'>
                        <IoIosLock fontSize={24} />
                    </div>
                    <h2 className='text-xl font-bold font-cabinetgrotesk'>Lock this account?</h2>
                    <p className="text-lighterAsh text-lg text-center">This user will not be able to make any transactions but can however still log into the mobile app</p>
                    <CustomButton text={'Yes, lock account'} bg={color.fieldColor} color={color.accessBtnColor} weight='700' height='3.75rem' />
                </div>
            </CustomModal>
        </div>
    )
}

export default CustomersDetails